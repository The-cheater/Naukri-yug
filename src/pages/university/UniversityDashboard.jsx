import Navbar from '../../components/Navbar'
import { GraduationCap, Users, Briefcase, FileText, BarChart2, Award, Building, Calendar, TrendingUp } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Progress } from '../../components/ui/progress'

export default function UniversityDashboard() {
  // Mock data for different batches
  const batchData = {
    '2026': {
      totalStudents: 452,
      placedStudents: 389,
      placementRate: 86,
      averagePackage: '12.8 LPA',
      topStudents: [
        { name: 'Rohan Sharma', company: 'Microsoft', package: '45 LPA' },
        { name: 'Turanya Patel', company: 'Google', package: '42 LPA' },
        { name: 'Rakesh Kumar', company: 'Amazon', package: '38 LPA' },
        { name: 'Ankita Singh', company: 'Adobe', package: '36 LPA' }
      ],
      companyBreakdown: [
        { company: 'Microsoft', hired: 28 },
        { company: 'Amazon', hired: 23 },
        { company: 'Google', hired: 15 },
        { company: 'TCS', hired: 47 },
        { company: 'Infosys', hired: 42 }
      ]
    },
    '2025': {
      totalStudents: 438,
      placedStudents: 362,
      placementRate: 83,
      averagePackage: '11.2 LPA',
      topStudents: [
        { name: 'Amit Verma', company: 'Amazon', package: '39 LPA' },
        { name: 'Priya Malik', company: 'Microsoft', package: '35 LPA' },
        { name: 'Neeraj Choudhary', company: 'Goldman Sachs', package: '32 LPA' },
        { name: 'Kavita Reddy', company: 'Flipkart', package: '30 LPA' }
      ],
      companyBreakdown: [
        { company: 'Microsoft', hired: 21 },
        { company: 'Amazon', hired: 19 },
        { company: 'TCS', hired: 52 },
        { company: 'Infosys', hired: 45 },
        { company: 'Wipro', hired: 38 }
      ]
    },
    '2024': {
      totalStudents: 420,
      placedStudents: 336,
      placementRate: 80,
      averagePackage: '10.5 LPA',
      topStudents: [
        { name: 'Vikram Joshi', company: 'Microsoft', package: '32 LPA' },
        { name: 'Meera Kapoor', company: 'IBM', package: '28 LPA' },
        { name: 'Rahul Agarwal', company: 'Oracle', package: '26 LPA' },
        { name: 'Sneha Gupta', company: 'Accenture', package: '24 LPA' }
      ],
      companyBreakdown: [
        { company: 'Microsoft', hired: 18 },
        { company: 'Amazon', hired: 15 },
        { company: 'TCS', hired: 58 },
        { company: 'Infosys', hired: 49 },
        { company: 'Wipro', hired: 42 }
      ]
    }
  };

  // Mock data for upcoming and previous recruiters
  const upcomingRecruiters = [
    { company: 'Google', date: 'May 12, 2025', positions: ['Software Engineer', 'Data Scientist'], package: '35-45 LPA' },
    { company: 'Microsoft', date: 'May 18, 2025', positions: ['Full Stack Developer', 'Product Manager'], package: '30-42 LPA' },
    { company: 'Amazon', date: 'May 25, 2025', positions: ['SDE', 'DevOps Engineer'], package: '28-40 LPA' },
    { company: 'Goldman Sachs', date: 'June 2, 2025', positions: ['Quantitative Analyst', 'Technology Analyst'], package: '25-35 LPA' },
  ];

  const potentialRecruiters = [
    { company: 'Apple', lastVisited: 'Never', status: 'Outreach in progress' },
    { company: 'Netflix', lastVisited: '2022', status: 'Awaiting response' },
    { company: 'Uber', lastVisited: '2023', status: 'Confirmed interest' },
    { company: 'Adobe', lastVisited: '2024', status: 'In discussion' },
  ];

  // Mock data for overall placement trends
  const placementTrends = [
    { year: '2022', placementRate: 75, averagePackage: '8.5 LPA', highestPackage: '28 LPA' },
    { year: '2023', placementRate: 78, averagePackage: '9.2 LPA', highestPackage: '30 LPA' },
    { year: '2024', placementRate: 80, averagePackage: '10.5 LPA', highestPackage: '32 LPA' },
    { year: '2025', placementRate: 83, averagePackage: '11.2 LPA', highestPackage: '39 LPA' },
    { year: '2026', placementRate: 86, averagePackage: '12.8 LPA', highestPackage: '45 LPA' },
  ];

  const topIndustries = [
    { industry: 'IT & Software', percentage: 45 },
    { industry: 'Banking & Finance', percentage: 18 },
    { industry: 'E-commerce', percentage: 12 },
    { industry: 'Manufacturing', percentage: 10 },
    { industry: 'Consulting', percentage: 8 },
    { industry: 'Others', percentage: 7 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            NIT Rourkela Placement Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive analytics on student placements and recruiter engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,310</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Across all active batches
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
              <BarChart2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">83%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +3% from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Recruiters</CardTitle>
              <Building className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +12 from last year
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Highest Package</CardTitle>
              <Award className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 LPA</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Microsoft (Batch 2026)
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="2026">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Batch-wise Placement Analysis</h2>
              <TabsList>
                <TabsTrigger value="2026">Batch 2026</TabsTrigger>
                <TabsTrigger value="2025">Batch 2025</TabsTrigger>
                <TabsTrigger value="2024">Batch 2024</TabsTrigger>
              </TabsList>
            </div>

            {Object.keys(batchData).map((batchYear) => (
              <TabsContent key={batchYear} value={batchYear} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{batchData[batchYear].totalStudents}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Placed Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{batchData[batchYear].placedStudents}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{batchData[batchYear].placementRate}%</div>
                      <Progress value={batchData[batchYear].placementRate} className="h-2 mt-2" />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Average Package</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{batchData[batchYear].averagePackage}</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Placed Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {batchData[batchYear].topStudents.map((student, index) => (
                          <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center">
                              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="font-medium">{student.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {student.company}
                                </p>
                              </div>
                            </div>
                            <div className="font-semibold">{student.package}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Company Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {batchData[batchYear].companyBreakdown.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">{item.company}</span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{item.hired} students</span>
                            </div>
                            <Progress 
                              value={(item.hired / batchData[batchYear].placedStudents) * 100} 
                              className="h-2" 
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Recruiters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingRecruiters.map((recruiter, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{recruiter.company}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {recruiter.date} • {recruiter.positions.join(', ')}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-green-600">
                        {recruiter.package}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View all upcoming recruiters
              </button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Potential Recruiters to Invite</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {potentialRecruiters.map((recruiter, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{recruiter.company}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Last visited: {recruiter.lastVisited}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                        {recruiter.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Manage recruiter outreach
              </button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Placement Trends (2022-2026)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Placement Rate</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {placementTrends.map((trend, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="h-24 w-full flex items-end justify-center">
                          <div 
                            className="bg-blue-500 dark:bg-blue-600 w-6 rounded-t"
                            style={{ height: `${trend.placementRate}%` }}
                          ></div>
                        </div>
                        <span className="text-xs mt-1">{trend.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium mb-1">Average Package Growth</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {placementTrends.map((trend, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs font-medium">{trend.averagePackage}</div>
                        <div className="text-xs text-gray-500">{trend.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Industry-wise Placement Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topIndustries.map((industry, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{industry.industry}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{industry.percentage}%</span>
                    </div>
                    <Progress value={industry.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}