import Breadcrumb from '@/components/sections/Breadcrumb';
import CareerForm from '@/components/sections/CareerForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career - TalentBridge',
  description: 'Apply for a role with TalentBridge. Share your details and the kind of work you want.',
};

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb title1="Career" title2="Form" breadcrumb="Career" />
      <CareerForm />
    </main>
  );
}
