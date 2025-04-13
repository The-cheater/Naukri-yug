import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API outside component to avoid re-initialization
const genAI = new GoogleGenerativeAI('AIzaSyAdUM70UIUxYrwZ2owANuwF_qkLaNxSHG8');
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your job search assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Create prompt with context
      const chatHistory = messages.map(msg => `${msg.role}: ${msg.content}`).join('\n');
      const prompt = `You are a helpful job search assistant. Previous conversation:\n${chatHistory}\n\nUser: ${input}\n\nProvide a helpful response regarding job searching, applications, or career advice. Keep your response concise, friendly, and actionable.`;

      // Generate response using Gemini
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const assistantMessage = {
        role: 'assistant',
        content: text
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "How can I improve my resume?",
    "What are the best job search strategies?",
    "How to prepare for interviews?",
    "Tips for networking?",
  ];

  const handleSuggestedQuestion = async (question) => {
    setInput(question);
    await handleSend();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-20 right-4 p-4 bg-primary text-white rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-28 right-4 w-[350px] h-[500px] bg-background rounded-lg shadow-xl border z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Job Search Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="p-4 h-[380px] overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <Card className={`max-w-[80%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <CardContent className="p-3 text-sm">
                      {message.content}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              {/* Show suggested questions if it's the first message */}
              {messages.length === 1 && (
                <div className="mt-4 space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full text-left p-2 rounded-lg text-sm bg-muted hover:bg-muted/80 transition-colors"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              )}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-4"
                >
                  <Card className="bg-muted">
                    <CardContent className="p-3">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </CardContent>
                  </Card>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 