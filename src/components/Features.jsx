import { Satellite, Radio, Battery, ShieldCheck, MapPin, Waves, Cloud } from "lucide-react"

function Features() {
  const items = [
    { icon: Satellite, title: "Global satellite link", desc: "Dual-band GPS with satellite fallback keeps your position accurate in rough conditions." },
    { icon: Radio, title: "Auto distress signal", desc: "If you separate from your vessel, AquaGuard sends automatic alerts to your emergency contacts." },
    { icon: Battery, title: "80+ hr battery", desc: "Ultra‑efficient beacon runs for days on a single charge with magnetic fast charging." },
    { icon: MapPin, title: "Live share tracking", desc: "Share a secure link so crews can watch your position update in real time." },
    { icon: ShieldCheck, title: "Rugged + waterproof", desc: "IP68 sealed, impact‑resistant, and buoyant by design. Built for salt, sun, and storm." },
    { icon: Cloud, title: "Weather-aware alerts", desc: "Smart notifications adjust to wind, currents, and daylight for safer calls." },
  ]

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for open water safety</h2>
          <p className="mt-3 text-slate-300">Hardware and software working together to keep you visible, connected, and safe.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-sky-500/10 blur-2xl group-hover:bg-sky-500/20" />
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
