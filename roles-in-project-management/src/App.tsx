import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import RolesIndex from './pages/RolesIndex'
import RoleDetail from './pages/RoleDetail'

export default function App() {
  return (
    <div className="layout">
      <header className="topbar">
        <Link to="/" className="brand">PM Roles</Link>
        <nav className="nav">
          <a href="https://www.pmi.org/pmbok-guide-standards" target="_blank" rel="noreferrer">PMBOK</a>
          <a href="https://en.wikipedia.org/wiki/Project_management" target="_blank" rel="noreferrer">Wikipedia</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<RolesIndex />} />
          <Route path="/roles/:roleId" element={<RoleDetail />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} PM Roles</span>
      </footer>
    </div>
  )
}
