"use client";

import { useState, useEffect, useRef } from 'react';

export function KineticText() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        const scrollPercent = Math.max(0, Math.min(1, (screenHeight - top) / (screenHeight + height)));
        const newScale = 0.5 + scrollPercent * 0.5;

        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <div 
        className="font-headline uppercase text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-transparent"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s linear',
        }}
      >
        HOMIZ Media
      </div>
    </div>
  );
}
