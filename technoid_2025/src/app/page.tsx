"use client";

import Hero from "@/components/sections/hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#050505] overflow-x-hidden">
      
      {/* --- HERO SECTION (Already Responsive) --- */}
      <Hero />

      {/* --- ABOUT SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-cyber-black relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="border border-neon-cyan/30 bg-cyber-gray/40 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-[0_0_40px_rgba(0,243,255,0.1)] hover:shadow-[0_0_60px_rgba(0,243,255,0.2)] transition-all duration-500">
            
            <h2 className="text-3xl md:text-5xl font-orbitron text-neon-pink mb-8 text-center glitch-text tracking-wide">
              SYSTEM_OVERRIDE // ABOUT
            </h2>
            
            <div className="space-y-6 text-center font-rajdhani text-lg md:text-xl leading-relaxed text-gray-300">
              <p>
                <span className="text-neon-yellow font-bold">Technoid 2025</span> initializes a total system override of the Department of Computer Science. We are transforming the campus into a <span className="text-white">Cyberpunk Arena</span>—an electrifying convergence of neon aesthetics, advanced tech, and the raw energy of a digital-first world.
              </p>
              
              <p>
                In collaboration with <span className="text-neon-cyan font-bold">TECH-X (IT Society)</span>, this edition hacks into the dynamic relationship between innovation and responsibility. In an era where digital systems dictate reality, we explore a world powered by data streams, AI cores, and virtual ecosystems.
              </p>

              <p>
                But beyond the glow of the interface, we emphasize the firewall protecting humanity: <span className="text-white">Cybersecurity, Ethics, and Digital Responsibility</span>. We call upon all operators to evolve from passive users into creators, defenders, and architects of the next tech evolution.
              </p>

              <p>
                Engage in high-energy protocols, immersive simulations, and visually striking cyberpunk environments. <span className="text-neon-pink font-bold">Technoid 2025</span> is your gateway to the future—where creativity meets code, and imagination rewrites the system.
              </p>
              
              <div className="w-full border-t border-gray-700 my-6"></div>

              <p className="text-sm md:text-base text-neon-cyan/80 font-mono tracking-widest">
                HOSTED BY: DEPT. OF COMPUTER SCIENCE<br/>
                ST. XAVIER'S COLLEGE, JAIPUR
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- EVENTS TEASER (Responsive Grid) --- */}
      <section className="py-20 md:py-32 relative border-t border-gray-800/50 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-orbitron text-white mb-4">
              EVENT <span className="text-neon-cyan">LOGS</span>
            </h2>
            <p className="text-neon-pink font-mono text-sm md:text-base tracking-widest animate-pulse">
              /// ACCESSING DATABASE...
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-gray-400 font-rajdhani text-lg md:text-xl">
              From coding wars to neon racing, explore the future of competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button asChild size="lg" className="w-full sm:w-auto bg-neon-cyan text-black hover:bg-white font-orbitron font-bold tracking-wider py-6 text-lg shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                 <Link href="/events">
                   VIEW FULL SCHEDULE
                 </Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-orbitron font-bold tracking-wider py-6 text-lg">
                 <Link href="/gallery">
                   VIEW GALLERY
                 </Link>
               </Button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
