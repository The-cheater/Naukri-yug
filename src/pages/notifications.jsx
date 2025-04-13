import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bell, Check, X, Mail, Calendar, AlertTriangle } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const notifications = [
  {
    id: 1,
    type: 'application',
    title: 'Application Received',
    message: 'Tech Corp has received your application for Senior Developer',
    time: '2 hours ago',
    read: false,
    icon: <Mail className="h-5 w-5 text-blue-500" />
  },
  {
    id: 2,
    type: 'interview',
    title: 'Interview Scheduled',
    message: 'Design Hub has scheduled an interview for tomorrow at 2 PM',
    time: '1 day ago',
    read: true,
    icon: <Calendar className="h-5 w-5 text-green-500" />
  },
  {
    id: 3,
    type: 'alert',
    title: 'Profile Incomplete',
    message: 'Complete your profile to increase job matches by 40%',
    time: '3 days ago',
    read: true,
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
  }
]

export default function Notifications() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground p-4 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`hover:shadow-lg transition-all ${!notification.read ? 'border-l-4 border-primary' : ''}`}>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="mt-1">
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{notification.title}</CardTitle>
                    <p className="text-muted-foreground">{notification.message}</p>
                    <p className="text-sm text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                  <div className="flex gap-2">
                    {!notification.read && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </motion.div>
      <Navbar />
    </div>
  )
}