import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import {
  Search,
  Clock,
  CheckCircle,
  XCircle,
  Star,
  Trophy,
  BookOpen,
  BarChart2,
  Award,
  ChevronRight,
  ChevronLeft,
  Timer
} from 'lucide-react';
import Navbar from './Navbar';

const mockAssessments = [
  {
    id: 1,
    title: 'React Fundamentals',
    category: 'Frontend Development',
    difficulty: 'Intermediate',
    duration: '30 mins',
    questions: 20,
    completionRate: 75,
    status: 'completed',
    score: 85,
    lastAttempt: '2 days ago'
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    category: 'Programming',
    difficulty: 'Advanced',
    duration: '45 mins',
    questions: 25,
    completionRate: 60,
    status: 'in-progress',
    score: null,
    lastAttempt: '1 day ago'
  },
  {
    id: 3,
    title: 'Node.js Backend',
    category: 'Backend Development',
    difficulty: 'Expert',
    duration: '60 mins',
    questions: 30,
    completionRate: 40,
    status: 'not-started',
    score: null,
    lastAttempt: null
  }
];

const mockTestQuestions = [
  {
    id: 1,
    question: "What is the correct way to create a React component?",
    options: [
      "function MyComponent() { return <div>Hello</div> }",
      "class MyComponent extends React.Component { render() { return <div>Hello</div> } }",
      "const MyComponent = () => { return <div>Hello</div> }",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "React components can be created using function declarations, class components, or arrow functions."
  },
  {
    id: 2,
    question: "What is the purpose of useEffect in React?",
    options: [
      "To handle component mounting and unmounting",
      "To perform side effects in function components",
      "To update component state",
      "To handle form submissions"
    ],
    correctAnswer: 1,
    explanation: "useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM."
  }
];

export default function SkillsAssessment() {
  const [currentTest, setCurrentTest] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  const startTest = (testId) => {
    setCurrentTest(mockAssessments.find(test => test.id === testId));
    setCurrentQuestion(0);
    setAnswers({});
    setTimeLeft(1800);
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const nextQuestion = () => {
    if (currentQuestion < mockTestQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto px-4 max-w-[500px]">
        {/* Header */}
        <div className="py-4 sticky top-0 bg-background z-10 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Skill Assessment</h1>
            <Button variant="ghost" size="icon">
              <Trophy className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Search */}
          <motion.div whileTap={{ scale: 0.98 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search assessments"
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </motion.div>
          
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'In Progress', 'Completed', 'Not Started'].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="rounded-full px-4 h-8 text-xs whitespace-nowrap"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {!currentTest ? (
          <>
            {/* Assessment Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <motion.div whileHover={{ y: -3 }}>
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <p className="text-xs text-muted-foreground">Total Assessments</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <p className="text-xs text-muted-foreground">Average Score</p>
                </Card>
              </motion.div>
            </div>

            {/* Available Assessments */}
            <div className="space-y-3">
              {mockAssessments.map((assessment) => (
                <motion.div
                  key={assessment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{assessment.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <BookOpen className="h-3 w-3" />
                            <span>{assessment.category}</span>
                          </div>
                        </div>
                        <Badge variant={assessment.status === 'completed' ? 'default' : 'secondary'}>
                          {assessment.status === 'completed' ? 'Completed' : 
                           assessment.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs gap-1">
                          <Clock className="h-3 w-3" />
                          {assessment.duration}
                        </Badge>
                        <Badge variant="secondary" className="text-xs gap-1">
                          <BarChart2 className="h-3 w-3" />
                          {assessment.questions} questions
                        </Badge>
                        <Badge variant="secondary" className="text-xs gap-1">
                          <Star className="h-3 w-3" />
                          {assessment.difficulty}
                        </Badge>
                      </div>
                      
                      {assessment.status === 'completed' && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Score: {assessment.score}%</span>
                            <span>Last attempt: {assessment.lastAttempt}</span>
                          </div>
                          <Progress value={assessment.score} className="h-2" />
                        </div>
                      )}
                      
                      <Button 
                        className="w-full"
                        onClick={() => startTest(assessment.id)}
                      >
                        {assessment.status === 'completed' ? 'Retake Test' : 
                         assessment.status === 'in-progress' ? 'Continue Test' : 'Start Test'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Test Interface */}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{currentTest.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Question {currentQuestion + 1} of {mockTestQuestions.length}</span>
                    <span>Score: {Object.keys(answers).length * 10}%</span>
                  </div>
                  <Progress value={(currentQuestion + 1) / mockTestQuestions.length * 100} className="h-2" />
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">{mockTestQuestions[currentQuestion].question}</h3>
                  <div className="space-y-2">
                    {mockTestQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={answers[currentQuestion] === index ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => handleAnswer(currentQuestion, index)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={nextQuestion}
                    disabled={currentQuestion === mockTestQuestions.length - 1}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Test Summary */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Questions Answered</span>
                    <span className="font-medium">{Object.keys(answers).length}/{mockTestQuestions.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Time Remaining</span>
                    <span className="font-medium">
                      {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <Button className="w-full mt-4">Submit Test</Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
      <Navbar />
    </div>
  );
} 