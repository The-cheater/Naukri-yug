import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import SignInSignUpPage from "./pages/signinsignuppage";
import Dashboard from "./pages/dashboard";
import JobDetails from "./pages/job-details";
import Applications from "./pages/applications";
import Profile from "./pages/profile";
import ResumeBuilder from "./pages/resume-builder";
import Notifications from "./pages/notifications";
import JobSearch from "./components/JobSearch";
import NetworkingHub from "./components/NetworkingHub";
import SkillsAssessment from "./components/SkillsAssessment";
import './App.css';

// Auth guard component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSignUpPage />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
  {
    path: "/jobs",
    element: <ProtectedRoute><JobSearch /></ProtectedRoute>,
  },
  {
    path: "/jobs/:id",
    element: <ProtectedRoute><JobDetails /></ProtectedRoute>,
  },
  {
    path: "/applications",
    element: <ProtectedRoute><Applications /></ProtectedRoute>,
  },
  {
    path: "/profile",
    element: <ProtectedRoute><Profile /></ProtectedRoute>,
  },
  {
    path: "/resume-builder",
    element: <ProtectedRoute><ResumeBuilder /></ProtectedRoute>,
  },
  {
    path: "/notifications",
    element: <ProtectedRoute><Notifications /></ProtectedRoute>,
  },
  {
    path: "/network",
    element: <ProtectedRoute><NetworkingHub /></ProtectedRoute>,
  },
  {
    path: "/skills",
    element: <ProtectedRoute><SkillsAssessment /></ProtectedRoute>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;