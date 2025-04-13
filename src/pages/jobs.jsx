import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  Bookmark,
  Send,
  Building2,
  DollarSign,
  Code,
  Plus
} from 'lucide-react';
import Navbar from '../components/Navbar';

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Innovators',
    location: 'Remote',
    posted: '2d ago',
    type: 'Full-time',
    salary: '$120k - $150k',
    skills: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    title: 'Mobile Developer',
    company: 'App Masters',
    location: 'New York, NY',
    posted: '1d ago',
    type: 'Contract',
    salary: '$90 - $120/hr',
    skills: ['React Native', 'Swift', 'Kotlin']
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'Web Solutions',
    location: 'San Francisco, CA',
    posted: '3h ago',
    type: 'Part-time',
    salary: '$80k - $110k',
    skills: ['Python', 'Django', 'AWS']
  }
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto px-4 max-w-[500px]">
        {/* Header */}
        <div className="py-4 sticky top-0 bg-background z-10 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Job Search</h1>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Search */}
          <motion.div whileTap={{ scale: 0.98 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or keywords"
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </motion.div>
          
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'Remote', 'Full-time', 'Contract', 'Part-time'].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="rounded-full px-4 h-8 text-xs whitespace-nowrap"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Job Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.div whileHover={{ y: -3 }}>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">Applications</p>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -3 }}>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-primary">8</div>
              <p className="text-xs text-muted-foreground">Saved Jobs</p>
            </Card>
          </motion.div>
        </div>

        {/* Recommended Jobs */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Recommended For You</h2>
          <div className="space-y-3">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{job.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Building2 className="h-3 w-3" />
                            <span>{job.company}</span>
                          </div>
                        </div>
                      </div>
                      <Bookmark className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="secondary" className="text-xs gap-1">
                        <Clock className="h-3 w-3" />
                        {job.posted}
                      </Badge>
                      <Badge variant="secondary" className="text-xs gap-1">
                        <DollarSign className="h-3 w-3" />
                        {job.salary}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} className="text-xs gap-1">
                          <Code className="h-3 w-3" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 gap-1">
                        <Send className="h-4 w-4" />
                        Apply
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-20 right-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button size="lg" className="rounded-full h-14 w-14 shadow-lg">
            <Plus className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
      <Navbar />
    </div>
  );
}