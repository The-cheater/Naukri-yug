import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import UniversityLogin from './pages/university/UniversityLogin'
import UniversityDashboard from './pages/university/UniversityDashboard'
import StudentLogin from './pages/student/StudentLogin'
import StudentDashboard from './pages/student/StudentDashboard'
import EmployeeLogin from './pages/employee/EmployeeLogin'
import EmployeeDashboard from './pages/employee/EmployeeDashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/university/login',
    element: <UniversityLogin />,
  },
  {
    path: '/university/dashboard',
    element: <UniversityDashboard />,
  },
  {
    path: '/student/login',
    element: <StudentLogin />,
  },
  {
    path: '/student/dashboard',
    element: <StudentDashboard />,
  },
  {
    path: '/employee/login',
    element: <EmployeeLogin />,
  },
  {
    path: '/employee/dashboard',
    element: <EmployeeDashboard />,
  },
])

export default function AppRoutes() {
  return <RouterProvider router={router} />
}