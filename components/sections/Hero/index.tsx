"use client";

import { motion } from 'framer-motion';
import { sections, HeroSectionData } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero({ data }: { data?: HeroSectionData } = {}) {
  const content = data || sections.hero;
  const { subtitle, title_line1, title_line2, title_highlight, image, image_alt, features, button, secondary_button } = content;

  return (
    <section id="home" className="bg-[#062454] text-white pt-10 md:pt-14 pb-0 relative overflow-hidden">
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
        className="absolute top-[35%] left-[8%] text-[#00b594]"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[#00b594]/10 blur-3xl pointer-events-none"
      />

      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[5%] w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 rounded-full"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        {/* Subtitle Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-3 mb-5"
        >
          <div className="w-10 h-[2px] bg-[#00b594]"></div>
          <span className="text-white/90 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">{subtitle}</span>
          <div className="w-10 h-[2px] bg-[#00b594]"></div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[34px] leading-[1.12] sm:text-5xl md:text-6xl lg:text-[64px] font-black mb-6 md:mb-6 tracking-tight max-w-5xl mx-auto px-2 sm:px-0 text-white"
        >
          {title_line1} <br className="hidden sm:block" />
          {title_line2 && `${title_line2} `}
          <span className="bg-gradient-to-r from-[#74dd11] via-[#00c2a0] to-[#00b594] bg-clip-text text-transparent">{title_highlight}</span>
        </motion.h1>

        {/* Feature Highlights Pills */}
        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 max-w-3xl mx-auto"
          >
            {features.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm text-gray-200"
              >
                <CheckCircle2 size={16} className="text-[#74dd11]" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {button && (
            <a
              href={button.href || '#contact'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00b594] px-8 py-3.5 text-[15px] font-bold text-white hover:bg-[#00977b] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {button.text} <ArrowRight size={18} />
            </a>
          )}
          {secondary_button && (
            <a
              href={secondary_button.href || '#services'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              {secondary_button.text}
            </a>
          )}
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative flex justify-center mt-4 md:mt-6 -mb-8 sm:-mb-10 px-2 sm:px-4"
        >
          <div className="relative w-full max-w-[1060px] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border-4 border-white/15 bg-[#062454]">
            <img 
              src={image} 
              alt={image_alt || "NexHire Executive Talent Acquisition Team"} 
              className="w-full h-auto max-h-[360px] sm:max-h-[460px] md:max-h-[520px] object-cover object-top" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
