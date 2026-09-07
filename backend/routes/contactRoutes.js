const express = require('express')
const router = express.Router()
const { submitContact } = require('../controllers/contactController')
const { contactLimiter } = require('../middleware/rateLimit')

router.post('/contact', contactLimiter, submitContact)

module.exports = router
