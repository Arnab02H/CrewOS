"use client";

import React from "react";
import { motion } from "framer-motion";
import { statistics } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

/* ─── Individual stat counter ─────────────────────────────────
   Each stat needs its own hook instance so every counter animates
   independently when it scrolls into view.                       */

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  isLast: boolean;
}

function StatCounter({ value, suffix, label, isLast }: StatCounterProps) {
  const { count, ref } = useAnimatedCounter(value, 2000, true);

  return (
    <motion.div
      variants={fadeInUp}
      className={`relative flex flex-col items-center text-center ${
        !isLast ? "md:border-r md:border-white/10" : ""
      }`}
    >
      <span
        ref={ref}
        className="font-heading text-5xl font-bold text-white md:text-6xl"
      >
        {count}
        <span className="text-5xl md:text-6xl">{suffix}</span>
      </span>

      <span className="mt-2 text-sm uppercase tracking-wider text-blue-300/70">
        {label}
      </span>
    </motion.div>
  );
}

export function Statistics() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      {/* Dark container */}
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0F172A] to-[#1E293B]">
        {/* ── Background decorations ── */}

        {/* Subtle dot-grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Soft gradient orbs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#60A5FA]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#60A5FA]/10 blur-3xl" />

        {/* ── Stats grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative z-10 grid grid-cols-2 gap-8 p-12 md:grid-cols-4 lg:p-16"
        >
          {statistics.map((stat, index) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isLast={index === statistics.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
