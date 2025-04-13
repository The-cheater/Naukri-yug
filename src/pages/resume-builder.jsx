import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Trash2, Download, ChevronLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const ResumeBuilder = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('local')
  const [resume, setResume] = useState({
    personal: { name: '', email: '', phone: '', address: '' },
    education: [{ institution: '', degree: '', year: '' }],
    experience: [{ company: '', position: '', duration: '', description: '' }],
    skills: ['JavaScript', 'React', 'TypeScript']
  })

  const handleInputChange = (section, field, value, index = null) => {
    if (index !== null) {
      const newArray = [...resume[section]]
      newArray[index][field] = value
      setResume({ ...resume, [section]: newArray })
    } else {
      setResume({ ...resume, [section]: { ...resume[section], [field]: value } })
    }
  }

  const addItem = (section) => {
    const template = section === 'education' 
      ? { institution: '', degree: '', year: '' }
      : { company: '', position: '', duration: '', description: '' }
    
    setResume({ ...resume, [section]: [...resume[section], template] })
  }

  const removeItem = (section, index) => {
    const newArray = resume[section].filter((_, i) => i !== index)
    setResume({ ...resume, [section]: newArray })
  }

  const addSkill = () => {
    const newSkill = prompt("Enter new skill:")
    if (newSkill) {
      setResume({ ...resume, skills: [...resume.skills, newSkill] })
    }
  }

  const removeSkill = (index) => {
    const newSkills = resume.skills.filter((_, i) => i !== index)
    setResume({ ...resume, skills: newSkills })
  }

  const handleHackerRankRedirect = () => {
    window.open('https://www.hackerrank.com/resume-builder', '_blank')
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold">Resume Builder</h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="local">Local Builder</TabsTrigger>
            <TabsTrigger value="hackerrank">HackerRank Builder</TabsTrigger>
          </TabsList>

          {activeTab === 'local' ? (
            <>
              <TabsContent value="personal">
                <Card className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <Input 
                        value={resume.personal.name} 
                        onChange={(e) => handleInputChange('personal', 'name', e.target.value)} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input 
                        value={resume.personal.email} 
                        onChange={(e) => handleInputChange('personal', 'email', e.target.value)} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <Input 
                        value={resume.personal.phone} 
                        onChange={(e) => handleInputChange('personal', 'phone', e.target.value)} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Address</label>
                      <Input 
                        value={resume.personal.address} 
                        onChange={(e) => handleInputChange('personal', 'address', e.target.value)} 
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <div className="space-y-4">
                  {resume.education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-medium">Education #{index + 1}</h3>
                          {index > 0 && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => removeItem('education', index)}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          )}
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium mb-1">Institution</label>
                            <Input 
                              value={edu.institution} 
                              onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)} 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Degree</label>
                            <Input 
                              value={edu.degree} 
                              onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)} 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Year</label>
                            <Input 
                              value={edu.year} 
                              onChange={(e) => handleInputChange('education', 'year', e.target.value, index)} 
                            />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                  <Button 
                    variant="outline" 
                    className="w-full gap-2" 
                    onClick={() => addItem('education')}
                  >
                    <Plus className="h-4 w-4" />
                    Add Education
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="experience">
                <div className="space-y-4">
                  {resume.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-medium">Experience #{index + 1}</h3>
                          {index > 0 && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => removeItem('experience', index)}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          )}
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium mb-1">Company</label>
                            <Input 
                              value={exp.company} 
                              onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)} 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Position</label>
                            <Input 
                              value={exp.position} 
                              onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)} 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Duration</label>
                            <Input 
                              value={exp.duration} 
                              onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)} 
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-medium mb-1">Description</label>
                          <Textarea 
                            value={exp.description} 
                            onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)} 
                            rows={3}
                          />
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                  <Button 
                    variant="outline" 
                    className="w-full gap-2" 
                    onClick={() => addItem('experience')}
                  >
                    <Plus className="h-4 w-4" />
                    Add Experience
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="skills">
                <Card className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resume.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge className="gap-2">
                          {skill}
                          <button onClick={() => removeSkill(index)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="outline" className="gap-2" onClick={addSkill}>
                    <Plus className="h-4 w-4" />
                    Add Skill
                  </Button>
                </Card>
              </TabsContent>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">HackerRank Resume Builder</h2>
              <p className="text-gray-600 mb-6">
                Create a professional resume using HackerRank's powerful resume builder tool.
                Get access to templates, formatting options, and expert tips.
              </p>
              <button
                onClick={handleHackerRankRedirect}
                className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition"
              >
                Go to HackerRank Resume Builder
              </button>
            </motion.div>
          )}
        </Tabs>

        <div className="mt-6 flex justify-end gap-4">
          <Button variant="outline">Preview</Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </motion.div>
      <Navbar />
    </div>
  )
}

export default ResumeBuilder