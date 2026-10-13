'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, FileText, Mail, Phone, User } from 'lucide-react';

const inputClass =
  'w-full h-[48px] rounded-[10px] border border-[#e3e8ef] bg-white px-4 text-[14px] text-[#041e42] placeholder:text-[#8a94a6] outline-none focus:border-[#fd5b08] focus:shadow-[0_0_0_3px_rgba(253,91,8,0.12)]';

export default function CareerForm() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setFileName('');
    e.currentTarget.reset();
  };

  return (
    <section className="bg-[#f4f5f7] py-12 lg:py-16">
      <div className="container mx-auto grid max-w-[1180px] items-start gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#fd5b08]" />
            <span className="text-[13px] font-bold tracking-[0.16em] text-[#fd5b08] uppercase">Careers</span>
          </div>
          <h2 className="text-[32px] leading-[1.15] font-black text-[#041e42] md:text-[42px]">
            Start your next role with <span className="text-[#fd5b08]">TalentBridge</span>
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#5e6a7c]">
            Tell us a little about yourself and the kind of work you want. Our team reviews every application and gets back to you with roles that fit your experience.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-[#5e6a7c]">
            We work with companies that are hiring for permanent, contract, and specialist roles. Share your resume and a short note about the work you have done. A recruiter reads it, matches it to open roles, and tells you what happens next.
          </p>
          <ul className="mt-6 space-y-3 text-[15px] font-medium text-[#041e42]">
            {[
              'Permanent and contract roles',
              'A reply from a recruiter',
              'Roles matched to your skills',
              'Help with the next interview step',
              'Updates if a better role opens',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="shrink-0 text-[#fd5b08]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-7 text-[#5e6a7c]">
            Add a resume in PDF or Word. A short cover letter helps us see the roles you want, but it is optional. We only use these details to review your application.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(4,30,66,0.06)] sm:p-8">
          <h3 className="text-[22px] font-black text-[#041e42]">Apply now</h3>
          <p className="mt-1 mb-6 text-[14px] text-[#5e6a7c]">Fields marked * are required.</p>
          <div className="grid gap-4">
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-[#041e42]">Full Name *</span>
              <span className="relative block">
                <User size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6b7280]" />
                <input name="name" required autoComplete="name" placeholder="Enter your full name" className={`${inputClass} pl-11`} />
              </span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-[#041e42]">Email Address *</span>
              <span className="relative block">
                <Mail size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6b7280]" />
                <input name="email" type="email" required autoComplete="email" placeholder="Enter your email address" className={`${inputClass} pl-11`} />
              </span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-[#041e42]">Phone Number *</span>
              <span className="relative block">
                <Phone size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6b7280]" />
                <input name="phone" type="tel" required autoComplete="tel" placeholder="Enter your phone number" className={`${inputClass} pl-11`} />
              </span>
            </label>
            <div>
              <span className="mb-1.5 block text-[13px] font-semibold text-[#041e42]">Upload Resume *</span>
              <label className="flex h-[48px] cursor-pointer items-center gap-3 rounded-[10px] border border-dashed border-[#c9d1dc] bg-[#f3f6fa] px-4 hover:border-[#fd5b08]">
                <FileText size={16} className="shrink-0 text-[#4b5563]" />
                <span className="rounded border border-[#c9d1dc] bg-white px-2 py-0.5 text-[12px] font-medium text-[#041e42]">Choose File</span>
                <span className="truncate text-[13px] text-[#4b5563]">{fileName || 'No file chosen'}</span>
                <input name="resume" type="file" accept=".pdf,.doc,.docx" required className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')} />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-[#041e42]">Cover Letter (Optional)</span>
              <textarea name="coverLetter" rows={4} placeholder="Write a short cover letter..." className="w-full resize-y rounded-[10px] border border-[#e3e8ef] px-4 py-3 text-[14px] text-[#041e42] placeholder:text-[#8a94a6] outline-none focus:border-[#fd5b08] focus:shadow-[0_0_0_3px_rgba(253,91,8,0.12)]" />
            </label>
          </div>
          <button type="submit" className="mt-5 inline-flex h-[48px] items-center justify-center rounded-full bg-[#fd5b08] px-8 text-[15px] font-bold text-white transition-colors hover:bg-[#e04f05]">
            Submit Application
          </button>
          {sent && <p className="mt-4 text-[14px] font-medium text-[#041e42]">Thanks. We have received your application.</p>}
        </form>
      </div>
    </section>
  );
}
