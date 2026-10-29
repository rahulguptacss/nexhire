"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { common, HeaderData } from '../../types';

export default function Header({ data }: { data?: HeaderData } = {}) {
  const content = data || common.Header;
  const { logo_text, logo_image, links, button_text, button_link } = content;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = links
        .filter((l) => l.href.startsWith('#'))
        .map((l) => l.href.replace('#', ''));

      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const scrollToSection = (targetId: string) => {
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const targetY = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, Math.round(targetY)),
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      setIsMobileMenuOpen(false);
      scrollToSection(targetId);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const isLinkActive = (href: string) => {
    if (href.startsWith('#')) {
      return activeSection === href.replace('#', '');
    }
    return false;
  };

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-2.5 flex justify-between items-center">
        {/* Brand Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logo_image}
              alt={logo_text || "NexHire Logo"}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="ml-auto hidden xl:flex items-center gap-6 2xl:gap-8"
        >
          <nav className="flex gap-5 lg:gap-6 2xl:gap-7 items-center">
            {links.map((link, index) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-semibold text-[14px] 2xl:text-[15px] transition-colors relative py-1 cursor-pointer ${
                    active ? 'text-[#00b594]' : 'text-[#062454] hover:text-[#00b594]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00b594] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          {button_text && (
            <a
              href={button_link || '#contact'}
              onClick={(e) => handleNavClick(e, button_link || '#contact')}
              className="inline-flex items-center gap-2 rounded-full bg-[#00b594] px-5 py-2.5 text-[14px] font-bold text-white hover:bg-[#00977b] transition-all duration-300 shadow-md hover:shadow-lg ml-2"
            >
              {button_text} <ArrowRight size={16} />
            </a>
          )}
        </motion.div>

        {/* Tablet / Mobile CTA & Menu Trigger */}
        <div className="flex xl:hidden items-center gap-3">
          {button_text && (
            <a
              href={button_link || '#contact'}
              onClick={(e) => handleNavClick(e, button_link || '#contact')}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#00b594] px-4 py-2 text-[13px] font-bold text-white hover:bg-[#00977b] transition-colors"
            >
              {button_text}
            </a>
          )}

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#062454] p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map((link, index) => {
                const active = isLinkActive(link.href);
                return (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-semibold text-base py-2 transition-colors border-b border-gray-50 flex items-center justify-between ${
                      active ? 'text-[#00b594]' : 'text-[#062454] hover:text-[#00b594]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#00b594]" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
