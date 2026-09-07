export default function Hero() {
  return (
    <section id="top" className="grid-texture">
      <div className="container-content pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 text-sm text-ink-soft dark:text-dark-ink-soft mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-live opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-live"></span>
            </span>
            Open to full-stack roles — Karachi or remote
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl leading-[1.1] font-semibold tracking-tight max-w-[16ch]">
            I ship complete products, end to end.
          </h1>

          <p className="mt-6 text-lg text-ink-soft dark:text-dark-ink-soft max-w-prose leading-relaxed">
            Four deployed applications so far, including an AI-assisted marketplace platform and
            an explainable recruitment tool. Fresh Software Engineering graduate working in the
            MERN stack, based in Karachi, Pakistan.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-5 py-2.5 bg-ink text-paper dark:bg-dark-ink dark:text-dark-bg rounded-md text-sm font-medium hover:opacity-85 transition-opacity"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-border dark:border-dark-border rounded-md text-sm font-medium hover:border-signal dark:hover:border-dark-signal hover:text-signal dark:hover:text-dark-signal transition-colors"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 text-sm font-medium text-ink-soft dark:text-dark-ink-soft hover:text-signal dark:hover:text-dark-signal transition-colors underline underline-offset-4"
            >
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
