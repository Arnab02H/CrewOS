"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

export function Hero() {
  return (
    <SectionWrapper className="pt-32 pb-4 lg:pt-40 lg:pb-8 overflow-hidden relative">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-400/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-teal-400/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
            <Badge variant="info" className="bg-blue-50/80 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Powered by Advanced AI
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading tracking-tight mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-[#008A90] font-medium">Hire AI Employees.</span><br />
            <span className="text-dark-text font-medium">Scale Your Business.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-text mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Hire AI Employees that think, act, and execute like your best team members—available 24/7, infinitely scalable, and ready in minutes.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <Link href="/get-in-touch">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-[#008A90] hover:bg-[#007A80] text-white flex items-center justify-center gap-2">
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          

        </motion.div>
      </div>
    </SectionWrapper>
  );
}
