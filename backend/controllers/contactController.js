const Contact = require('../models/Contact')

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are all required.' })
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ success: false, message: 'Enter a valid email address.' })
    }
    if (message.length < 10) {
      return res.status(400).json({ success: false, message: 'Message is too short.' })
    }

    const contact = await Contact.create({
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      message: message.trim().slice(0, 3000),
    })

    return res.status(201).json({ success: true, message: 'Message received.', id: contact._id })
  } catch (err) {
    next(err)
  }
}

module.exports = { submitContact }
