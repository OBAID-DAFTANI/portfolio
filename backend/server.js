'use strict'

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')

const contactRoutes = require('./routes/contactRoutes')

const app = express()
const PORT = process.env.PORT || 5050

// ---------- Security & parsing middleware ----------
app.use(helmet())
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
)
app.use(express.json({ limit: '10kb' }))

// Manual NoSQL-injection guard for req.body only.
// (express-mongo-sanitize is Express 4-only — it tries to reassign req.query,
// which is read-only in Express 5 and crashes the server. We don't need
// req.query/req.params sanitized here since this API only reads req.body.)
const sanitizeBody = (obj) => {
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (key.startsWith('$') || key.includes('.')) {
        delete obj[key]
        continue
      }
      if (typeof obj[key] === 'object') sanitizeBody(obj[key])
    }
  }
  return obj
}
app.use((req, res, next) => {
  sanitizeBody(req.body)
  next()
})
// ---------- Routes ----------
app.use('/api', contactRoutes)

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  })
})

app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found`, code: 'NOT_FOUND' })
})

// ---------- Centralised error handler ----------
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong on our end.',
  })
})

// ---------- Connect DB, then start server ----------
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected')

    const server = app.listen(PORT, () => {
      console.log(`Portfolio API running on port ${PORT}`)
    })

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM received. Shutting down gracefully...')
      server.close(() => {
        mongoose.connection.close(false, () => process.exit(0))
      })
    })
  } catch (err) {
    console.error('Failed to start server:', err.message)
    process.exit(1)
  }
}

start()

module.exports = app