const rateLimit = require('express-rate-limit')

// Contact form is a common spam/abuse target — keep it stricter than general traffic.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages sent — please try again later.' },
})

module.exports = { contactLimiter }
