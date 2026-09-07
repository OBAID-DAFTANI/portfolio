import { useState } from 'react'
import { Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react'

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5Z" />
  </svg>
)
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message || 'Something went wrong.')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Could not send — please email me directly instead.')
    }
  }

  return (
    <section id="contact" className="border-t border-border dark:border-dark-border">
      <div className="container-content py-20 sm:py-28">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Get in touch</h2>
        <p className="text-ink-soft dark:text-dark-ink-soft max-w-prose mb-12">
          Open to full-stack and AI-integration roles. A message here reaches me directly.
        </p>

        <div className="grid lg:grid-cols-[1fr_320px] gap-14">
          <form onSubmit={handleSubmit} className="space-y-5 max-w-prose">
            <div>
              <label htmlFor="name" className="block text-sm text-ink-soft dark:text-dark-ink-soft mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-md border border-border dark:border-dark-border bg-surface dark:bg-dark-surface focus:outline-none focus:border-signal dark:focus:border-dark-signal transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-ink-soft dark:text-dark-ink-soft mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-md border border-border dark:border-dark-border bg-surface dark:bg-dark-surface focus:outline-none focus:border-signal dark:focus:border-dark-signal transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-ink-soft dark:text-dark-ink-soft mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-md border border-border dark:border-dark-border bg-surface dark:bg-dark-surface focus:outline-none focus:border-signal dark:focus:border-dark-signal transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper dark:bg-dark-ink dark:text-dark-bg rounded-md text-sm font-medium hover:opacity-85 transition-opacity disabled:opacity-60"
            >
              {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === 'loading' ? 'Sending' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-live pt-1">
                <CheckCircle2 className="w-4 h-4" /> Sent — thanks, I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-signal dark:text-dark-signal pt-1">{errorMsg}</p>
            )}
          </form>

          <div className="space-y-4 text-sm">
            <a
              href="mailto:contact.obaidurrehman.dev@gmail.com"
              className="flex items-center gap-3 text-ink-soft dark:text-dark-ink-soft hover:text-signal dark:hover:text-dark-signal transition-colors"
            >
              <Mail className="w-4 h-4" /> contact.obaidurrehman.dev@gmail.com
            </a>
            <a
              href="tel:+923082787558"
              className="flex items-center gap-3 text-ink-soft dark:text-dark-ink-soft hover:text-signal dark:hover:text-dark-signal transition-colors"
            >
              <Phone className="w-4 h-4" /> +92 308 2787558
            </a>
            <a
              href="https://github.com/OBAID-DAFTANI"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink-soft dark:text-dark-ink-soft hover:text-signal dark:hover:text-dark-signal transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> github.com/OBAID-DAFTANI
            </a>
            <a
              href="https://linkedin.com/in/hafiz-obaid-ur-rehman"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink-soft dark:text-dark-ink-soft hover:text-signal dark:hover:text-dark-signal transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" /> linkedin.com/in/hafiz-obaid-ur-rehman
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
