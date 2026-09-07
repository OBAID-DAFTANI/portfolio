import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-border dark:border-dark-border text-ink-soft dark:text-dark-ink-soft hover:text-signal dark:hover:text-dark-signal hover:border-signal dark:hover:border-dark-signal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
    >
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}
