"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function NeonCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Spring physics for smooth movement
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
      style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Core Glow */}
      <div className="w-8 h-8 bg-neon-cyan rounded-full blur-md opacity-60" />
      
      {/* Outer Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-pink rounded-full blur-3xl opacity-20 animate-pulse" />
    </motion.div>
  );
}
