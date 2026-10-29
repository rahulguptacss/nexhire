import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import MissionVision from '@/components/sections/MissionVision';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackToTop from '@/components/ui/BackToTop';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.home?.metadata?.title || 'NexHire - Global Talent Solutions & Executive Staffing',
  description: pages.home?.metadata?.description || 'Connecting visionary enterprises with top-tier global talent, executive leadership, and specialized tech teams.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#1e293b]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Hero data={sections.hero} />
        <Features data={sections.features} />
        <About data={sections.about} />
        <MissionVision data={sections.mission_vision} />
        <Services data={sections.services} />
        <Process data={sections.process} />
        <WhyChooseUs data={sections.why_choose_us} />
        <Team data={sections.team} />
        <Testimonials data={sections.testimonials} />
        <Faq data={sections.faq} />
        <Contact data={sections.contact} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
