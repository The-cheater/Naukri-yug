import { Link, useNavigate } from 'react-router-dom'
import { Moon, Sun, User, Briefcase, LayoutDashboard, Settings, LogOut, Users, Award, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '../contexts/ThemeProvider'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { signout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    signout()
    navigate('/')
  }

  const navItems = [
    { icon: LayoutDashboard, path: '/dashboard', label: 'Dashboard' },
    { icon: Briefcase, path: '/jobs', label: 'Jobs' },
    { icon: Users, path: '/network', label: 'Network' },
    { icon: Award, path: '/skills', label: 'Skills' },
    { icon: User, path: '/profile', label: 'Profile' },
  ]

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-muted z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 transition-colors"
              >
                <Link to={item.path} className="flex flex-col items-center">
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </Button>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10 transition-colors"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <span className="text-xs mt-1">Theme</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="rounded-full hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="h-5 w-5 text-red-500" />
            </Button>
            <span className="text-xs mt-1">Logout</span>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}