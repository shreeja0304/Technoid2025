"use client";

import { TitleBanner } from "@/components/sections/TitleBanner";
import { motion } from "framer-motion";
import CyberImage from "@/components/CyberImage";
import React from "react";

export default function GalleryPage() {
  // Generate array of 15 images (1.JPG to 15.JPG)
  const images = Array.from({ length: 15 }, (_, i) => `/images/gallery/${i + 1}.JPG`);

  return (
    <main className="min-h-screen bg-cyber-black hologram-background overflow-x-hidden">
      

      <div className="pt-24 pb-12 px-4 text-center">
         <h1 className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black text-white glitch-text break-words leading-tight">
          GALLERY
         </h1>
        
      </div>

      <section className="max-w-[1800px] mx-auto px-4 md:px-8 pb-24">
        
        {/* Masonry Grid Wrapper - Responsive Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              {/* Card Container */}
              <div className="group relative bg-cyber-black border-2 border-transparent rounded-lg overflow-hidden transition-all duration-300 hover:border-neon-pink hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                
                {/* --- IMAGE CONTAINER --- */}
                <div className="relative w-full">
                   <CyberImage
                    src={src}
                    alt={`Gallery Artifact ${index + 1}`}
                    className="w-full h-auto object-contain block" 
                  />
                  
                  {/* Darken Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* --- HOVER NEON FRAME (Responsive Corners) --- */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {/* Top Left */}
                  <div className="absolute top-2 left-2 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-neon-pink rounded-tl-sm" />
                  {/* Top Right */}
                  <div className="absolute top-2 right-2 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-neon-pink rounded-tr-sm" />
                  {/* Bottom Left */}
                  <div className="absolute bottom-2 left-2 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 border-neon-pink rounded-bl-sm" />
                  {/* Bottom Right */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-neon-pink rounded-br-sm" />
                  
                  {/* Animated Scanline */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/10 to-transparent animate-scan z-10" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
