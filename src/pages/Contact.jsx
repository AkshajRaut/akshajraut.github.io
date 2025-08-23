import React from 'react'

export default function Contact(){
  return (
    <section className="container-p py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-600">Feel free to reach out for roles, collaborations, or questions.</p>
      <form className="mt-6 max-w-xl space-y-4" action="https://formspree.io/f/mwkggnny" method="POST">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600" name="name" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600" name="email" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Message</label>
          <textarea rows="5" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600" name="message" required />
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
        <a className="btn" href="mailto:raut.aks@northeastern.edu">Or email directly</a>
      </form>
    </section>
  )
}
