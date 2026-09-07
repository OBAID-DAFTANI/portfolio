export default function Approach() {
  return (
    <section id="approach" className="border-t border-border dark:border-dark-border">
      <div className="container-content py-20 sm:py-28">
        <p className="text-sm text-ink-soft dark:text-dark-ink-soft mb-3">How I use AI in what I build</p>

        <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug max-w-prose text-ink dark:text-dark-ink">
          AI interprets and phrases language. It never decides anything that touches money,
          trust, or correctness.
        </blockquote>

        <p className="mt-6 max-w-prose text-ink-soft dark:text-dark-ink-soft leading-relaxed">
          Every feature that touches an outcome — a score, a match, a decision — is computed by
          plain, testable code that I can explain in one sentence. AI only drafts and phrases. And
          every AI-touching feature ships with a fallback, so the product keeps working if the
          model is slow, wrong, or unavailable.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="border border-border dark:border-dark-border rounded-md p-5">
            <p className="font-mono text-xs text-signal dark:text-dark-signal mb-2">Firaasat</p>
            <p className="text-sm text-ink-soft dark:text-dark-ink-soft leading-relaxed">
              The dispute-resolution assistant drafts a suggested outcome from the order's own
              data. A human admin approves every single one — the AI never touches refund status
              directly.
            </p>
          </div>
          <div className="border border-border dark:border-dark-border rounded-md p-5">
            <p className="font-mono text-xs text-signal dark:text-dark-signal mb-2">TalentMatch AI</p>
            <p className="text-sm text-ink-soft dark:text-dark-ink-soft leading-relaxed">
              Semantic matching runs on sentence-transformer embeddings. If that model is
              unavailable, matching degrades to fuzzy string comparison instead of failing outright.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
