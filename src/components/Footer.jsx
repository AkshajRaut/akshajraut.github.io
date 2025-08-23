import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="container-p flex flex-col sm:flex-row items-center justify-between py-6 gap-3">
        <div className="footer">© {new Date().getFullYear()} Akshaj Raut</div>
        <div className="flex items-center gap-4">
          <a className="nav-link" href="mailto:raut.aks@northeastern.edu">Email</a>
          <a className="nav-link" rel="noopener" target="_blank" href="https://www.linkedin.com/in/akshajraut">LinkedIn</a>
          <a className="nav-link" rel="noopener" target="_blank" href="https://github.com/AkshajRaut">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
