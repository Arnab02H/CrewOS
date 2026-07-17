"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FinalCTA() {
  return (
    <SectionWrapper className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-[32px] bg-gradient-to-br from-[#0a2526] via-[#004a4d] to-[#0a2526] p-8 lg:p-12 relative overflow-hidden shadow-2xl border border-teal-900/50">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#008A90]/20 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4fd1c5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                Ready to Build Your AI Workforce?
              </h2>
              <p className="text-teal-100/70 text-lg">
                Deploy your first AI employee in under 5 minutes.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-end flex-shrink-0 mt-4 lg:mt-0">
              <Link href="/get-in-touch">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#0a2526] hover:bg-gray-100 px-8 rounded-full flex items-center justify-center gap-2 font-semibold mb-3">
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
