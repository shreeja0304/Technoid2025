import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css"; // This error will be fixed when you create the file above
import NavBar from "@/components/sections/navBar";
import Footer from "@/components/sections/footer";
import SmoothScroll from "@/components/SmoothScroll";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import BackToTop from "@/components/BackToTop";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-rajdhani" });

export const metadata: Metadata = {
  title: "Technoid 2025",
  description: "Cyberpunk Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} dark`}>
      <body className="font-rajdhani bg-cyber-black antialiased">
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        
        {/* Fixed UI Elements */}
        <div className="fixed bottom-8 left-8 z-50">
          <SocialMediaLinks />
        </div>
        <div className="fixed bottom-8 right-8 z-50">
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
