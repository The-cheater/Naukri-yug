import { Button } from './ui/button'
import { GraduationCap, User, Briefcase } from 'lucide-react'

const roleIcons = {
  university: GraduationCap,
  student: User,
  employee: Briefcase,
}

const roleTitles = {
  university: 'University',
  student: 'Student',
  employee: 'Employee',
}

export function RoleCard({ role, description, onClick }) {
  const Icon = roleIcons[role]

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
      <div className="p-4 mb-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {roleTitles[role]}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        {description}
      </p>
      <Button onClick={onClick} className="w-full">
        Continue as {roleTitles[role]}
      </Button>
    </div>
  )
}