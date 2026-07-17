"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutUs() {
  const { ref, isInView } = useScrollReveal();

  return (
    <div id="about">
      <SectionWrapper className="py-20 lg:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-6">About Us</Badge>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-text leading-tight mb-8">
            We believe every business should have access to an intelligent workforce.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-text leading-relaxed mb-6">
            Our mission is to make AI employees as common as human employees—capable of understanding context, collaborating with teams, and delivering measurable business outcomes.
          </p>
          
          <p className="text-lg md:text-xl text-muted-text leading-relaxed">
            Whether answering customers, managing operations, or supporting employees, our AI workforce is built to work around the clock.
          </p>
          
          <div className="mt-10 flex justify-center">
            <Link href="/get-in-touch">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5" />}
                className="rounded-full px-8 py-4 text-base shadow-xl shadow-accent/20 hover:shadow-accent/30 transition-all hover:-translate-y-1"
              >
                Get in touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
