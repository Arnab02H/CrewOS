"use client";

import { trustedCompanies } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TrustedBy() {
  return (
    <SectionWrapper className="py-20">
      {/* Section header */}
      <p className="text-center text-muted-text text-sm font-medium uppercase tracking-wider mb-12">
        Trusted by the world&apos;s most ambitious companies
      </p>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Left gradient fade mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-light-bg to-transparent" />

        {/* Right gradient fade mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-light-bg to-transparent" />

        {/* Scrolling track — list rendered twice for seamless loop */}
        <div className="animate-marquee flex w-max items-center gap-16">
          {[...trustedCompanies, ...trustedCompanies].map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="font-heading font-bold text-2xl text-[#0F172A]/20 whitespace-nowrap select-none transition-opacity duration-300 hover:opacity-50"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
