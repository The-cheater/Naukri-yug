import { useNavigate } from 'react-router-dom'
import { RoleCard } from '../components/RoleCard'
import Navbar from '../components/Navbar'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, GraduationCap, User, ArrowRight, Rocket, 
  TrendingUp, ShieldCheck, Globe, Lightbulb, Award,
  Code, MessageCircle, Zap, Heart, Star
} from 'lucide-react'

// Floating icons component with mobile responsiveness
const FloatingIcons = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Adjust number of icons based on screen size
  const isMobile = windowWidth <= 768
  
  const icons = [
    { icon: <Briefcase className="text-blue-400" />, initialX: 10, initialY: 20 },
    { icon: <GraduationCap className="text-purple-400" />, initialX: 80, initialY: 40 },
    { icon: <User className="text-green-400" />, initialX: 30, initialY: 70 },
    { icon: <Rocket className="text-yellow-400" />, initialX: 70, initialY: 10 },
    { icon: <TrendingUp className="text-red-400" />, initialX: 20, initialY: 50 },
    { icon: <ShieldCheck className="text-indigo-400" />, initialX: 60, initialY: 80 },
    { icon: <Globe className="text-cyan-400" />, initialX: 85, initialY: 65 },
    { icon: <Lightbulb className="text-amber-400" />, initialX: 15, initialY: 85 },
    { icon: <Star className="text-pink-400" />, initialX: 45, initialY: 15 }
  ]

  // Use fewer icons on mobile
  const displayIcons = isMobile ? icons.slice(0, 4) : icons

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {displayIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          initial={{ x: `${item.initialX}%`, y: `${item.initialY}%`, opacity: 0 }}
          animate={{
            y: [`${item.initialY}%`, `${item.initialY + (isMobile ? 3 : 5)}%`, `${item.initialY}%`],
            opacity: [0, 0.7, 0],
            rotate: [0, isMobile ? 5 : 15, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: index * 0.5
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}

// New animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 opacity-10 dark:opacity-5 overflow-hidden">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl dark:bg-blue-800"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl dark:bg-purple-800"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl dark:bg-green-800"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl dark:bg-amber-800 hidden md:block"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

// Feature section component
const FeatureSection = () => {
  const features = [
    { 
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />, 
      title: "Direct Communication", 
      description: "Connect directly with employers and universities" 
    },
    { 
      icon: <Code className="w-6 h-6 text-purple-500" />, 
      title: "Skill Assessment", 
      description: "Showcase your abilities through verified tests" 
    },
    { 
      icon: <Zap className="w-6 h-6 text-yellow-500" />, 
      title: "Quick Apply", 
      description: "One-click application to multiple positions" 
    },
    { 
      icon: <Heart className="w-6 h-6 text-red-500" />, 
      title: "Personalized Matches", 
      description: "AI-powered job recommendations" 
    },
  ]

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ y: -5 }}
        >
          <div className="rounded-full bg-blue-50 dark:bg-gray-700 p-3 w-12 h-12 flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.observe-section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Enhanced animated background */}
      <AnimatedBackground />
      <FloatingIcons />
      
      <Navbar />
      
      <motion.main 
        ref={containerRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-12 md:py-16 relative z-10"
      >
        <motion.div 
          variants={item} 
          className="text-center mb-12"
          id="hero"
          className="observe-section text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Naukri<span className="text-blue-600 dark:text-blue-400">Yug</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Revolutionizing career connections between Universities, Students, and Professionals
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 items-center md:items-stretch"
        >
          <motion.div 
            variants={item}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
          >
            <RoleCard
              role="university"
              description="Invite companies, track student progress, and manage job postings"
              onClick={() => navigate('/university/login')}
              icon={<GraduationCap className="w-8 h-8" />}
            />
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
          >
            <RoleCard
              role="student"
              description="Browse jobs, take skill assessments, and build your resume"
              onClick={() => navigate('/student/login')}
              icon={<User className="w-8 h-8" />}
            />
          </motion.div>
          
          <motion.div 
            variants={item}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
          >
            <RoleCard
              role="employee"
              description="Search for better opportunities and advance your career"
              onClick={() => navigate('/employee/login')}
              icon={<Briefcase className="w-8 h-8" />}
            />
          </motion.div>
        </motion.div>

        {/* New Feature Section */}
        <FeatureSection />

        {/* Enhanced CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center mx-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => navigate('/student/login')}
          >
            <span>Get Started</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Animated Stats */}
        <motion.div 
          id="stats"
          className="observe-section mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "10K+", label: "Jobs Posted", icon: <Briefcase className="w-5 h-5" /> },
            { value: "5K+", label: "Hiring Partners", icon: <Rocket className="w-5 h-5" /> },
            { value: "50+", label: "Universities", icon: <GraduationCap className="w-5 h-5" /> },
            { value: "98%", label: "Success Rate", icon: <Award className="w-5 h-5" /> }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex justify-center mb-2 text-blue-500 dark:text-blue-400">
                {stat.icon}
              </div>
              <motion.div 
                className="text-2xl font-bold text-blue-600 dark:text-blue-400"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof section */}
        <motion.div
          className="mt-16 text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Trusted By</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {/* Company logos (replace with actual logos in prod) */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={i}
                className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                Google 
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="mt-16 py-8 bg-gray-100 dark:bg-gray-900 text-center text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <p>© 2025 NaukriYug. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="hover:text-blue-600 transition-colors">About</button>
            <button className="hover:text-blue-600 transition-colors">Privacy</button>
            <button className="hover:text-blue-600 transition-colors">Terms</button>
            <button className="hover:text-blue-600 transition-colors">Contact</button>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}