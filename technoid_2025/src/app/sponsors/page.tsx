import { TitleBanner } from "@/components/sections/TitleBanner";
import CyberImage from "@/components/CyberImage";

export default function SponsorsPage() {
  const sponsorsImage = "/images/Sponsors.jpg"; 

  return (
    <main className="min-h-screen bg-cyber-black">
      <TitleBanner 
        title="SPONSORS" 
        subtitle="Our Valued Investors" 
      />
      
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 flex justify-center">
        
        {/* Sponsors Image Container */}
        <div className="relative w-full max-w-5xl clip-tile border-2 border-neon-pink/30 bg-cyber-gray/20 p-2 md:p-4 shadow-[0_0_40px_rgba(255,0,255,0.15)] hover:shadow-[0_0_60px_rgba(255,0,255,0.25)] transition-shadow duration-500">
          <CyberImage 
            src={sponsorsImage}
            alt="Event Sponsors"
            className="w-full h-auto object-contain rounded-sm"
          />
        </div>

      </section>
    </main>
  );
}
