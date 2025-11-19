"use client";

import { TitleBanner } from "@/components/sections/TitleBanner";
import { MapPin, Mail, Phone, User } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const coordinators = [
    { role: "President", name: "Shreeja Seth", phone: "+91 9828014358" },
    { role: "Vice President", name: "Neha Sharma", phone: "+91 9660580887" },
    { role: "Vice President", name: "Mukund Sewani", phone: "+91 7357423789" },
  ];

  return (
    <main className="min-h-screen bg-cyber-black overflow-x-hidden">

      <div className="pt-24 pb-8 text-center">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-4 tracking-widest">
          Contact Us
        </h1>
      </div>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24 space-y-16">
        
        {/* --- INTRO TEXT --- */}
        <div className="text-center space-y-4 font-rajdhani text-lg md:text-xl text-gray-300">
          <p>
            In case of any query or problem feel free to visit our office or contact the following numbers for the same:
          </p>
          
          <div className="flex flex-col items-center gap-2 pt-4">
             <div className="flex items-center gap-2 text-neon-pink">
                <MapPin className="w-5 h-5" />
                <span>St. Xavier's College Jaipur Nevta - Mahapura Road, Dam, near Nevta, Jaipur, Rajasthan 302029</span>
             </div>
             <div className="flex items-center gap-2 text-neon-cyan">
                <Mail className="w-5 h-5" />
                <a href="mailto:techxclub@sxcjpr.edu.in" className="hover:underline">techxclub@sxcjpr.edu.in</a>
             </div>
          </div>
        </div>

        {/* --- COORDINATORS & MAP GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           
           {/* LEFT COLUMN: Coordinators & Info */}
           <div className="space-y-12">
              
              {/* Coordinators Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {coordinators.map((person) => (
                  <div key={person.name} className="space-y-1">
                    <p className="text-gray-400 font-mono text-sm">{person.role}</p>
                    <p className="text-white font-orbitron font-bold text-lg">{person.name}</p>
                    <p className="text-neon-yellow font-rajdhani">{person.phone}</p>
                  </div>
                ))}
              </div>

              {/* College Section Header */}
              <div className="text-center lg:text-left">
                 <h2 className="text-3xl md:text-4xl font-orbitron text-white border-b-2 border-white inline-block pb-2">
                   St. Xavier's College Jaipur
                 </h2>
              </div>

              {/* Phone & Email Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {/* Phone Card */}
                 <div className="border border-gray-700 bg-cyber-gray/30 p-6 rounded-lg text-center space-y-2 hover:border-neon-cyan transition-colors">
                    <h3 className="text-xl font-orbitron text-white mb-2">Phone</h3>
                    <p className="text-gray-300 font-rajdhani">+91 9828726366</p>
                    <p className="text-gray-300 font-rajdhani">+91 9571077348</p>
                 </div>

                 {/* Email Card */}
                 <div className="border border-gray-700 bg-cyber-gray/30 p-6 rounded-lg text-center space-y-2 hover:border-neon-pink transition-colors">
                    <h3 className="text-xl font-orbitron text-white mb-2">Email</h3>
                    <p className="text-gray-300 font-rajdhani">info@sxcjpr.edu.in</p>
                    <p className="text-gray-300 font-rajdhani">admission@sxcjpr.edu.in</p>
                 </div>
              </div>

           </div>

           {/* RIGHT COLUMN: Map */}
           <div className="w-full h-full min-h-[400px] border-2 border-neon-cyan/30 p-1 bg-cyber-gray rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.1)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14244.413105698735!2d75.676916!3d26.80484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db407a0ff3999%3A0x4e104046d66ef7ca!2sSt.%20Xavier&#39;s%20College%20Jaipur!5e0!3m2!1sen!2sin!4v1763542557995!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[20%] contrast-125"
              ></iframe>
           </div>

        </div>

      </section>
    </main>
  );
}
