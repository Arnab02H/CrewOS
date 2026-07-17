"use client";

import { motion } from "framer-motion";
import { Clock, UserX, Zap, Rocket, Brain, Shield } from "lucide-react";

import { whyAIEmployees } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap: Record<string, any> = { Clock, UserX, Zap, Rocket, Brain, Shield };

export function WhyAIEmployees() {
  const { ref, isInView } = useScrollReveal();

  return (
    <SectionWrapper className="py-16 lg:py-20 bg-secondary-bg">
      {/* ── Header ─────────────────────────────────── */}
      <div className="text-center mb-16">
        {/* Badge */}
        <span className="inline-block rounded-full bg-white px-5 py-1.5 text-sm font-medium text-accent shadow-[0_2px_12px_rgba(59,130,246,0.10)] mb-6">
          Why CrewOS
        </span>

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-text">
          The Future of Work is Here
        </h2>

        <p className="text-muted-text text-lg max-w-2xl mx-auto mt-5">
          Every AI Employee is purpose-built to replace an entire job function,
          not just a single task.
        </p>
      </div>

      {/* ── Card grid ──────────────────────────────── */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {whyAIEmployees.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px rgba(59,130,246,0.12)",
                borderColor: "rgba(59,130,246,0.18)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-[24px] bg-white p-8 border border-[rgba(59,130,246,0.08)] cursor-default transition-colors"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] flex items-center justify-center">
                {Icon && <Icon className="text-accent size-6" />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-dark-text mt-5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-text mt-3 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
