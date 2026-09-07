import ThemeToggle from './ThemeToggle'

export default function Nav({ theme, toggle }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-paper/80 dark:bg-dark-bg/80 border-b border-border dark:border-dark-border">
      <div className="container-content flex items-center justify-between h-16">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
          Obaid Ur Rehman
        </a>
        <nav className="hidden sm:flex items-center gap-7 text-sm text-ink-soft dark:text-dark-ink-soft">
          <a href="#work" className="hover:text-ink dark:hover:text-dark-ink transition-colors">Work</a>
          <a href="#approach" className="hover:text-ink dark:hover:text-dark-ink transition-colors">Approach</a>
          <a href="#skills" className="hover:text-ink dark:hover:text-dark-ink transition-colors">Skills</a>
          <a href="#contact" className="hover:text-ink dark:hover:text-dark-ink transition-colors">Contact</a>
        </nav>
        <ThemeToggle theme={theme} toggle={toggle} />
      </div>
    </header>
  )
}
