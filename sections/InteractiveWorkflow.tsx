"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, Bot, Plug, Database, Mail, CheckCircle } from "lucide-react";
import { workflowSteps } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap: Record<string, any> = {
  MessageSquare,
  Brain,
  Bot,
  Plug,
  Database,
  Mail,
  CheckCircle,
};

export function InteractiveWorkflow() {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Badge className="mb-4">How It Works</Badge>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          From Request to Results in Seconds
        </h2>
        <p className="text-lg text-muted-text">
          Watch how CrewOS transforms a simple request into a fully executed task.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 via-blue-400 to-blue-100 -translate-x-1/2 rounded-full hidden md:block">
          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-accent"
          ></motion.div>
          {/* Pulsing dot moving down */}
          <motion.div
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-4 bg-white rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]"
          ></motion.div>
        </div>

        <div className="space-y-12 md:space-y-0 relative">
          {workflowSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? "md:flex-row-reverse" : ""
                } md:h-32`}
              >
                {/* Connecting Line for Mobile */}
                {index !== 0 && (
                  <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-100 mx-auto -mt-6 -mb-6"></div>
                )}

                {/* Content Card */}
                <div className={`w-full md:w-1/2 flex ${isEven ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"}`}>
                  <GlassCard className="w-full max-w-md p-6 relative group" glow>
                    {/* Connector dot to central line */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-accent shadow-sm z-10 transition-transform group-hover:scale-150 ${isEven ? "-left-14" : "-right-14"}`}></div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] flex items-center justify-center text-white shadow-lg">
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-text">{step.label}</h4>
                        <p className="text-sm text-muted-text mt-1">{step.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
