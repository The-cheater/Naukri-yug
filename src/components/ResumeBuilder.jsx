import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Trash2, Download, Wand2 } from 'lucide-react';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    preview: '/templates/modern.png'
  },
  {
    id: 'professional',
    name: 'Professional',
    preview: '/templates/professional.png'
  },
  {
    id: 'creative',
    name: 'Creative',
    preview: '/templates/creative.png'
  }
];

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [formData, setFormData] = useState({
    personal: {
      name: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  const handleInputChange = (section, field, value, index = null) => {
    if (index !== null) {
      setFormData(prev => ({
        ...prev,
        [section]: prev[section].map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [section]: { ...prev[section], [field]: value }
      }));
    }
  };

  const addListItem = (section) => {
    const newItem = section === 'experience' 
      ? { company: '', position: '', startDate: '', endDate: '', description: '' }
      : section === 'education'
      ? { school: '', degree: '', field: '', graduationDate: '' }
      : { name: '', level: 'Intermediate' };

    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeListItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const generateAISuggestions = async () => {
    // Implement AI suggestions using Gemini API
    // This would analyze the resume content and provide improvement suggestions
  };

  const exportResume = (format) => {
    // Implement resume export functionality
    // Support PDF and DOCX formats
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Resume Builder</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeSection} onValueChange={setActiveSection}>
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.personal.name}
                        onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.personal.email}
                        onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="summary">Professional Summary</Label>
                    <textarea
                      id="summary"
                      className="w-full h-32 p-2 border rounded-md"
                      value={formData.personal.summary}
                      onChange={(e) => handleInputChange('personal', 'summary', e.target.value)}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="experience" className="space-y-4">
                  {formData.experience.map((exp, index) => (
                    <Card key={index} className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Company</Label>
                          <Input
                            value={exp.company}
                            onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                          />
                        </div>
                        <div>
                          <Label>Position</Label>
                          <Input
                            value={exp.position}
                            onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                          />
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="mt-2"
                        onClick={() => removeListItem('experience', index)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </Card>
                  ))}
                  <Button onClick={() => addListItem('experience')}>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Experience
                  </Button>
                </TabsContent>

                {/* Similar TabsContent for Education and Skills */}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Template & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Choose Template</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {templates.map(template => (
                      <div
                        key={template.id}
                        className={`cursor-pointer p-2 border rounded-lg ${
                          selectedTemplate === template.id ? 'border-blue-500' : ''
                        }`}
                        onClick={() => setSelectedTemplate(template.id)}
                      >
                        <img
                          src={template.preview}
                          alt={template.name}
                          className="w-full h-auto"
                        />
                        <p className="text-center mt-1">{template.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" onClick={generateAISuggestions}>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Get AI Suggestions
                  </Button>
                  <Button className="w-full" onClick={() => exportResume('pdf')}>
                    <Download className="w-4 h-4 mr-2" />
                    Export as PDF
                  </Button>
                  <Button className="w-full" variant="outline" onClick={() => exportResume('docx')}>
                    <Download className="w-4 h-4 mr-2" />
                    Export as DOCX
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder; 