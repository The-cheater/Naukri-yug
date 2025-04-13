import React, { useContext } from 'react';
import { useTheme } from '../contexts/ThemeProvider';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Rocket, Briefcase, Bell, FileText, Star, TrendingUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import Chatbot from '../components/Chatbot'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Award, Calendar, MessageSquare } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Applied Jobs', value: '12', change: '+2' },
  { icon: Users, label: 'Network', value: '45', change: '+5' },
  { icon: Award, label: 'Skills', value: '8', change: '+1' },
  { icon: Bell, label: 'Notifications', value: '3', change: 'New' }
];

const upcomingEvents = [
  { title: 'Interview with Tech Corp', date: 'Tomorrow, 10:00 AM', type: 'Interview' },
  { title: 'Networking Event', date: 'Friday, 2:00 PM', type: 'Event' },
  { title: 'Skill Assessment Due', date: 'Next Monday', type: 'Assessment' }
];

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const openHackerRankResume = () => {
    window.open('https://www.hackerrank.com/resume', '_blank');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://images.unsplash.com/photo-1472095806550-71b3e8e2e9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
            <AvatarFallback>{currentUser?.name?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {currentUser?.name || 'User'}!</h1>
            <p className="text-muted-foreground">Here's what's happening with your job search</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <span className="text-xs text-green-500">{stat.change}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {event.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Job Search Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Update your resume</h3>
                    <p className="text-sm text-muted-foreground">Keep your resume fresh with recent experiences</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Network more</h3>
                    <p className="text-sm text-muted-foreground">Connect with professionals in your field</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Job Search Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-lg shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Job Search
          </h3>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/jobs')}
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Browse Jobs
            </button>
            <button
              onClick={openHackerRankResume}
              className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Resume Builder
            </button>
          </div>
        </motion.div>

        {/* Applications Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-lg shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Applications
          </h3>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/applications')}
              className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              View Applications
            </button>
            <button
              onClick={() => navigate('/notifications')}
              className="w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Notifications
            </button>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-lg shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className={`text-xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Profile
          </h3>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/profile')}
              className="w-full p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
              Edit Profile
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Settings
            </button>
          </div>
        </motion.div>
      </div>

      <Navbar />
      <Chatbot />
    </div>
  );
};

export default Dashboard;