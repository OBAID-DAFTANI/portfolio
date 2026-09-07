import { skillGroups, currentlyLearning } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border dark:border-dark-border">
      <div className="container-content py-20 sm:py-28">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-14">Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p className="font-mono text-xs text-signal dark:text-dark-signal mb-2.5">{g.label}</p>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="text-ink-soft dark:text-dark-ink-soft text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border dark:border-dark-border">
          <p className="font-mono text-xs text-ink-soft dark:text-dark-ink-soft">
            Currently learning: {currentlyLearning.join(', ')}
          </p>
        </div>
      </div>
    </section>
  )
}
