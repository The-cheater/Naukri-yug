import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, DollarSign, Briefcase, Clock, Filter } from 'lucide-react';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    jobType: [],
    salaryRange: [0, 200000],
    experienceLevel: [],
    remote: false,
    postedWithin: '30',
    skills: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [jobs, setJobs] = useState([]);

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  const experienceLevels = ['Entry', 'Mid-Level', 'Senior', 'Lead', 'Executive'];
  const commonSkills = ['React', 'JavaScript', 'Python', 'Java', 'SQL', 'AWS'];

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const handleSearch = () => {
    // Implement job search with filters
    // This would typically make an API call with the search parameters
  };

  const handleSaveSearch = () => {
    // Save current search parameters
    const searchParams = {
      term: searchTerm,
      filters: filters
    };
    // Save to localStorage or backend
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Search and Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Filters
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className={`space-y-6 ${showFilters ? '' : 'hidden lg:block'}`}>
              {/* Location Filter */}
              <div>
                <Label>Location</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="City, State, or Remote"
                    value={filters.location}
                    onChange={(e) => setFilters(prev => ({...prev, location: e.target.value}))}
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <Label>Salary Range</Label>
                <div className="pt-4">
                  <Slider
                    value={filters.salaryRange}
                    onValueChange={(value) => setFilters(prev => ({...prev, salaryRange: value}))}
                    min={0}
                    max={200000}
                    step={10000}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${filters.salaryRange[0].toLocaleString()}</span>
                    <span>${filters.salaryRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Job Type */}
              <div>
                <Label>Job Type</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {jobTypes.map(type => (
                    <Badge
                      key={type}
                      variant={filters.jobType.includes(type) ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => toggleFilter('jobType', type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <Label>Experience Level</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experienceLevels.map(level => (
                    <Badge
                      key={level}
                      variant={filters.experienceLevel.includes(level) ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => toggleFilter('experienceLevel', level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Remote Option */}
              <div className="flex items-center justify-between">
                <Label>Remote Only</Label>
                <Switch
                  checked={filters.remote}
                  onCheckedChange={(checked) => setFilters(prev => ({...prev, remote: checked}))}
                />
              </div>

              {/* Skills */}
              <div>
                <Label>Required Skills</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {commonSkills.map(skill => (
                    <Badge
                      key={skill}
                      variant={filters.skills.includes(skill) ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => toggleFilter('skills', skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button className="w-full" onClick={handleSearch}>
                  Apply Filters
                </Button>
                <Button variant="outline" className="w-full" onClick={handleSaveSearch}>
                  Save Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Results */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex gap-4">
                <Input
                  placeholder="Search jobs, companies, or keywords"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobs.map(job => (
                  <Card key={job.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-gray-500">{job.company}</p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSearch; 