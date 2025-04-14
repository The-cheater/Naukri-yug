import Navbar from '../../components/Navbar'
import { 
  Briefcase, FileText, CheckCircle, DollarSign, Clock, Award, Book, 
  User, Zap, BarChart2, Calendar, Bell, Mail, Bookmark, Star, 
  TrendingUp, Lock, ChevronRight, Layers, PenTool, Eye
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card'
import { Progress } from '../../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Badge } from '../../components/ui/badge'

export default function EmployeeDashboard() {
  // Mock data for job applications
  const jobApplications = [
    { 
      company: "Google", 
      position: "Senior Software Engineer", 
      status: "Interview Scheduled", 
      statusColor: "text-blue-500",
      date: "May 21, 2025",
      salary: "$140k - $180k",
      location: "Remote"
    },
    { 
      company: "Amazon", 
      position: "Product Manager", 
      status: "Application Reviewed", 
      statusColor: "text-yellow-500",
      date: "May 18, 2025",
      salary: "$125k - $155k",
      location: "Seattle, WA"
    },
    { 
      company: "Microsoft", 
      position: "UX Designer", 
      status: "Assessment Completed", 
      statusColor: "text-green-500",
      date: "May 15, 2025",
      salary: "$115k - $140k",
      location: "Hybrid"
    },
    { 
      company: "Netflix", 
      position: "Data Engineer", 
      status: "Application Sent", 
      statusColor: "text-gray-500",
      date: "May 12, 2025",
      salary: "$130k - $160k",
      location: "San Francisco, CA"
    },
    { 
      company: "Apple", 
      position: "iOS Developer", 
      status: "Application Sent", 
      statusColor: "text-gray-500",
      date: "May 10, 2025",
      salary: "$135k - $165k",
      location: "Cupertino, CA"
    }
  ];

  // Mock data for skills assessment
  const skillAssessments = [
    { skill: "React", level: 92, status: "Expert" },
    { skill: "Python", level: 85, status: "Advanced" },
    { skill: "SQL", level: 78, status: "Proficient" },
    { skill: "UI/UX Design", level: 70, status: "Intermediate" },
    { skill: "Project Management", level: 88, status: "Advanced" }
  ];

  // Mock data for recommended courses
  const recommendedCourses = [
    { title: "Advanced React Patterns", provider: "Frontend Masters", duration: "8 hours", match: 98 },
    { title: "System Design for Senior Engineers", provider: "Educative", duration: "12 hours", match: 95 },
    { title: "Machine Learning Fundamentals", provider: "Coursera", duration: "6 weeks", match: 90 }
  ];

  // Mock data for upcoming events
  const upcomingEvents = [
    { title: "Tech Conference 2025", date: "June 15, 2025", type: "Conference" },
    { title: "React Meetup", date: "May 25, 2025", type: "Networking" }
  ];

  // Mock data for resume sections
  const resumeSections = [
    { title: "Professional Summary", completion: 100 },
    { title: "Work Experience", completion: 95 },
    { title: "Education", completion: 100 },
    { title: "Skills", completion: 90 },
    { title: "Projects", completion: 75 },
    { title: "Certifications", completion: 80 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute top-20 right-10 text-blue-100 dark:text-blue-900 opacity-10" aria-hidden="true">
        <Layers className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 left-10 text-purple-100 dark:text-purple-900 opacity-10" aria-hidden="true">
        <PenTool className="w-40 h-40" />
      </div>
      
      <div className="container mx-auto px-4 py-8 relative">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Employee Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Advance your career with powerful tools and insights
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full relative transition hover:bg-gray-300 dark:hover:bg-gray-700" aria-label="Notifications">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true"></span>
            </button>
            <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-700" aria-label="Messages">
              <Mail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-blue-500 transition duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications Sent</CardTitle>
              <Briefcase className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 interviews scheduled
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500 transition duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Salary Potential</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+25%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Potential from offers
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500 transition duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Strength</CardTitle>
              <CheckCircle className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Complete your profile
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500 transition duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skill Match</CardTitle>
              <Award className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                For top job matches
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="applications">
            <TabsList className="mb-4">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
              <TabsTrigger value="resume">Resume Builder</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Job Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobApplications.map((job, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0 transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{job.position} at {job.company}</h3>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{job.date}</span>
                              <span className="mx-2">•</span>
                              <DollarSign className="h-3 w-3 mr-1" />
                              <span>{job.salary}</span>
                              <span className="mx-2">•</span>
                              <Briefcase className="h-3 w-3 mr-1" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                          <Badge className={job.statusColor + " transition-all"}>{job.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline transition">
                    View all applications
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Recommended Jobs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="border-b pb-4 last:border-b-0 last:pb-0 transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Senior Product Manager at Tech Inc</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Match: 95% • $120k - $150k • San Francisco, CA
                            </p>
                          </div>
                          <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-300">
                            Apply
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline transition">
                    View all recommendations
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Skills Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skillAssessments.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <span className="font-medium">{skill.skill}</span>
                            <Badge className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">{skill.status}</Badge>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline transition">
                    Take assessment
                  </button>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline transition">
                    View all skills
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </CardFooter>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Top Skills in Demand
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {['Machine Learning', 'Cloud Architecture', 'Data Analysis', 'UI/UX Design'].map((skill, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0 last:pb-0">
                          <span>{skill}</span>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">In Demand</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-b pb-2">
                        <h3 className="font-medium">AWS Certified Solutions Architect</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Expires: Jan 2026</p>
                      </div>
                      <div className="border-b pb-2">
                        <h3 className="font-medium">Google Professional Cloud Developer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Expires: Mar 2026</p>
                      </div>
                      <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline transition">
                        Add certification
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="resume" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Resume Builder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Overall completion</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div className="space-y-4">
                    {resumeSections.map((section, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <h3 className="font-medium">{section.title}</h3>
                            {section.completion === 100 && 
                              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                            }
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{section.completion}%</span>
                        </div>
                        <Progress value={section.completion} className="h-1" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Edit Resume
                  </button>
                  <button className="text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded transition duration-300 flex items-center">
                    <Lock className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                </CardFooter>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      AI Resume Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 rounded">
                        <h3 className="font-medium text-amber-800 dark:text-amber-300">Add quantifiable achievements</h3>
                        <p className="text-sm text-amber-700 dark:text-amber-400">Include metrics and results in your work experience section</p>
                      </div>
                      <div className="p-3 border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 rounded">
                        <h3 className="font-medium text-blue-800 dark:text-blue-300">Update skills section</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-400">Add emerging technologies to match current job requirements</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="h-5 w-5 mr-2" />
                      Resume Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Recruiter views</span>
                        <span className="font-bold">27</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Download count</span>
                        <span className="font-bold">8</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Average time spent</span>
                        <span className="font-bold">45 sec</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="learning" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    Recommended Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendedCourses.map((course, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0 transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{course.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {course.provider} • {course.duration}
                            </p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{course.match}% Match</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline transition">
                    View all courses
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </CardFooter>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                          </div>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Mentor Connections
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h3 className="font-medium">Sarah Johnson</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Senior Engineering Manager at Google</p>
                      </div>
                      <div className="border-b pb-4">
                        <h3 className="font-medium">Michael Chen</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Product Director at Meta</p>
                      </div>
                      <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline transition">
                        Find more mentors
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 transition duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 border-b pb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Interview with Amazon</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Scheduled for May 20, 2025 at 10:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-b pb-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Microsoft Assessment Completed</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Score: 92/100 - May 15, 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <FileText className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Resume Updated</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      May 10, 2025 - 92% complete
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Saved Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Product Designer</h3>
                    <Bookmark className="h-4 w-4 text-blue-500 fill-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dropbox • Remote</p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Frontend Engineer</h3>
                    <Bookmark className="h-4 w-4 text-blue-500 fill-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stripe • San Francisco</p>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Data Scientist</h3>
                    <Bookmark className="h-4 w-4 text-blue-500 fill-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Airbnb • Hybrid</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline transition">
                View all saved jobs
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}