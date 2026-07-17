"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, ClipboardList, Zap, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    icon: <Brain className="w-7 h-7 text-white" />,
    title: "Understand",
    description: "Learns your business, customers, and workflows.",
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-white" />,
    title: "Plan",
    description: "Chooses the right actions using company knowledge and policies.",
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Execute",
    description: "Completes tasks across business applications with minimal human intervention.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-white" />,
    title: "Improve",
    description: "Continuously learns from feedback and adapts to deliver better results.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading tracking-tight">
            <span className="text-[#008A90] font-medium">Built to Think.</span><br className="hidden sm:block" />
            <span className="text-dark-text font-medium"> Built to Work.</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line Connecting Steps (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[1.5px] bg-gradient-to-r from-transparent via-[#008A90]/40 to-transparent z-0"></div>

          {/* Vertical Line Connecting Steps (Mobile) */}
          <div className="md:hidden absolute top-10 bottom-32 left-1/2 w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#008A90]/40 to-transparent z-0"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-4 md:gap-x-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#008A90] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(0,138,144,0.25)] border-[4px] border-white z-10 relative transition-transform hover:scale-105 duration-300">
                  {step.icon}
                </div>
                <h3 className="text-[19px] font-bold text-dark-text mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[14.5px] text-muted-text leading-relaxed px-6 md:px-2 lg:px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
