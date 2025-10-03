"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Linkedin, Twitter, Briefcase, BarChart2, Megaphone, Code, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { KineticText } from '@/components/KineticText';
import { ClientMarquee } from '@/components/ClientMarquee';
import { ServicesCarousel } from '@/components/ServicesCarousel';
import { TypingEffect } from '@/components/TypingEffect';
import { ParticleBackground } from '@/components/ParticleBackground';
import {VideoCard} from '@/components/VideoCard';
import { ContactForm } from '@/components/ContactForm';
import { SingleSentenceTypingEffect } from '@/components/SingleSentenceTypingEffect';
import { GlowingCube } from '@/components/GlowingCube';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {

  // --- VideoCard Component Definition ---
  
  const VideoCard = ({ item }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-black border border-neutral-800 h-full w-full">
        {/* Base Image - Fades to ZERO on hover */}
        <img
            src={item.image}
            alt={item.title}
            width={item.width}
            height={item.height}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />
        {/* Stripe Overlay - Appears only on hover */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 100px)'
          }}
        ></div>
        {/* Light Ray Effect - Sweeps on hover */}
        <div 
          className="absolute top-0 -left-full h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 ease-in-out group-hover:left-full"
          style={{ transform: 'skewX(-25deg)' }}
        ></div>
        {/* Content Overlay */}
        <div className="relative z-10 h-full p-6 flex flex-col">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
                {item.title}
            </h3>
            <div className="mt-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-sm text-neutral-300">
                    {item.description}
                </p>
            </div>
        </div>
    </div>
  );
   const portfolioItems = [
    {
      title: "Project Alpha",
      category: "Social Media Strategy",
      image: "https://picsum.photos/seed/proj1/600/800",
      dataAiHint: "social media analytics",
      width: 600,
      height: 800,
    },
    {
      title: "Project Beta",
      category: "Portfolio Management",
      image: "https://picsum.photos/seed/proj2/800/600",
      dataAiHint: "financial chart",
      width: 800,
      height: 600,
    },
    {
      title: "Project Gamma",
      category: "Social Media Campaign",
      image: "https://picsum.photos/seed/proj3/600/600",
      dataAiHint: "marketing campaign",
      width: 600,
      height: 600,
    },
     {
      title: "Project Delta",
      category: "Investment Strategy",
      image: "https://picsum.photos/seed/proj4/800/600",
      dataAiHint: "stock market",
      width: 800,
      height: 600,
    },
     {
      title: "Project Epsilon",
      category: "Brand Identity",
      image: "https://picsum.photos/seed/proj5/600/800",
      dataAiHint: "logo design",
      width: 600,
      height: 800,
    },
    {
      title: "Project Zeta",
      category: "Web Development",
      image: "https://picsum.photos/seed/proj6/800/600",
      dataAiHint: "website code",
      width: 800,
      height: 600,
    },
  ];
