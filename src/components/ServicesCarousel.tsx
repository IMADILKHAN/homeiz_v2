"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const services = [
  {
    title: "Social Media Handling",
  },
  {
    title: "Portfolio Management",
  },
  {
    title: "Responsive Website Development",
  },
  {
    title: "Advanced SEO",
  },
];

export function ServicesCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
      className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto"
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <div className="p-1 group">
               <div className="shine-effect honeycomb-card">
                 <div className="flex flex-col items-center justify-center text-center">
                    <Quote className="w-10 h-10 text-white/40 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <Button variant="outline" className="border-white/50 bg-transparent text-white/90 hover:bg-white/10 hover:text-white">Discover More</Button>
                  </div>
               </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-10 w-10 text-white bg-white/10 hover:bg-white/20 border-white/20 -left-12" />
      <CarouselNext className="h-10 w-10 text-white bg-white/10 hover:bg-white/20 border-white/20 -right-12" />
    </Carousel>
  );
}
