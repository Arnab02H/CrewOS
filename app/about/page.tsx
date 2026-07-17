"use client";

import { useLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutUs } from "@/sections/AboutUs";
import { FinalCTA } from "@/sections/FinalCTA";

export default function AboutPage() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <main className="flex min-h-screen flex-col overflow-hidden selection:bg-teal-100 selection:text-teal-900 bg-gradient-to-b from-[#e3f4f4] via-[#f2faf9] to-[#F8FBFF]">
      <Navbar />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-200/40 blur-[120px]" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-cyan-200/30 blur-[120px]" />
      </div>

      <div className="flex-grow pt-24 flex items-center justify-center">
        <AboutUs />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  );
}
