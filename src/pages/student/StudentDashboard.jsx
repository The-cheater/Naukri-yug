import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, Briefcase, FileText, CheckCircle, Clock, 
  Award, Bookmark, Star, Calendar, Edit, Download,
  Rocket, Linkedin, Github, BookOpen, ClipboardCheck
} from 'lucide-react'
import { 
  Card, CardHeader, CardTitle, CardContent, CardFooter 
} from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Progress } from '../../components/ui/progress'
import { Badge } from '../../components/ui/badge'
import Navbar from '../../components/Navbar'

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [resumeProgress] = useState(85)
  const [assessments] = useState([
    { id: 1, name: 'JavaScript Fundamentals', progress: 75, status: 'completed' },
    { id: 2, name: 'React Concepts', progress: 60, status: 'in-progress' },
    { id: 3, name: 'System Design', progress: 30, status: 'not-started' }
  ])

  const applications = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', status: 'interview', date: '2023-05-20' },
    { id: 2, title: 'UX Designer', company: 'Design Hub', status: 'applied', date: '2023-05-18' }
  ]

  const getStatusBadge = (status) => {
    const statusConfig = {
      applied: { color: 'bg-blue-100 text-blue-800', icon: <FileText className="h-4 w-4" /> },
      interview: { color: 'bg-yellow-100 text-yellow-800', icon: <Clock className="h-4 w-4" /> },
      offer: { color: 'bg-green-100 text-green-800', icon: <Award className="h-4 w-4" /> }
    }
    
    return (
      <Badge className={`${statusConfig[status].color} dark:${statusConfig[status].color} gap-1`}>
        {statusConfig[status].icon}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <User className="w-8 h-8" />
            Student Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Welcome back, John! 3 new jobs match your profile
          </p>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Applications</CardTitle>
              <Briefcase className="h-6 w-6 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">3 interviews scheduled</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Resume Strength</CardTitle>
              <FileText className="h-6 w-6 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">{resumeProgress}%</div>
              <Progress value={resumeProgress} className="h-2" />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Improve Resume
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Skill Assessments</CardTitle>
              <ClipboardCheck className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">4/6</div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">2 certifications earned</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Recommendations */}
            <motion.div whileHover={{ y: -5 }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recommended Jobs</CardTitle>
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Senior React Developer</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Tech Corp • $80k - $120k • Remote
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className="bg-green-100 text-green-800">Match 92%</Badge>
                            <Badge variant="outline">2d left</Badge>
                          </div>
                        </div>
                        <Button size="sm">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Skill Assessments */}
            <motion.div whileHover={{ y: -5 }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Skill Assessments</CardTitle>
                    <BookOpen className="h-6 w-6 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {assessments.map(assessment => (
                    <div key={assessment.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{assessment.name}</h4>
                          <Progress 
                            value={assessment.progress} 
                            className="h-2 mt-2"
                          />
                        </div>
                        <Badge variant={assessment.status === 'completed' ? 'default' : 'outline'}>
                          {assessment.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Resume Builder */}
            <motion.div whileHover={{ y: -5 }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Resume Builder</CardTitle>
                    <FileText className="h-6 w-6 text-purple-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Professional Template
                    </h4>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Import from LinkedIn
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Github className="mr-2 h-4 w-4" />
                      Add GitHub Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Deadlines */}
            <motion.div whileHover={{ y: -5 }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <Calendar className="h-6 w-6 text-red-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {applications.map(application => (
                    <div key={application.id} className="flex items-start gap-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                      <div className="mt-1">
                        <Clock className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{application.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {application.company} • {application.date}
                        </p>
                        {getStatusBadge(application.status)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StudentDashboard