// --- NEW LIST AS REQUESTED ---
const videoItems = [
  {
    title: "Youtube Video",
    category: "Social Media Strategy",
    image: "https://plus.unsplash.com/premium_photo-1666739389150-45550b371c4a?q=80&w=2203&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Full-scale production of a flagship YouTube video, engineered to boost subscriber growth and channel engagement as a cornerstone of our social media strategy.",
    width: 600,
    height: 800,
  },
  {
    title: "Documentaries",
    category: "Portfolio Management",
    image: "https://images.unsplash.com/photo-1752560934261-951212a89310?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Crafting a compelling narrative through a feature documentary, showcasing our diverse portfolio and communicating long-term value to stakeholders.",
    width: 800,
    height: 600,
  },
  {
    title: "Short Reels",
    category: "Social Media Campaign",
    image: "https://images.unsplash.com/photo-1759393851741-674ee71fb498?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A series of high-impact, short-form reels designed to capture attention and drive viral engagement for our latest social media campaign.",
    width: 600,
    height: 600,
  },
  {
    title: "Mid-level Ads",
    category: "Investment Strategy",
    image: "https://images.unsplash.com/photo-1579677917230-8a938ffc0279?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Developing targeted video ads that clearly communicate our investment strategy, building trust and generating qualified leads from a specific demographic.",
    width: 800,
    height: 600,
  },
  {
    title: "Commercial and advertisement",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1646654184457-cd64cadcd3a3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "From script to screen, this broadcast-quality commercial was created to solidify brand identity and elevate market presence.",
    width: 600,
    height: 800,
  },
];
   const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Portfolio Management",
      description: "Strategic asset allocation and risk management to grow your wealth and achieve your financial goals.",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      title: "Social Media Strategy",
      description: "Comprehensive social media planning, content creation, and community management to elevate your brand.",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Digital Campaigns",
      description: "End-to-end execution of viral marketing campaigns that capture attention and drive engagement.",
    },
  ];
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[100vh] flex flex-col justify-center">
        <ParticleBackground />
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-4 relative z-10 flex flex-col items-center"
        >
           <GlowingCube />
           <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight flex justify-center flex-wrap mt-8">
            {'HOMIZ Media'.split('').map((char, index) => (
              <span key={index} className="transition-all duration-300 ease-in-out hover:text-primary hover:scale-125 cursor-pointer">
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h1>
          <div className="mt-2 text-lg md:text-2xl text-primary font-medium h-8">
            <TypingEffect />
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground font-poppins text-center">
            Crafting innovative investment strategies and viral social media campaigns that drive growth and engagement.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild className="shine-effect">
              <Link href="#portfolio">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shine-effect">
              <Link href="#contact">Hire Me Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Kinetic Text Section */}
      <section className="w-full py-20 md:py-24">
        <KineticText />
      </section>

      {/* Clients Worked With */}
      <section className="w-full pt-20 pb-20 md:pb-24">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Clients I've Worked With</h2>
          <ClientMarquee />
        </div>
      </section>
      
      {/* Our Services Section */}
      <div className="w-full">
        <section id="services" className="w-full py-20 md:py-24 relative overflow-hidden">
          <video
            src="https://pouch.jumpshare.com/preview/Nzis74wWkukqq7uGX1QTPJc_weAR0prNVpAYui1bNmgAD7w9oqBb-zPYcqGIsdeoi_8lvwuMjEpMlkOX_JmCvlehr8Gf2CF79-jHJ079OmLG4ss5AtfANut7SUxW5FlQv_VnXGB3dXU9gbw_OhEWKm6yjbN-I2pg_cnoHs_AmgI.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
          />
          <div className="relative z-10 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
            <ServicesCarousel />
          </div>
        </section>
      </div>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portfolio Showcase</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 break-inside-avoid">
                 <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    data-ai-hint={item.dataAiHint}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-primary font-semibold">{item.category}</p>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Deprecated Services Section - Can be removed or repurposed */}
      <section className="w-full py-20 md:py-24 hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 rounded-2xl">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


     {/* Video Showcase */}
     <section id="video-showcase" className="w-full py-20 md:py-24 bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Experienced in Various Video Types</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[22rem] gap-6">
            {videoItems[0] && (
              <div className="lg:col-span-2">
                <VideoCard item={videoItems[0]} />
              </div>
            )}
            {videoItems[1] && (
              <div className="lg:col-span-1">
                <VideoCard item={videoItems[1]} />
              </div>
            )}
            {videoItems[2] && (
              <div className="lg:col-span-1 lg:row-span-2">
                <VideoCard item={videoItems[2]} />
              </div>
            )}
            {videoItems[3] && (
              <div className="lg:col-span-1">
                <VideoCard item={videoItems[3]} />
              </div>
            )}
            {videoItems[4] && (
              <div className="lg:col-span-2">
                <VideoCard item={videoItems[4]} />
              </div>
            )}
            {videoItems[5] && (
              <div className="lg:col-span-2">
                <VideoCard item={videoItems[5]} />
              </div>
            )}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <ContactForm />
           <div className="flex justify-center items-center gap-6 mt-12">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={32} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={32} /></Link>
              <Link href="https://www.instagram.com/homiz.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={32} /></Link>
              <Link href="https://api.whatsapp.com/send?phone=9156260436" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 21.94L7.31 20.55C8.75 21.33 10.35 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 20.15C10.51 20.15 9.01 19.68 7.76 18.8L7.31 18.53L4.92 19.22L5.64 16.91L5.35 16.44C4.5 15.08 4.02 13.53 4.02 11.91C4.02 7.55 7.63 3.94 12.04 3.94C14.2 3.94 16.21 4.79 17.76 6.34C19.31 7.89 20.16 9.9 20.16 11.91C20.16 16.27 16.45 20.15 12.04 20.15M17.43 14.41C17.16 14.28 15.96 13.69 15.71 13.59C15.47 13.5 15.28 13.5 15.09 13.77C14.91 14.04 14.31 14.73 14.12 14.92C13.93 15.11 13.74 15.15 13.47 15.02C13.2 14.88 12.04 14.49 10.73 13.25C9.71 12.29 9.02 11.12 8.87 10.85C8.73 10.58 8.86 10.45 9 10.31C9.13 10.18 9.29 9.99 9.46 9.82C9.63 9.65 9.71 9.53 9.85 9.26C9.99 8.99 9.9 8.76 9.81 8.57C9.72 8.38 9.17 7.08 8.92 6.51C8.68 5.94 8.43 6.01 8.24 6.01C8.04 6.01 7.85 5.99 7.66 5.99C7.47 5.99 7.18 6.07 6.94 6.34C6.7 6.61 6.13 7.15 6.13 8.3C6.13 9.45 6.98 10.54 7.12 10.73C7.26 10.92 9.12 13.75 11.92 14.97C12.68 15.31 13.28 15.49 13.78 15.63C14.44 15.81 14.99 15.77 15.42 15.72C15.91 15.66 17.11 15.03 17.35 14.46C17.59 13.89 17.59 13.41 17.5 13.28C17.41 13.14 17.27 13.04 17.43 14.41Z" />
                </svg>
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
}
