function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-500 p-8 sm:p-10 text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_40%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight">Be first to get AquaGuard</h2>
            <p className="mt-2 text-white/90">Join the early access list for launch pricing, priority shipping, and field‑tested safety tips.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl text-slate-900 placeholder:text-slate-500" />
              <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-900 transition font-semibold">Notify me</button>
            </form>
            <p className="mt-3 text-sm text-white/80">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
