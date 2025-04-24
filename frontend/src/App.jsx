import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/jobs/Jobs'
import Browse from './components/browse/Browse'
import Profile from './components/profile/Profile'
import JobsDescription from './components/jobs/JobsDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJobs from './components/admin/PostJobs'

import AnimatedPage from './components/ui/shared/AnimatedPage'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="/signup" element={<AnimatedPage><Signup /></AnimatedPage>} />
        <Route path="/jobs" element={<AnimatedPage><Jobs /></AnimatedPage>} />
        <Route path="/description/:id" element={<AnimatedPage><JobsDescription /></AnimatedPage>} />
        <Route path="/browse" element={<AnimatedPage><Browse /></AnimatedPage>} />
        <Route path="/profile" element={<AnimatedPage><Profile /></AnimatedPage>} />

        {/* Admin Routes */}
        <Route path="/admin/companies" element={<AnimatedPage><ProtectedRoute><Companies /></ProtectedRoute></AnimatedPage>} />
        <Route path="/admin/companies/create" element={<AnimatedPage><ProtectedRoute><CompanyCreate /></ProtectedRoute></AnimatedPage>} />
        <Route path="/admin/companies/:id" element={<AnimatedPage><ProtectedRoute><CompanySetup /></ProtectedRoute></AnimatedPage>} />
        <Route path="/admin/jobs" element={<AnimatedPage><ProtectedRoute><AdminJobs /></ProtectedRoute></AnimatedPage>} />
        <Route path="/admin/jobs/create" element={<AnimatedPage><ProtectedRoute><PostJobs /></ProtectedRoute></AnimatedPage>} />
        <Route path="/admin/jobs/:id/applicants" element={<AnimatedPage><ProtectedRoute><Applicants /></ProtectedRoute></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
