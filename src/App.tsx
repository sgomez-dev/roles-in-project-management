import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import RolesIndex from './pages/RolesIndex'
import RoleDetail from './pages/RoleDetail'

export default function App() {
  const location = useLocation()
  return (
    <div className="layout">
      <header className="topbar">
        <Link to="/" className="brand">Roles in Project Management</Link>
        <nav className="nav">
          <a href="https://www.pmi.org/pmbok-guide-standards" target="_blank" rel="noreferrer">PMINST</a>
        </nav>
      </header>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<RolesIndex />} />
              <Route path="/roles/:roleId" element={<RoleDetail />} />
              <Route path="*" element={<RolesIndex />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} SGOMEZ-DEV. All rights reserved.</span>
      </footer>
    </div>
  )
}
