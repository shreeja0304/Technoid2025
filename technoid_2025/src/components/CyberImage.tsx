"use client";

import React from 'react';

// This interface defines the simple props we pass to the standard <img> tag.
interface CyberImageProps {
    src: string;
    alt: string;
    className: string;
    // We intentionally removed width/height as the calling component manages size via className (h-48)
    // We intentionally removed onError to prevent the static analysis crash.
}

export default function CyberImage({ src, alt, className }: CyberImageProps) {
  // Using a standard <img> tag here is perfectly valid because of the "use client" directive.
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      // Set static dimensions to prevent layout shifts, even if we control size via CSS.
      width={600} 
      height={400}
    />
  );
