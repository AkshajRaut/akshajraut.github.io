import React from 'react'

export default function ProjectCard({ title, badge, summary, bullets=[], links=[] }){
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-1 tag">{badge}</div>
        </div>
      </div>
      <p className="mt-3 text-slate-600">{summary}</p>
      <ul className="mt-3 list-disc list-inside text-sm text-slate-600 space-y-1">
        {bullets.map((b,i)=>(<li key={i}>{b}</li>))}
      </ul>
      {links.length>0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((l,i)=>(<a key={i} className="btn btn-primary" href={l.href} target="_blank" rel="noopener">{l.label}</a>))}
        </div>
      )}
    </div>
  )
}
