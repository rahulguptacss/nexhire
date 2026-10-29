"use client";

import React from 'react';
import { sections, WhyChooseUsSectionData } from '../../types';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Building, ShieldCheck, Handshake, Settings, BarChart3, Award, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Target,
  Zap,
  Building,
  ShieldCheck,
  Handshake,
  Settings,
  BarChart3,
  Award,
  HeartHandshake
};

export default function WhyChooseUs({ data, bgColor = "bg-[#f8f9fa]" }: { data?: WhyChooseUsSectionData; bgColor?: string } = {}) {
  const content = data || sections.why_choose_us;
  const { subtitle, title_line1, title_highlight, description, image1, image2, badge_text, features } = content;

  return (
    <section id="why-us" className={`py-12 lg:py-16 ${bgColor} overflow-hidden scroll-mt-20`}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1300px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column - Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] relative flex gap-4 lg:gap-6 items-center justify-center py-6"
          >
            {/* Left Image (staggered UP) */}
            <div className="w-[50%] h-[320px] sm:h-[400px] lg:h-[460px] rounded-[24px] overflow-hidden shadow-xl relative z-10 -mt-12 sm:-mt-16">
              <img src={image1} alt="Why Choose Us" className="w-full h-full object-cover" />
            </div>
            
            {/* Right Image (staggered DOWN) */}
            <div className="w-[50%] h-[320px] sm:h-[400px] lg:h-[460px] rounded-[24px] overflow-hidden shadow-xl relative z-10 mt-12 sm:mt-16">
              <img src={image2} alt="Why Choose Us 2" className="w-full h-full object-cover" />
            </div>

            {/* Circular Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] bg-[#e6f8f5] rounded-full flex items-center justify-center p-2.5 shadow-xl z-20">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00b594] rounded-full flex items-center justify-center text-white z-10 shadow-md">
                  <Users size={26} strokeWidth={2.5} />
                </div>
                <svg className="absolute w-full h-full scale-[1.05] animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="curve-badge" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[10px] lg:text-[11px] font-black fill-[#062454] tracking-[2.5px] uppercase">
                    <textPath href="#curve-badge" startOffset="0%">
                      • {badge_text} • {badge_text}
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00b594]"></div>
                <span className="text-[#00b594] font-bold uppercase tracking-[0.2em] text-[13px]">{subtitle}</span>
                <div className="h-[1.5px] w-[100px] bg-gradient-to-r from-[#00b594] to-transparent ml-1"></div>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-black text-[#062454] leading-[1.15] mb-3 tracking-tight">
                {title_line1} <span className="text-[#00b594]">{title_highlight}</span>
              </h2>
              <p className="text-[#5e6a7c] text-[15px] sm:text-[16px] leading-[1.6] font-normal max-w-xl">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature: any, idx: number) => {
                const IconComp = iconMap[feature.icon] || Target;
                const isOrange = idx % 2 === 0;

                return (
                  <div key={idx} className="bg-white rounded-[20px] p-4 sm:p-5 flex gap-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow group items-start">
                    <div className={`w-[48px] h-[48px] shrink-0 rounded-full flex items-center justify-center transition-colors ${
                      isOrange ? 'bg-[#e6f8f5] text-[#00b594]' : 'bg-[#edf1ff] text-[#062454]'
                    }`}>
                      <IconComp size={22} strokeWidth={2} />
                    </div>
                    <div className="mt-0.5">
                      <h3 className="text-[15px] font-bold text-[#062454] mb-1">{feature.title}</h3>
                      <p className="text-[13px] text-[#5e6a7c] leading-[1.5]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
