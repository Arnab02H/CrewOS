"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productShowcaseTabs } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(productShowcaseTabs[0]);

  return (
    <SectionWrapper className="py-24 lg:py-32 bg-secondary-bg">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge className="mb-4">Product</Badge>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          One Platform, Infinite Capabilities
        </h2>
        <p className="text-lg text-muted-text">
          Everything you need to manage your AI workforce from a single, beautiful dashboard.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="rounded-[24px] bg-[#0F172A] p-2 shadow-2xl overflow-hidden border border-gray-800">
          {/* Top Bar */}
          <div className="h-12 bg-[#1E293B] rounded-t-[20px] flex items-center px-4 relative">
            <div className="flex gap-2 absolute left-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto bg-[#0F172A] rounded-full px-6 py-1.5 text-xs text-gray-400 font-medium font-mono border border-gray-700/50">
              app.crewos.ai/dashboard
            </div>
          </div>

          {/* Tab Bar */}
          <div className="flex gap-2 px-4 py-3 bg-[#1E293B] overflow-x-auto no-scrollbar border-b border-gray-800">
            {productShowcaseTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-sm transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#60A5FA]/20 text-[#60A5FA] font-medium"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="min-h-[450px] bg-[#0F172A] rounded-b-[20px] p-6 md:p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {activeTab === "Dashboard" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Total Employees", value: "12", trend: "+2" },
                        { label: "Tasks Today", value: "847", trend: "+12%" },
                        { label: "Efficiency", value: "98.2%", trend: "+1.1%" },
                        { label: "Active Workflows", value: "24", trend: "+4" },
                      ].map((stat, i) => (
                         <div key={i} className="bg-[#1E293B] rounded-xl p-4 border border-gray-800">
                           <div className="text-gray-400 text-xs mb-2">{stat.label}</div>
                           <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                           <div className="text-emerald-400 text-xs flex items-center gap-1">
                             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                             {stat.trend}
                           </div>
                         </div>
                      ))}
                    </div>
                    <div className="bg-[#1E293B] rounded-xl p-6 border border-gray-800 h-64 flex flex-col justify-between">
                      <div className="text-sm font-medium text-gray-300">Activity Overview</div>
                      <svg className="w-full h-40" preserveAspectRatio="none" viewBox="0 0 100 40">
                         <path d="M0,40 L0,30 L10,32 L20,25 L30,28 L40,15 L50,18 L60,10 L70,12 L80,5 L90,8 L100,2 L100,40 Z" fill="url(#blue-grad)" opacity="0.2"/>
                         <path d="M0,30 L10,32 L20,25 L30,28 L40,15 L50,18 L60,10 L70,12 L80,5 L90,8 L100,2" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
                         <defs>
                           <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="0%" stopColor="#60A5FA"/>
                             <stop offset="100%" stopColor="transparent"/>
                           </linearGradient>
                         </defs>
                      </svg>
                    </div>
                  </div>
                )}
                {activeTab === "Analytics" && (
                   <div className="flex flex-col h-full gap-6">
                     <div className="bg-[#1E293B] rounded-xl p-6 border border-gray-800 h-full flex items-end justify-between gap-2">
                       {Array.from({length: 20}).map((_, i) => (
                         <div key={i} className="w-full bg-blue-500/20 rounded-t-sm relative hover:bg-blue-500/40 transition-colors" style={{height: `${Math.random() * 80 + 20}%`}}>
                            <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm" style={{height: `${Math.random() * 50 + 20}%`}}></div>
                         </div>
                       ))}
                     </div>
                   </div>
                )}
                {activeTab === "Conversations" && (
                  <div className="flex flex-col gap-4 max-w-2xl mx-auto h-full justify-center">
                    <div className="self-start bg-[#1E293B] text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] border border-gray-800">
                      Can you analyze the Q3 marketing data and prepare a summary report?
                    </div>
                    <div className="self-end bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      I've analyzed the Q3 data. Our CAC decreased by 14% while conversion rates improved by 2.1%. I've compiled a full slide deck and saved it to the shared drive. Would you like me to email it to the team?
                    </div>
                    <div className="self-start bg-[#1E293B] text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] border border-gray-800">
                      Yes, please send it to the exec channel.
                    </div>
                  </div>
                )}
                {activeTab === "Employees" && (
                  <div className="space-y-3">
                    {[
                      { name: "Sarah", role: "AI SDR", status: "Active", tasks: 124 },
                      { name: "Marcus", role: "AI Recruiter", status: "Active", tasks: 45 },
                      { name: "Elena", role: "AI Support", status: "Active", tasks: 312 },
                      { name: "David", role: "AI Accountant", status: "Idle", tasks: 18 }
                    ].map((emp, i) => (
                      <div key={i} className="bg-[#1E293B] rounded-xl p-4 border border-gray-800 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                             {emp.name[0]}
                           </div>
                           <div>
                             <div className="text-white font-medium">{emp.name}</div>
                             <div className="text-gray-400 text-xs">{emp.role}</div>
                           </div>
                         </div>
                         <div className="flex items-center gap-8">
                           <div className="text-right hidden md:block">
                             <div className="text-white font-medium">{emp.tasks}</div>
                             <div className="text-gray-400 text-xs">Tasks Today</div>
                           </div>
                           <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${emp.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-500'}`}></div>
                             <span className="text-gray-300 text-sm">{emp.status}</span>
                           </div>
                         </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "Workflows" && (
                  <div className="h-full flex items-center justify-center relative">
                    <div className="flex items-center gap-8">
                       <div className="bg-[#1E293B] p-4 rounded-xl border border-gray-700 w-32 text-center z-10 text-gray-300 text-sm">Trigger: Email</div>
                       <div className="w-16 h-0.5 bg-blue-500/50"></div>
                       <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-xl border border-blue-400 w-32 text-center z-10 text-white font-medium text-sm">AI Agent</div>
                       <div className="w-16 h-0.5 bg-blue-500/50"></div>
                       <div className="flex flex-col gap-4 z-10">
                         <div className="bg-[#1E293B] p-3 rounded-xl border border-gray-700 w-32 text-center text-gray-300 text-xs">Update CRM</div>
                         <div className="bg-[#1E293B] p-3 rounded-xl border border-gray-700 w-32 text-center text-gray-300 text-xs">Send Slack Alert</div>
                       </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
