import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeProvider';
import { AuthContext } from '../components/AuthContext';
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Bookmark, Share2, ArrowLeft, Send } from 'lucide-react'
import Navbar from '../components/Navbar'

const JobDetails = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState('not_applied');
  const [skillsMatch, setSkillsMatch] = useState(0);
  const [interviewScheduled, setInterviewScheduled] = useState(false);
  const [deadline, setDeadline] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
  const [timeLeft, setTimeLeft] = useState('');

  // Calculate time left until deadline
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = deadline - now;
      
      if (diff <= 0) {
        setTimeLeft('Expired');
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${days}d ${hours}h ${minutes}m left`);
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  // Mock job data with enhanced information
  const job = {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp',
    type: 'Full-time',
    level: 'Senior Level',
    location: 'Remote',
    salary: '$120k - $150k',
    description: 'Looking for an experienced React developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong understanding of TypeScript',
      'Experience with state management (Redux/Context)',
      'Familiarity with testing frameworks',
      'Excellent problem-solving skills'
    ],
    responsibilities: [
      'Develop and maintain React applications',
      'Collaborate with design and backend teams',
      'Write clean, maintainable code',
      'Participate in code reviews',
      'Implement new features and improvements'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      '401(k) matching',
      'Flexible work hours',
      'Remote work options',
      'Professional development budget'
    ],
    companyInfo: {
      name: 'TechCorp',
      description: 'A leading technology company focused on innovation and growth.',
      size: '500+ employees',
      industry: 'Technology',
      founded: 2010,
      website: 'https://techcorp.com',
      rating: 4.5,
      reviews: 120,
      culture: {
        values: ['Innovation', 'Collaboration', 'Growth', 'Diversity'],
        perks: ['Remote-first', 'Flexible hours', 'Learning budget'],
        workLifeBalance: 4.2,
        diversity: 4.0,
        management: 4.3
      },
      growth: {
        revenue: '$50M+',
        employees: '500+',
        funding: 'Series C',
        growthRate: '30% YoY'
      },
      techStack: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
      team: {
        size: '15 developers',
        structure: 'Cross-functional teams',
        meetings: 'Daily standups, weekly planning'
      }
    },
    similarJobs: [
      {
        id: 2,
        title: 'Frontend Engineer',
        company: 'WebSolutions',
        type: 'Full-time',
        location: 'Hybrid',
        salary: '$90k - $110k'
      },
      {
        id: 3,
        title: 'React Native Developer',
        company: 'MobileTech',
        type: 'Full-time',
        location: 'Remote',
        salary: '$100k - $130k'
      }
    ],
    applicationStats: {
      totalApplications: 245,
      interviewRate: '15%',
      averageResponseTime: '3 days',
      hiringTimeline: '2-3 weeks'
    },
    skillsAssessment: {
      required: ['React', 'TypeScript', 'Redux', 'Testing'],
      optional: ['AWS', 'Docker', 'CI/CD'],
      matchingSkills: ['React', 'TypeScript', 'Testing']
    }
  };

  const handleApply = () => {
    if (!user) {
      navigate('/signin');
      return;
    }
    setShowApplicationForm(true);
  };

  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    // In a real app, this would call an API to save/unsave the job
  };

  const handleScheduleInterview = () => {
    setInterviewScheduled(true);
    // In a real app, this would open a calendar/scheduling interface
  };

  const calculateSkillsMatch = () => {
    const requiredSkills = job.skillsAssessment.required;
    const userSkills = ['React', 'TypeScript', 'Testing', 'AWS']; // Mock user skills
    const matchingSkills = requiredSkills.filter(skill => userSkills.includes(skill));
    return (matchingSkills.length / requiredSkills.length) * 100;
  };

  useEffect(() => {
    setSkillsMatch(calculateSkillsMatch());
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} p-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-lg shadow-lg mb-6 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                {job.title}
              </h1>
              <p className={`text-xl mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {job.company}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {job.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {job.level}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {job.location}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  theme === 'dark' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'
                }`}>
                  {job.salary}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  theme === 'dark' ? 'bg-red-700 text-white' : 'bg-red-100 text-red-800'
                }`}>
                  {timeLeft}
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleSaveJob}
                className={`p-2 rounded-full ${
                  isSaved
                    ? theme === 'dark'
                      ? 'bg-yellow-700 text-white'
                      : 'bg-yellow-100 text-yellow-800'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {isSaved ? '⭐' : '☆'}
              </button>
              <button
                onClick={handleApply}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Application Status */}
            {applicationStatus !== 'not_applied' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-lg mb-6 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}
              >
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  Application Status
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(skillsMatch / 100) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {skillsMatch.toFixed(0)}% Skills Match
                  </span>
                </div>
                {interviewScheduled && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
                    Interview scheduled for next week
                  </div>
                )}
              </motion.div>
            )}

            {/* Tabs */}
            <div className={`mb-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-lg shadow-lg`}>
              <div className="flex border-b">
                {['overview', 'requirements', 'company', 'culture', 'tech'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 capitalize ${
                      activeTab === tab
                        ? theme === 'dark'
                          ? 'border-b-2 border-blue-500 text-white'
                          : 'border-b-2 border-blue-500 text-blue-600'
                        : theme === 'dark'
                        ? 'text-gray-400'
                        : 'text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Job Description
                    </h2>
                    <p className={`mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {job.description}
                    </p>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Responsibilities
                    </h2>
                    <ul className={`list-disc pl-6 mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Benefits
                    </h2>
                    <ul className={`list-disc pl-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {job.benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Requirements
                    </h2>
                    <ul className={`list-disc pl-6 mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {job.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Skills Assessment
                    </h2>
                    <div className="mb-4">
                      <h3 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Required Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skillsAssessment.required.map((skill, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Optional Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.skillsAssessment.optional.map((skill, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'company' && (
                  <div>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      About {job.companyInfo.name}
                    </h2>
                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {job.companyInfo.description}
                    </p>
                    <div className={`grid grid-cols-2 gap-4 mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div>
                        <p className="font-semibold">Company Size</p>
                        <p>{job.companyInfo.size}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Industry</p>
                        <p>{job.companyInfo.industry}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Founded</p>
                        <p>{job.companyInfo.founded}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Website</p>
                        <a
                          href={job.companyInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span className={`mr-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                      }`}>
                        {job.companyInfo.rating}
                      </span>
                      <span className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        ({job.companyInfo.reviews} reviews)
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'culture' && (
                  <div>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Company Culture
                    </h2>
                    <div className="mb-6">
                      <h3 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Core Values
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.companyInfo.culture.values.map((value, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Work-Life Balance
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-green-500 rounded-full"
                            style={{ width: `${(job.companyInfo.culture.workLifeBalance / 5) * 100}%` }}
                          />
                        </div>
                        <span>{job.companyInfo.culture.workLifeBalance}/5</span>
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Perks & Benefits
                      </h3>
                      <ul className={`list-disc pl-6 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {job.companyInfo.culture.perks.map((perk, index) => (
                          <li key={index}>{perk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div>
                    <h2 className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      Tech Stack & Team
                    </h2>
                    <div className="mb-6">
                      <h3 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.companyInfo.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Team Structure
                      </h3>
                      <div className={`space-y-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <p>Team Size: {job.companyInfo.team.size}</p>
                        <p>Structure: {job.companyInfo.team.structure}</p>
                        <p>Meetings: {job.companyInfo.team.meetings}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Application Stats */}
            <div className={`p-6 rounded-lg shadow-lg mb-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Application Stats
              </h2>
              <div className={`space-y-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <div>
                  <p className="font-semibold">Total Applications</p>
                  <p>{job.applicationStats.totalApplications}</p>
                </div>
                <div>
                  <p className="font-semibold">Interview Rate</p>
                  <p>{job.applicationStats.interviewRate}</p>
                </div>
                <div>
                  <p className="font-semibold">Average Response Time</p>
                  <p>{job.applicationStats.averageResponseTime}</p>
                </div>
                <div>
                  <p className="font-semibold">Hiring Timeline</p>
                  <p>{job.applicationStats.hiringTimeline}</p>
                </div>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className={`p-6 rounded-lg shadow-lg mb-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Similar Jobs
              </h2>
              <div className="space-y-4">
                {job.similarJobs.map((similarJob) => (
                  <motion.div
                    key={similarJob.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg cursor-pointer ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                    onClick={() => navigate(`/job-details/${similarJob.id}`)}
                  >
                    <h3 className={`font-bold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {similarJob.title}
                    </h3>
                    <p className={`text-sm mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {similarJob.company}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'
                      }`}>
                        {similarJob.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'
                      }`}>
                        {similarJob.location}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        theme === 'dark' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {similarJob.salary}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            {showApplicationForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-lg shadow-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <h2 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  Apply for this position
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Cover Letter
                    </label>
                    <textarea
                      className={`w-full p-2 rounded border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                      rows={4}
                      placeholder="Write your cover letter here..."
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Resume
                    </label>
                    <input
                      type="file"
                      className={`w-full p-2 rounded border ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                  >
                    Submit Application
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default JobDetails;