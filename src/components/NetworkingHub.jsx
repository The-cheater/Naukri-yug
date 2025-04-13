import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Users, MessageCircle, Calendar, UserPlus, Search } from 'lucide-react';

const NetworkingHub = () => {
  const [activeTab, setActiveTab] = useState('connections');
  const [searchQuery, setSearchQuery] = useState('');

  const connections = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      company: 'Tech Corp',
      avatar: '/avatars/sarah.jpg',
      mutualConnections: 12
    },
    // Add more connections
  ];

  const groups = [
    {
      id: 1,
      name: 'React Developers',
      members: 1234,
      posts: 156,
      isJoined: true
    },
    // Add more groups
  ];

  const events = [
    {
      id: 1,
      title: 'Tech Meetup 2024',
      date: '2024-03-15',
      time: '18:00',
      location: 'Virtual',
      attendees: 45,
      isRegistered: false
    },
    // Add more events
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Professional Network</CardTitle>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Connection
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="connections">
                    <Users className="h-4 w-4 mr-2" />
                    Connections
                  </TabsTrigger>
                  <TabsTrigger value="groups">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Groups
                  </TabsTrigger>
                  <TabsTrigger value="events">
                    <Calendar className="h-4 w-4 mr-2" />
                    Events
                  </TabsTrigger>
                </TabsList>

                <div className="my-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <TabsContent value="connections" className="space-y-4">
                  {connections.map(connection => (
                    <Card key={connection.id} className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={connection.avatar} />
                          <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold">{connection.name}</h3>
                          <p className="text-sm text-gray-500">{connection.role}</p>
                          <p className="text-sm text-gray-500">{connection.company}</p>
                          <p className="text-sm text-gray-400">{connection.mutualConnections} mutual connections</p>
                        </div>
                        <Button variant="outline" size="sm">Message</Button>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="groups" className="space-y-4">
                  {groups.map(group => (
                    <Card key={group.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{group.name}</h3>
                          <div className="flex gap-4 mt-1">
                            <span className="text-sm text-gray-500">{group.members} members</span>
                            <span className="text-sm text-gray-500">{group.posts} posts</span>
                          </div>
                        </div>
                        <Button variant={group.isJoined ? "outline" : "default"}>
                          {group.isJoined ? 'Joined' : 'Join'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="events" className="space-y-4">
                  {events.map(event => (
                    <Card key={event.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{event.title}</h3>
                          <div className="flex gap-4 mt-1">
                            <span className="text-sm text-gray-500">
                              {new Date(event.date).toLocaleDateString()} at {event.time}
                            </span>
                            <span className="text-sm text-gray-500">{event.location}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{event.attendees} attending</p>
                        </div>
                        <Button variant={event.isRegistered ? "outline" : "default"}>
                          {event.isRegistered ? 'Registered' : 'Register'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Connections</span>
                  <Badge>142</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Groups Joined</span>
                  <Badge>8</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Upcoming Events</span>
                  <Badge>3</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suggested Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add suggested connections here */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkingHub; 