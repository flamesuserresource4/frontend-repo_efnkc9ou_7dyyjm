import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Coverage from './components/Coverage'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.08),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.08),transparent_40%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <Coverage />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} AquaGuard GPS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#coverage" className="hover:text-white transition">Coverage</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
