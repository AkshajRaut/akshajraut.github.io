import React from 'react'

export default function Resume(){
  return (
    <section className="container-p py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <a className="btn btn-primary" href="/Akshaj_Raut_Resume.pdf" download>Download PDF</a>
      </div>
      <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <object data="/Akshaj_Raut_Resume.pdf" type="application/pdf" width="100%" height="800">
          <div className="p-6 text-slate-600">Your browser can’t display the PDF.
            <a className="ml-2 text-primary-600 underline" href="/Akshaj_Raut_Resume.pdf" target="_blank" rel="noopener">Open in a new tab</a>.
          </div>
        </object>
      </div>
    </section>
  )
}
