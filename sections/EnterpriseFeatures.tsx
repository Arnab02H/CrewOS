"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Mic,
  Globe,
  Plug,
  GitBranch,
  BarChart3,
  Lock,
} from "lucide-react";
import { enterpriseFeatures } from "@/lib/constants";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/Badge";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Cpu,
  Mic,
  Globe,
  Plug,
  GitBranch,
  BarChart3,
  Lock,
};

/* Grid placement per card index — drives bento layout on lg screens */
const gridSpans: Record<number, string> = {
  0: "lg:col-span-2", // Row 1: large
  1: "lg:col-span-1", // Row 1
  2: "lg:col-span-1", // Row 2
  3: "lg:col-span-1", // Row 2
  4: "lg:col-span-1", // Row 2
  5: "lg:col-span-1", // Row 3
  6: "lg:col-span-2", // Row 3: large
  7: "lg:col-span-1", // Row 4 (will wrap)
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  size: string;
  span: string;
}

function FeatureCard({ icon, title, description, size, span }: FeatureCardProps) {
  const Icon = iconMap[icon];
  const isLarge = size === "large";

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className={`group relative rounded-[24px] bg-white border border-[rgba(59,130,246,0.08)] ${
        isLarge ? "p-10 min-h-[200px]" : "p-8"
      } ${span} col-span-1`}
    >
      {/* Hover glow overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#60A5FA]/[0.04] to-transparent" />

      {/* Subtle lift & shadow on hover via motion */}
      <motion.div
        className="relative z-10 flex h-full flex-col"
        variants={cardHover}
      >
        {/* Icon container */}
        <div
          className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#EEF6FF] to-[#DBEAFE] ${
            isLarge ? "w-14 h-14" : "w-12 h-12"
          }`}
        >
          {Icon && (
            <Icon
              className={`text-[#3B82F6] ${isLarge ? "w-7 h-7" : "w-5 h-5"}`}
              strokeWidth={1.8}
            />
          )}
        </div>

        <h3 className="mt-4 font-heading text-lg font-semibold text-[#0F172A]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function EnterpriseFeatures() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="enterprise" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ── Section header ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge>Enterprise Grade</Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-heading text-4xl font-bold text-[#0F172A] md:text-5xl"
          >
            Built for Enterprise Scale
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg leading-relaxed text-[#64748B]"
          >
            Every feature designed for security, scale, and serious business
            outcomes.
          </motion.p>
        </motion.div>

        {/* ── Bento grid ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {enterpriseFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              size={feature.size}
              span={gridSpans[index] ?? "lg:col-span-1"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
