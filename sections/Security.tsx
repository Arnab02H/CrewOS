"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Award, Lock, Users, FileText } from "lucide-react";
import { securityBadges } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerFast } from "@/lib/animations";

const iconMap: Record<string, any> = {
  ShieldCheck,
  Globe,
  Award,
  Lock,
  Users,
  FileText,
};

export function Security() {
  return (
    <SectionWrapper className="py-24 lg:py-32 bg-secondary-bg">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge className="mb-4">Security & Compliance</Badge>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Enterprise-Grade Security
        </h2>
        <p className="text-lg text-muted-text">
          Your data is protected by industry-leading security standards and compliance frameworks.
        </p>
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
      >
        {securityBadges.map((badge, index) => {
          const Icon = iconMap[badge.icon];
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="rounded-[20px] bg-white p-6 border border-[rgba(59,130,246,0.08)] text-center shadow-sm hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-[#EEF6FF] group-hover:bg-blue-100 flex items-center justify-center mb-4 transition-colors">
                {Icon && <Icon className="w-6 h-6 text-accent" />}
              </div>
              <h3 className="font-heading font-semibold text-[#0F172A] mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-text">{badge.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
