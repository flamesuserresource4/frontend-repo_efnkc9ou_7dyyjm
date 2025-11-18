import { Menu, LifeBuoy, MapPin, Shield, SignalHigh, Anchor } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-xl blur opacity-40 group-hover:opacity-60 transition" />
                <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-800 text-sky-300 ring-1 ring-white/10">
                  <LifeBuoy size={20} />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">AquaGuard GPS</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-slate-200">
              <a href="#features" className="hover:text-white transition flex items-center gap-2"><Shield size={18}/> Safety</a>
              <a href="#how" className="hover:text-white transition flex items-center gap-2"><MapPin size={18}/> Tracking</a>
              <a href="#coverage" className="hover:text-white transition flex items-center gap-2"><SignalHigh size={18}/> Coverage</a>
              <a href="#cta" className="hover:text-white transition flex items-center gap-2"><Anchor size={18}/> Get Started</a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-white ring-1 ring-white/10">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
