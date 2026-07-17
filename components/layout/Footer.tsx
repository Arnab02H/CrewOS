"use client";

import React from "react";
import { footerLinks } from "@/lib/constants";
import { FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative bg-[#051112] text-white pt-12 pb-6 overflow-hidden border-t border-teal-900/30">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="/" className="text-3xl font-heading font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 mb-6 block">
              CrewOS
            </a>
            <p className="text-base text-teal-100/60 leading-relaxed max-w-sm">
              Hire AI Employees that think, act, and execute like your best team members—available 24/7.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-teal-900/20 border border-teal-800/30 flex items-center justify-center text-teal-100/60 hover:text-white hover:bg-teal-800/50 hover:border-teal-600/50 transition-all hover:-translate-y-1 shadow-lg hover:shadow-teal-900/50">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="flex flex-col">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-teal-100/60 hover:text-cyan-300 inline-block transition-all hover:translate-x-1"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-teal-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-teal-100/40">
            © {new Date().getFullYear()} CrewOS. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-teal-100/50">
            <a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
