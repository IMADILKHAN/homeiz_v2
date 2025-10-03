"use client";

import { useState, useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Import your cn utility

export function AboutSection() {
  // Use the hook to get a ref and the visibility state
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref} // Attach the ref to the section
      className="relative w-full bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      <div 
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #333 0px, #333 1px, transparent 1px, transparent 150px)'
        }}
      />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Title and Button */}
        <div className={cn(
          "flex flex-col gap-8 transition-all duration-700 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold">
            About Our Agency
          </h2>
          <Button asChild size="lg" className="self-start bg-red-600 text-white rounded-full text-base font-semibold px-8 py-6 shadow-lg shadow-red-500/30 transition-transform duration-300 hover:scale-105 hover:bg-red-700">
            <Link href="/about">Know More About Us</Link>
          </Button>
        </div>

        {/* Right Column: Descriptive Text */}
        <div className={cn(
          "flex flex-col gap-6 transition-all duration-700 ease-in-out delay-1000", // Added a delay
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-xl md:text-2xl text-neutral-200">
            We're a top-tier Production House and Social Media Content Agency in Dubai. As storytellers and strategists, we bring your vision to life with high-quality production and engaging digital content.
          </p>
          <p className="text-base text-neutral-400">
            At House of Shafaq, we create commercial shoots, social media content, and brand stories that stand out. Whether you need to boost your online presence or tell a compelling brand story, we bring innovation, passion, and precision to every project.
          </p>
        </div>
      </div>
    </section>
  );
}