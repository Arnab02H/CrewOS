"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Testimonials() {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Badge className="mb-4">Customer Stories</Badge>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Loved by Forward-Thinking Teams
        </h2>
        <p className="text-lg text-muted-text">
          See how companies are transforming their operations with AI employees.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-[24px] bg-white p-8 border border-[rgba(59,130,246,0.08)] shadow-sm hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col relative"
          >
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 rounded-full bg-[#EEF6FF] text-accent text-xs font-semibold">
                {testimonial.results}
              </span>
            </div>

            <div className="text-6xl text-[#60A5FA]/20 font-serif leading-none h-8 mb-4">
              &ldquo;
            </div>
            
            <p className="text-[#0F172A] text-lg leading-relaxed mb-8 flex-grow">
              {testimonial.quote}
            </p>

            <div className="pt-6 border-t border-[rgba(59,130,246,0.06)] mt-auto flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] flex items-center justify-center text-white font-semibold text-sm shadow-md">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-[#0F172A]">{testimonial.person}</div>
                <div className="text-sm flex flex-col sm:flex-row sm:gap-2">
                  <span className="text-muted-text">{testimonial.role}</span>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <span className="font-medium text-accent">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
