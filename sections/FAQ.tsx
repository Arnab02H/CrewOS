"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper className="py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge className="mb-4">FAQ</Badge>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-text">
          Everything you need to know about hiring AI employees.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border-b border-[rgba(59,130,246,0.08)] last:border-0"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
              <span className="text-lg font-heading font-medium text-[#0F172A] group-hover:text-accent transition-colors">
                {item.question}
              </span>
              <span className="ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <ChevronDown 
                  className={`w-5 h-5 text-accent transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-muted-text leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
