import { useState, useEffect } from 'react';
import { motion, AnimatePresence, stagger } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { User, Settings, FileText, Bell, LogOut, Mail, Briefcase, MapPin, Phone, Edit2, Save, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeProvider';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const hoverVariants = {
  hover: { scale: 1.02, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
  tap: { scale: 0.98 }
};

const stats = [
  { label: "Profile Views", value: "1,245", change: "+12%" },
  { label: "Applications", value: "24", change: "+3" },
  { label: "Saved Jobs", value: "8", change: "+1" }
];

export default function Profile() {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    currentRole: 'Senior React Developer',
    bio: 'Experienced React developer with a passion for building beautiful and performant web applications.'
  });

  const handleSave = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openHackerRankResume = () => {
    window.open('https://www.hackerrank.com/resume', '_blank');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-space-pattern' : 'bg-gradient-to-b from-blue-50 to-white'} text-foreground p-4 pb-20`}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.div 
          className="flex flex-col items-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar className="h-24 w-24 border-4 border-primary mb-4 transition-colors duration-300 hover:border-primary/80">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {profile.currentRole}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <User className="h-5 w-5" />
                  </motion.div>
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Progress value={75} className="h-2 mb-2" />
                </motion.div>
                <p className="text-sm text-muted-foreground">Complete your profile to increase job matches</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-4 mb-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ type: "spring" }}
              >
                <Card 
                  className="text-center p-4 relative overflow-hidden"
                  variants={hoverVariants}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                    initial={{ x: -100 }}
                  />
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-500">{stat.change}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="space-y-2"
            variants={containerVariants}
          >
            {[
              { 
                icon: <FileText />, 
                text: "Internal Resume Builder", 
                action: () => navigate('/resume-builder'),
                className: "border-b"
              },
              {
                icon: <FileText />, 
                text: "HackerRank Resume Builder", 
                action: openHackerRankResume,
                className: "mb-4"
              },
              { icon: <Bell />, text: "Notifications", action: () => navigate('/notifications') },
              { icon: <Settings />, text: "Settings" },
              { icon: <LogOut />, text: "Log Out", action: handleLogout, className: "text-red-500 hover:text-red-500" }
            ].map((btn, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start gap-2 ${btn.className || ''}`}
                  onClick={btn.action}
                >
                  <motion.span whileHover={{ rotate: 10 }}>{btn.icon}</motion.span>
                  {btn.text}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="shadow-lg mt-6">
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-bold">Profile Settings</CardTitle>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      variant={isEditing ? "default" : "outline"}
                      onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                      disabled={loading}
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Loader2 className="h-4 w-4" />
                        </motion.div>
                      ) : isEditing ? (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      ) : (
                        <>
                          <Edit2 className="h-4 w-4 mr-2" />
                          Edit Profile
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                >
                  {[
                    { id: 'name', icon: <User /> },
                    { id: 'email', icon: <Mail /> },
                    { id: 'phone', icon: <Phone /> },
                    { id: 'location', icon: <MapPin /> },
                    { id: 'currentRole', icon: <Briefcase /> },
                  ].map((field, index) => (
                    <motion.div 
                      key={field.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor={field.id}>{field.id.charAt(0).toUpperCase() + field.id.slice(1)}</Label>
                        <div className="relative">
                          <motion.span 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2"
                            animate={isEditing ? { x: [0, -5, 5, 0] } : {}}
                            transition={{ repeat: Infinity, duration: 1 }}
                          >
                            {field.icon}
                          </motion.span>
                          <Input
                            id={field.id}
                            value={profile[field.id]}
                            onChange={(e) => setProfile({ ...profile, [field.id]: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  className="mt-6 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="bio">Bio</Label>
                  <Input
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    disabled={!isEditing}
                    className="focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
      <Navbar />
    </div>
  );
}