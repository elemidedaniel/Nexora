import { ArrowUpRight } from "lucide-react";
import Nexona from "../assets/Nexona.mp4";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navbar */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" className="text-xl font-semibold tracking-tight">
            NEXORA<span className="text-[#DFFF00]">.</span>
          </a>

          <div className="hidden items-center gap-10 text-sm text-white/60 md:flex">
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#technology" className="transition hover:text-white">
              Technology
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-[#DFFF00] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#cbed00]"
          >
            Get started
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#DFFF00]/10 blur-[140px]" />

        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-0">
          {/* Left */}
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#DFFF00]" />
              <span className="text-sm uppercase tracking-[0.2em] text-white/50">
                Technology for what comes next
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Build what
              <br />
              <span className="text-[#DFFF00]">matters next.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-white/50 sm:text-lg">
              We build intelligent technology that helps ambitious companies
              move faster, operate smarter, and create better experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full bg-[#DFFF00] px-6 py-3.5 text-sm font-medium text-black transition hover:bg-[#cbed00]"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#solutions"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
              >
                Explore solutions
              </a>
            </div>

            <div className="mt-16 flex gap-10 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-semibold">01</p>
                <p className="mt-1 text-xs text-white/40">
                  Strategy
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">02</p>
                <p className="mt-1 text-xs text-white/40">
                  Engineering
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">03</p>
                <p className="mt-1 text-xs text-white/40">
                  Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* Right — PNG / Video */}
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[650px]">
            <div className="absolute h-[320px] w-[320px] rounded-full bg-[#DFFF00]/10 blur-[100px]" />

            <div className="relative z-10 w-full max-w-[600px]">
              <video
                src={Nexona}
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}