"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ArrowUpRight, IndianRupee, ShoppingCart, Plane, GraduationCap, RadioTower, Truck, Stethoscope } from "lucide-react";
import { navLinks, aiWorkforce } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const industriesList = [
  { 
    name: "Financial Services", 
    icon: <IndianRupee className="w-3.5 h-3.5" />,
    title: "Conversational AI for Financial Services",
    description: "Automate acquisition, servicing, payments, collections and support at scale",
    image: "/finance.png",
    solutions: ['Lending', 'Wealth', 'Payments', 'Insurance', 'Banking']
  },
  { 
    name: "Commerce", 
    icon: <ShoppingCart className="w-3.5 h-3.5" />,
    title: "Conversational AI for Commerce",
    description: "Automate sales, support, and order tracking at scale",
    image: "/commerce.png",
    solutions: ['E-commerce', 'Retail', 'Marketplaces', 'D2C', 'B2B']
  },
  { 
    name: "Travel & Hospitality", 
    icon: <Plane className="w-3.5 h-3.5" />,
    title: "Conversational AI for Travel",
    description: "Automate bookings, support, and concierge services at scale",
    image: "/travel.png",
    solutions: ['Airlines', 'Hotels', 'OTAs', 'Cruises', 'Car Rentals']
  },
  { 
    name: "EdTech", 
    icon: <GraduationCap className="w-3.5 h-3.5" />,
    title: "Increase Enrollments with an AI Receptionist",
    description: "Handle admissions, answer FAQs, schedule demos, and engage students around the clock.",
    image: "/edtech.png",
    solutions: ['Admissions', 'Student Support', 'Course Info', 'Scheduling', 'Alumni']
  },
  { 
    name: "Telecom", 
    icon: <RadioTower className="w-3.5 h-3.5" />,
    title: "Conversational AI for Telecom",
    description: "Automate support, billing, and plan upgrades at scale",
    image: "/telecom.png",
    solutions: ['Billing', 'Tech Support', 'Upgrades', 'Outages', 'Sales']
  },
  { 
    name: "Logistics", 
    icon: <Truck className="w-3.5 h-3.5" />,
    title: "Conversational AI for Logistics",
    description: "Automate tracking, support, and scheduling at scale",
    image: "/logistics.png",
    solutions: ['Tracking', 'Scheduling', 'Support', 'Quotes', 'Claims']
  },
  { 
    name: "Healthcare", 
    icon: <Stethoscope className="w-3.5 h-3.5" />,
    title: "Connected Patient Journeys Across Healthcare",
    description: "Book appointments, answer patient questions, send reminders, and deliver 24/7 patient support—without increasing administrative workload.",
    image: "/healthcare.png",
    solutions: ['Scheduling', 'Support', 'Reminders', 'Billing', 'Telehealth']
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState("Financial Services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300`}
      >
        <div
          className="relative flex items-center justify-between rounded-full px-6 py-4 transition-all duration-300 bg-white backdrop-blur-xl shadow-sm border border-[rgba(59,130,246,0.1)]"
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 text-2xl font-heading font-extrabold tracking-tight gradient-text"
          >
            <img
              src="/logo.png"
              alt="CrewOS logo"
              className="h-11 w-11 rounded-2xl border border-slate-200 bg-white p-1 object-contain shadow-sm"
            />
            <span>CrewOS</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.label === "Industries") {
                const selectedIndustryData = industriesList.find(i => i.name === activeIndustry) || industriesList[0];
                return (
                  <div key={link.label} className="relative" onMouseLeave={() => setIsIndustriesOpen(false)}>
                    <button 
                      onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                      className={`relative py-4 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${isIndustriesOpen ? 'text-dark-text' : 'text-muted-text hover:text-dark-text'}`}
                    >
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-transform duration-200 ${isIndustriesOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                      <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${isIndustriesOpen ? "w-full" : "w-0"}`}></span>
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-200 transform z-50 ${isIndustriesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                      <div className="w-[700px] bg-white rounded-2xl shadow-xl border border-[rgba(59,130,246,0.1)] flex overflow-hidden">
                        {/* Left Column - Industries List */}
                        <div className="w-[40%] py-4 flex flex-col bg-white relative z-10 border-r border-gray-100">
                          {industriesList.map((industry) => (
                            <button
                              key={industry.name}
                              onClick={() => setActiveIndustry(industry.name)}
                              className={`flex items-center gap-3 px-6 py-2.5 text-left text-sm transition-colors ${activeIndustry === industry.name ? "text-[#008A90] font-medium bg-teal-50/50" : "text-dark-text hover:bg-gray-50"}`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors bg-[#008A90] text-white`}>
                                {industry.icon}
                              </div>
                              {industry.name}
                            </button>
                          ))}
                        </div>
                        
                        {/* Right Column - Details */}
                        <div className="w-[60%] bg-gray-50 p-6 relative">
                          <AnimatePresence mode="wait">
                            <motion.div 
                              key={activeIndustry}
                              initial={{ opacity: 0, x: 5 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -5 }}
                              transition={{ duration: 0.15 }}
                              className="h-full flex flex-col"
                            >
                              <div className="flex gap-4 mb-6">
                                <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-sm bg-gray-200">
                                  <img src={selectedIndustryData.image} alt={activeIndustry} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <h4 className="text-[15px] font-semibold text-dark-text mb-2 leading-tight">{selectedIndustryData.title}</h4>
                                  <p className="text-[13px] text-muted-text leading-relaxed">{selectedIndustryData.description}</p>
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="text-[13px] font-semibold text-dark-text mb-4">Browse Solutions</h5>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                                  {selectedIndustryData.solutions.map(solution => (
                                    <div key={solution} className="flex items-center gap-2 text-[13px] text-muted-text">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                                      {solution}
                                    </div>
                                  ))}
                                </div>
                                <a href="#" className="text-[13px] font-semibold text-dark-text hover:text-accent transition-colors flex items-center gap-1 group/link mt-auto inline-flex">
                                  Browse Solutions 
                                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === "AI Employees") {
                return (
                  <div key={link.label} className="relative" onMouseLeave={() => setIsEmployeesOpen(false)}>
                    <button 
                      onClick={() => setIsEmployeesOpen(!isEmployeesOpen)}
                      className={`relative py-4 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${isEmployeesOpen ? 'text-dark-text' : 'text-muted-text hover:text-dark-text'}`}
                    >
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-transform duration-200 ${isEmployeesOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                      <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${isEmployeesOpen ? "w-full" : "w-0"}`}></span>
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-200 transform z-50 ${isEmployeesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                      <div className="w-64 bg-white rounded-2xl shadow-xl border border-[rgba(59,130,246,0.1)] py-2 flex flex-col">
                        {aiWorkforce.map((employee) => (
                          <a
                            key={employee.role}
                            href="#products"
                            className="flex items-center gap-3 px-6 py-3 text-sm transition-colors text-dark-text hover:bg-gray-50"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#EEF6FF] flex items-center justify-center text-lg flex-shrink-0">
                              {employee.avatar}
                            </div>
                            <div className="font-medium">{employee.role}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-muted-text hover:text-dark-text transition-colors group py-4 flex items-center gap-1"
                >
                  {link.label}
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/get-in-touch">
              <Button
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="hidden md:flex rounded-full px-5"
              >
                Get in touch
              </Button>
            </Link>
            <button
              className="md:hidden p-2 text-dark-text"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-28 px-6 pb-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 text-center text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-dark-text py-2 border-b border-[rgba(59,130,246,0.08)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link href="/get-in-touch" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="primary"
                  size="md"
                  className="mt-4 rounded-full w-full justify-center"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Get in touch
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
