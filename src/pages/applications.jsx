import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Check, X, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const applications = [
  {
    id: 1,
    job: "Senior React Developer",
    company: "Tech Corp",
    date: "2023-10-15",
    status: "pending",
    color: "bg-yellow-500"
  },
  {
    id: 2,
    job: "UX Designer",
    company: "Design Hub",
    date: "2023-10-10",
    status: "accepted",
    color: "bg-green-500"
  },
  {
    id: 3,
    job: "Product Manager",
    company: "Innovate Inc",
    date: "2023-10-05",
    status: "rejected",
    color: "bg-red-500"
  }
]

export default function Applications() {
  const navigate = useNavigate()

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <Clock className="h-4 w-4" />
      case 'accepted': return <Check className="h-4 w-4" />
      case 'rejected': return <X className="h-4 w-4" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">My Applications</h1>
        
        <div className="space-y-4">
          {applications.map((app) => (
            <motion.div
              key={app.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="hover:shadow-lg transition-all cursor-pointer"
                onClick={() => navigate(`/jobs/${app.id}`)}
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>{app.job}</CardTitle>
                    <p className="text-muted-foreground">{app.company}</p>
                  </div>
                  <Badge variant="outline" className={`gap-2 ${app.status === 'accepted' ? 'border-green-500' : app.status === 'rejected' ? 'border-red-500' : ''}`}>
                    <span className={`h-2 w-2 rounded-full ${app.color}`}></span>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </Badge>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">Applied on {new Date(app.date).toLocaleDateString()}</p>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={() => navigate('/jobs')}>
            Browse More Jobs
          </Button>
        </div>
      </motion.div>
      <Navbar />
    </div>
  )
}