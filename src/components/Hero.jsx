import { ArrowRight, MapPin, ShieldCheck, Waves } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32" id="home">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-24 w-[32rem] h-[32rem] bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/30 mb-5">
              <Waves size={14} />
              Life Vest GPS for the open water
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              GPS safety that rides with every wave
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              AquaGuard is a compact GPS module built into your life vest. If you drift, we track. If you signal, we respond. Real-time location, global coverage, and automatic alerts keep you protected wherever you sail, surf, or explore.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition">
                Preorder now
                <ArrowRight size={18} />
              </a>
              <a href="#how" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/15 hover:bg-white/15 transition">
                See how it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300">
              <div className="flex items-center gap-3"><ShieldCheck className="text-sky-300"/> SOS + fall detection</div>
              <div className="flex items-center gap-3"><MapPin className="text-sky-300"/> Live GPS sharing</div>
              <div className="flex items-center gap-3"><ShieldCheck className="text-sky-300"/> Coast Guard ready</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -right-6 bg-gradient-to-tr from-sky-500/30 to-cyan-400/30 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <img src="https://images.unsplash.com/photo-1760443996236-0460c7c69f32?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaWZlJTIwdmVzdCUyMGF0JTIwc2VhfGVufDB8MHx8fDE3NjM0NzM2MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Life vest at sea" className="object-cover h-80 w-full opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-sm text-slate-200">Live tracking overlay</p>
                <p className="text-2xl font-bold">AquaGuard Beacon v1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
