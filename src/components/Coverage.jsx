import { Globe2, SignalHigh } from "lucide-react"

function Coverage() {
  return (
    <section id="coverage" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Coverage that follows the currents</h2>
            <p className="mt-3 text-slate-300">From marinas to bluewater passages. Cellular near shore with satellite fallback offshore, so your position keeps updating when it matters most.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><SignalHigh className="text-sky-300"/> Coastal LTE and 5G</li>
              <li className="flex items-center gap-3"><SignalHigh className="text-sky-300"/> Satellite relay offshore</li>
              <li className="flex items-center gap-3"><SignalHigh className="text-sky-300"/> Smart roaming worldwide</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-tr from-sky-500/20 to-cyan-400/20 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <img src="https://images.unsplash.com/photo-1569803125153-9d523ab881b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbG9iYWwlMjBvY2VhbnN8ZW58MHwwfHx8MTc2MzQ3MzYzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Global oceans" className="object-cover h-80 w-full opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-sm text-slate-200">Global footprint</p>
                <p className="text-2xl font-bold">Coast-to-coast + offshore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coverage
