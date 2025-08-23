import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home(){
  return (
    <section className="container-p py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">Hi, I’m Akshaj — a <span className="text-primary-600">Robotics Engineer</span> focused on SLAM, perception, and embedded systems.</h1>
          <p className="mt-4 text-slate-600">MS Robotics @ Northeastern (Boston). I build autonomous systems end‑to‑end: sensing, mapping, planning, and control.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <NavLink className="btn btn-primary" to="/projects">View Projects</NavLink>
            <NavLink className="btn" to="/resume">Download Resume</NavLink>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
          <div className="text-sm text-slate-500">Core Skills</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Python','C++','ROS2','PyTorch','OpenCV','SLAM','LiDAR','KiCad','SolidWorks','Raspberry Pi','ESP32'].map(s=>(
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
