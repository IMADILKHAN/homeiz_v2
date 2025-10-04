"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Pre-Production",
    description: "The backbone of any creative project. It's where ideas take shape, budgets get set, schedules are made, and all important details are planned out before production begins.",
    details: ["Concept Development", "Location Scouting", "Casting and Talent Selection", "Wardrobe and Styling", "Budgeting and Scheduling", "Equipment Rental", "Storyboarding and Shot List"],
  },
  {
    title: "Production",
    description: "Where all the planning comes to life. Cameras roll, the crew directs the creative vision, and every shot captures the essence of the story. It's the stage where ideas turn into reality.",
    details: ["Principal Photography", "Direction and Cinematography", "On-Set Sound Recording", "Lighting and Grip", "Production Management", "Art Direction and Set Design", "Behind-the-Scenes Capture"],
  },
  {
    title: "Post-Production",
    description: "Where raw footage is transformed into a polished final product. Editing, sound design, visual effects, and final adjustments all come together to bring the creative vision to life.",
    details: ["Video Editing", "Color Grading and Correction", "Visual Effects (VFX)", "Motion Graphics", "Sound Design and Mixing", "Music Scoring", "Final Delivery and Formatting"],
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
      <div className="lg:col-span-2 flex flex-col items-start gap-8 lg:sticky lg:top-24">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          From Concept To Creation
        </h2>
        <Button size="lg" asChild className="bg-red-600 text-white rounded-full text-base font-semibold px-8 py-6 shadow-lg shadow-red-500/30 transition-transform duration-300 hover:scale-105 hover:bg-red-700">
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>

      <div className="lg:col-span-3 flex flex-col gap-4">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          const detailsMidIndex = Math.ceil(service.details.length / 2);

          return (
            <div 
              key={index}
              className="relative group overflow-hidden p-6 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div 
                className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 ease-in-out group-hover:left-full pointer-events-none"
                style={{ transform: 'skewX(-25deg)' }}
              />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-neutral-400 mb-5 text-sm">{service.description}</p>
              
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      <ul className="space-y-2">
                        {service.details.slice(0, detailsMidIndex).map((detail) => (
                           <li key={detail} className="text-xs uppercase tracking-wider text-neutral-400">・ {detail}</li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                         {service.details.slice(detailsMidIndex).map((detail) => (
                           <li key={detail} className="text-xs uppercase tracking-wider text-neutral-400">・ {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button 
                onClick={() => handleToggle(index)}
                variant="outline" 
                className="rounded-full bg-transparent border-neutral-700 text-neutral-300 text-sm mt-6 px-5 py-2 h-auto hover:bg-white/5 hover:text-white hover:border-neutral-500"
              >
                {isActive ? 'Hide Details' : 'Learn More'}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}