"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LaunchDate from "@/components/LaunchDate"; // Import the new component

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30 grayscale mix-blend-screen"
      >
        <source src="/videos/teaser.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black z-0 pointer-events-none" />

      <div className="z-10 text-center space-y-6 md:space-y-8 max-w-5xl mx-auto mt-10">
        
 

        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl leading-none">
          TECHNOID
        </h1>
        

        <div className="relative">
            <div className="absolute inset-0 bg-neon-pink/20 blur-3xl rounded-full" />
            <p className="relative text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-rajdhani font-bold tracking-[0.1em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-pink animate-text-shimmer drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]">
              THE NEON ASCENT
            </p>
            
            <p className="text-[10px] sm:text-xs md:text-sm font-mono text-neon-yellow mt-3 tracking-[0.3em] md:tracking-[0.5em] opacity-80">
              BEYOND SELF // BEYOND CODE // BEYOND CONTROL
            </p>
        </div>


        <div className="pt-4 md:pt-6">
            <LaunchDate />
        </div>

        <div className="pt-6 md:pt-10">
          <Button asChild size="lg" className="relative overflow-hidden group bg-transparent border-2 border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-black font-orbitron font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 transition-all duration-300 shadow-[0_0_20px_rgba(255,238,0,0.2)] hover:shadow-[0_0_40px_rgba(255,238,0,0.6)]">
            <Link href="/events">
              <span className="relative z-10">EVENTS</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 -skew-x-12 -translate-x-full group-hover:animate-shine" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
