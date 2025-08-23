import React from 'react'

export default function About(){
  return (
    <section className="container-p py-12">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-3 text-slate-700 max-w-3xl">
        I’m a robotics engineer passionate about building real‑world autonomous systems. My work spans embedded firmware,
        perception (YOLO / OpenCV), state estimation, and SLAM. At Northeastern University, I focus on end‑to‑end robotics
        development — from sensors and PCBs to algorithms and deployment.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="text-sm text-slate-500">Experience</div>
          <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
            <li><strong>PicoStone Technologies</strong> — Embedded firmware (ESP‑IDF), PCB design (KiCad), smart lighting.</li>
          </ul>
        </div>
        <div className="card">
          <div className="text-sm text-slate-500">Education</div>
          <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Northeastern University</strong> — MS Robotics (2026)</li>
            <li><strong>University of Mumbai</strong> — BE Electronics & Telecom (2023)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
