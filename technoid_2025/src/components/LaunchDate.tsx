"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// TARGET DATE: NOV 29, 2025 (Adjust year if needed)
const TARGET_DATE = new Date("2025-11-29T00:00:00");

type TimeUnit = {
  label: string;
  value: number;
};

export default function LaunchDate() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { label: "DAYS", value: 0 },
    { label: "HOURS", value: 0 },
    { label: "MINS", value: 0 },
    { label: "SECS", value: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        // Set to zeros if event passed
        setTimeLeft([
          { label: "DAYS", value: 0 },
          { label: "HOURS", value: 0 },
          { label: "MINS", value: 0 },
          { label: "SECS", value: 0 },
        ]);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft([
          { label: "DAYS", value: days },
          { label: "HOURS", value: hours },
          { label: "MINS", value: minutes },
          { label: "SECS", value: seconds },
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center group">
            
            {/* Digital Box Container */}
            <div className="relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-black/50 border border-neon-cyan/30 clip-tile hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300">
              
              {/* Animated Number */}
              <motion.span
                key={unit.value} // Triggers animation on change
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl md:text-4xl font-orbitron font-bold text-white glitch-text"
              >
                {unit.value < 10 ? `0${unit.value}` : unit.value}
              </motion.span>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-pink opacity-50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-pink opacity-50" />
            </div>

            {/* Label */}
            <h4 className="mt-3 text-xs md:text-sm font-mono text-neon-cyan tracking-widest opacity-80 group-hover:opacity-100 group-hover:text-neon-yellow transition-colors">
              {unit.label}
            </h4>
          </div>
        ))}
      </div>
      
      {/* Event Date Display */}
      <div className="mt-6 text-neon-pink font-orbitron tracking-[0.3em] text-sm md:text-base animate-pulse">
        29 - 30 NOV 2025
      </div>
    </div>
  );
}
