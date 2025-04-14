import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Naukri-Yug
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}