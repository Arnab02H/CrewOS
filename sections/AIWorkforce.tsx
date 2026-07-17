"use client";

import React from "react";
import { motion } from "framer-motion";
import { aiWorkforce } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AIWorkforce() {
  return (
    <SectionWrapper className="py-16 lg:py-20 bg-secondary-bg">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Badge className="mb-4">AI Workforce</Badge>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Meet Your AI Employees
        </h2>
        <p className="text-lg text-muted-text">
          Each AI employee is a specialist, trained and ready to own an entire function of your business.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {aiWorkforce.map((employee, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-[24px] bg-white p-6 border border-[rgba(59,130,246,0.08)] shadow-sm hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EEF6FF] flex items-center justify-center text-2xl">
                  {employee.avatar}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-dark-text leading-tight">
                    {employee.role}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs text-muted-text font-medium">{employee.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-text mb-6 flex-grow">
              {employee.description}
            </p>

            <div className="border-t border-[rgba(59,130,246,0.06)] pt-4 mt-auto space-y-4">
              <div>
                <span className="text-xs text-muted-text font-medium mb-2 block uppercase tracking-wider">Tools</span>
                <div className="flex flex-wrap gap-2">
                  {employee.tools.map((tool, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-[#EEF6FF] text-accent text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-muted-text font-medium uppercase tracking-wider">Performance</span>
                  <span className="font-bold text-dark-text">{employee.performance}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-full" 
                    style={{ width: `${employee.performance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
