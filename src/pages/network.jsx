import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Users,
  MessageCircle,
  UserPlus,
  Building2,
  MapPin,
  Calendar,
  ChevronRight,
  Plus,
  Shield,
  Hash,
  Bell,
  Video
} from 'lucide-react';
import Navbar from '../components/Navbar';

const connections = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    company: 'Tech Corp',
    mutualConnections: 12,
    avatar: 'S',
    isConnected: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovation Hub',
    mutualConnections: 8,
    avatar: 'M',
    isConnected: true
  }
];

const suggestedConnections = [
  {
    id: 3,
    name: 'David Kim',
    role: 'Frontend Developer',
    company: 'WebTech Solutions',
    mutualConnections: 6,
    avatar: 'D'
  },
  {
    id: 4,
    name: 'Lisa Martinez',
    role: 'DevOps Engineer',
    company: 'Cloud Systems',
    mutualConnections: 4,
    avatar: 'L'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Networking Mixer',
    date: 'Mar 15',
    attendees: 45,
    type: 'Online'
  },
  {
    id: 2,
    title: 'Women in Tech Conference',
    date: 'Mar 20',
    attendees: 120,
    type: 'In-Person'
  }
];

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto px-4 max-w-[500px]">
        {/* Header */}
        <div className="py-4 sticky top-0 bg-background z-10 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Professional Network</h1>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Search */}
          <motion.div whileTap={{ scale: 0.98 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search connections..."
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div whileHover={{ y: -3 }}>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-primary">142</div>
              <p className="text-xs text-muted-foreground">Connections</p>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -3 }}>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-primary">8</div>
              <p className="text-xs text-muted-foreground">Groups</p>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -3 }}>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">Events</p>
            </Card>
          </motion.div>
        </div>

        {/* Your Connections */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Your Connections</h2>
          <div className="space-y-3">
            {connections.map((connection) => (
              <motion.div
                key={connection.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                      {connection.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{connection.name}</h3>
                      <p className="text-sm text-muted-foreground">{connection.role}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <Building2 className="h-3 w-3" />
                        <span>{connection.company}</span>
                      </div>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {connection.mutualConnections} mutual connections
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span className="hidden sm:inline">Message</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Suggested Connections */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Suggested Connections</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              See all
            </Button>
          </div>
          <div className="space-y-3">
            {suggestedConnections.map((connection) => (
              <motion.div
                key={connection.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                      {connection.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{connection.name}</h3>
                      <p className="text-sm text-muted-foreground">{connection.role}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <Building2 className="h-3 w-3" />
                        <span>{connection.company}</span>
                      </div>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {connection.mutualConnections} mutual connections
                      </Badge>
                    </div>
                    <Button size="sm" className="gap-1">
                      <UserPlus className="h-4 w-4" />
                      <span className="hidden sm:inline">Connect</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              See all
            </Button>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div className="text-xs font-medium text-primary">{event.date}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Video className="h-4 w-4" />
                        <span>{event.type}</span>
                        <span>•</span>
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
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