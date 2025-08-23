import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="container-p flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary-600 text-white grid place-items-center font-bold">AR</div>
            <div>
              <div className="font-semibold">Akshaj Raut</div>
              <div className="text-xs text-slate-500">Robotics Engineer</div>
            </div>
          </NavLink>
          <nav className="flex gap-6">
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/resume">Resume</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
