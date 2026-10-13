"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from '../../types';

export default function Hero() {
  const { subtitle, title_line1, title_line2, title_highlight, button, image } = sections.hero;

  return (
    <section className="bg-[#041e42] text-white pt-8 pb-0 relative overflow-hidden">
      {/* Background Animated Patterns */}
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] text-white opacity-30 hidden md:block"
      >
        <div className="grid grid-cols-5 gap-3">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-current rounded-full"></div>)}
        </div>
      </motion.div>

      <motion.div 
        animate={{ rotate: [0, 90, 180, 270, 360] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[10%] text-[#fd5b08]"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -left-[5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none"
      />

      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[5%] w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 rounded-full"
      />

      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] w-8 h-8 md:w-10 md:h-10 border-2 border-white/20 rounded-full"
      />

      <motion.div 
        animate={{ x: [0, 15, 0], opacity: [0.6, 1, 0.6] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[40%] right-[5%] md:right-[15%] text-[#fd5b08] hidden lg:block"
      >
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-current rounded-full"></div>)}
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] right-[30%] hidden xl:block z-20 pointer-events-none"
      >
        <svg width="80" height="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#fd5b08]">
          <path d="M90 10 Q 70 60 10 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M25 35 L 10 50 L 25 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </motion.div>

      <div className="absolute top-0 w-full h-full left-0 pointer-events-none opacity-20 hidden md:block overflow-hidden">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-[150%] h-[150%] -ml-[25%] -mt-[25%]">
          <path d="M0,30 Q25,10 50,30 T100,30" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0,80 Q25,60 50,80 T100,80" fill="none" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          <div className="w-12 h-[2px] bg-[#fd5b08]"></div>
          <span className="text-white font-medium uppercase tracking-[0.15em] text-xs md:text-sm">{subtitle}</span>
          <div className="w-12 h-[2px] bg-[#fd5b08]"></div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[34px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[64px] font-black mb-8 tracking-tighter max-w-5xl mx-auto px-2 sm:px-0"
        >
          {title_line1} <br className="hidden sm:block" />
          {title_line2} <span className="text-[#fd5b08]">{title_highlight}</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-6 md:mb-4 relative"
        >
          <Link 
            href={button.href} 
            className="group bg-[#fd5b08] text-white pl-8 pr-2.5 py-2.5 md:pl-8 md:pr-3 md:py-3 rounded-[18px] md:rounded-full font-bold text-[16px] md:text-xl flex items-center gap-5 md:gap-6 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            <span>{button.text}</span>
            <div className="bg-white text-[#fd5b08] rounded-full w-9 h-9 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
            </div>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center mt-6 md:mt-2 -mb-1"
        >
          <img src={image} alt="Hero Team" className="w-full max-w-[860px] max-h-[180px] sm:max-h-[220px] md:max-h-[260px] object-contain object-bottom pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
