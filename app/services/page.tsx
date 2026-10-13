import React from 'react';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Services from '@/components/sections/Services';
import { pages } from '@/components/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pages.services.meta?.title || 'Our Services - TalentBridge',
  description: pages.services.meta?.description || '',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb title1="Our" title2="Services" breadcrumb="Our Services" />
      <Services />
    </main>
  );
}
