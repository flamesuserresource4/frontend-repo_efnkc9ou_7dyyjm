import { Repeat, MapPin, AlertCircle, Navigation } from "lucide-react"

function HowItWorks() {
  const steps = [
    { icon: Navigation, title: "Pair & wear", desc: "Clip the beacon into your life vest or PFD and pair once with the AquaGuard app." },
    { icon: MapPin, title: "Track in real-time", desc: "GPS updates every 2–5 seconds. Share a link with your crew or emergency contacts." },
    { icon: AlertCircle, title: "Auto SOS if needed", desc: "If a fall or separation is detected, your live location and vessel bearing are sent instantly." },
    { icon: Repeat, title: "Recover fast", desc: "Guided directions help rescuers navigate to you even in low visibility." },
  ]

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How AquaGuard keeps you in sight</h2>
            <p className="mt-3 text-slate-300">A proven safety flow built for offshore, inshore, and adventure travel on water.</p>

            <div className="mt-8 space-y-5">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-sky-300 ring-1 ring-white/15">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-slate-300 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-tr from-sky-500/20 to-cyan-400/20 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src="https://images.unsplash.com/photo-1637657568555-447a9f3da6a0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXNjdWUlMjBib2F0JTIwb24lMjB3YXRlcnxlbnwwfDB8fHwxNzYzNDczNjMxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Rescue boat on water" className="object-cover h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
