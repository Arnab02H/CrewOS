"use client";

import { motion } from "framer-motion";
import { 
  PhoneCall, Database, Calendar, Folder, Cloud, 
  Filter, Phone, RefreshCcw, ClipboardCheck, 
  BrainCircuit, Mail, MessageSquare, Sheet, FileText
} from "lucide-react";

export const AIReceptionistSystem = () => {
  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="bg-gradient-to-br from-sky-200 via-sky-100 to-sky-300 rounded-[2rem] p-6 lg:p-8 text-sky-950 relative shadow-2xl border border-sky-400/50 overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative z-10 flex flex-col gap-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="bg-white border border-sky-200 text-sky-700 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9] animate-pulse"></span>
                CrewOS | Hire AI Employee
              </div>
              <div className="text-sky-600/60 text-xs font-bold tracking-[0.2em] uppercase">
                24/7 CALL HANDLING
              </div>
            </div>

            {/* Use Cases Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {["Receptionist", "Data Analyst", "HR", "Model Developer"].map((pill, i) => (
                <div key={i} className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${i === 0 ? 'bg-white border-sky-300 text-sky-700 shadow-sm' : 'bg-transparent border-sky-300/50 text-sky-700/60 hover:bg-white/40 hover:text-sky-800'}`}>
                  {pill}
                </div>
              ))}
            </div>

            {/* Main Visual Area */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center py-4">
              
              {/* 1. Inputs Container */}
              <div className="relative flex justify-center items-center h-[280px] w-full">
                 
                 {/* The dashed line (NOT clipped) */}
                 <div className="absolute top-1/2 left-1/2 w-[200%] h-px hidden lg:block -z-10">
                    <div className="w-full border-t border-dashed border-sky-300 absolute top-1/2 -translate-y-1/2"></div>
                    {/* Arrow head */}
                    <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-sky-300"></div>
                    
                    {/* Animated Data Packets */}
                    {[
                      Mail, Calendar, Database, PhoneCall, 
                      MessageSquare, Folder, Sheet, FileText
                    ].map((Icon, idx) => (
                      <motion.div 
                        key={idx}
                        animate={{ left: ["10%", "90%"], opacity: [0, 1, 1, 0] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: idx * 1.5 
                        }}
                        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white border border-sky-200 text-sky-600 flex items-center justify-center shadow-[0_4px_15px_rgba(14,165,233,0.15)] z-10"
                      >
                         <Icon size={14} />
                      </motion.div>
                    ))}
                 </div>

                 {/* The scrolling columns (CLIPPED vertically) */}
                 <div className="relative flex gap-4 h-full w-full justify-center overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] z-10 pt-2">
                    
                    {/* Column 1 */}
                    <motion.div 
                      animate={{ y: ["-50%", "0%"] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col gap-4"
                    >
                      {[Mail, MessageSquare, FileText, Folder, PhoneCall, Mail, MessageSquare, FileText, Folder, PhoneCall].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-xl bg-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-[0_4px_15px_rgba(14,165,233,0.1)] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                          <Icon size={18} />
                        </div>
                      ))}
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div 
                      animate={{ y: ["-50%", "0%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col gap-4 mt-8"
                    >
                      {[Calendar, Sheet, Database, Cloud, Phone, Calendar, Sheet, Database, Cloud, Phone].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-xl bg-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-[0_4px_15px_rgba(14,165,233,0.1)] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                          <Icon size={18} />
                        </div>
                      ))}
                    </motion.div>
                 </div>
              </div>

              {/* 2. Brain */}
              <div className="flex justify-center relative">
                {/* Connecting Line to Flywheel */}
                <div className="absolute top-1/2 left-1/2 w-[150%] border-t border-dashed border-sky-300 hidden lg:block -z-10" />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-40 h-80 rounded-[2rem] border border-sky-200 bg-gradient-to-b from-white/90 to-sky-50/80 flex flex-col items-center justify-between p-4 relative overflow-hidden shadow-[0_8px_30px_rgba(14,165,233,0.15)] z-10 backdrop-blur-md"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
                  
                  {/* Voice Waveform Animation */}
                  <div className="flex-1 w-full flex items-center justify-center gap-2 relative">
                     {[0.8, 1.2, 0.9, 1.5, 1.1, 0.7].map((duration, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: ["16px", "64px", "16px"] }}
                          transition={{ duration: duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                          className="w-2 rounded-full bg-sky-500"
                          style={{
                            boxShadow: '0 0 15px rgba(14,165,233,0.4)'
                          }}
                        />
                     ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sky-700 text-sm font-medium z-10 bg-white/90 px-4 py-2 rounded-full backdrop-blur-md border border-sky-200 shadow-sm">
                    <BrainCircuit size={18} />
                    <span>Processing Intent</span>
                  </div>
                </motion.div>
              </div>

              {/* 3. Flywheel */}
              <div className="lg:col-span-2 relative flex items-center justify-center h-[300px]">
                 {/* Connecting Line to Outcomes */}
                 <div className="absolute top-1/2 left-1/2 w-[150%] border-t border-dashed border-sky-300 hidden lg:block -z-10" />

                 {/* Flywheel Path */}
                 <div className="absolute w-[240px] h-[240px] border-2 border-dashed border-sky-300 rounded-full scale-x-[1.2] scale-y-[0.7]" />
                 
                 {/* Center Text */}
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-sky-700 text-sm font-semibold z-10 text-center bg-white px-4 py-2 rounded-full border border-sky-200 shadow-[0_4px_20px_rgba(14,165,233,0.15)]"
                 >
                    Call Handling<br/>Workflow
                 </motion.div>

                 {/* Nodes */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[240px] h-[240px] scale-x-[1.2] scale-y-[0.7]"
                    >
                      {/* Top Node */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="flex flex-col items-center gap-2"
                        >
                          <span className="text-[10px] font-medium text-sky-800/80 whitespace-nowrap mb-1">Intent Qualifier</span>
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-sky-300 text-sky-600 flex items-center justify-center shadow-[0_4px_15px_rgba(14,165,233,0.1)] hover:bg-sky-50 transition-colors cursor-pointer">
                            <Filter size={16} />
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Node */}
                      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-sky-300 text-sky-600 flex items-center justify-center shadow-[0_4px_15px_rgba(14,165,233,0.1)] hover:bg-sky-50 transition-colors cursor-pointer">
                            <Phone size={16} />
                          </div>
                          <span className="text-[10px] font-medium text-sky-800/80 whitespace-nowrap mt-1">Caller</span>
                        </motion.div>
                      </div>

                      {/* Bottom Node */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto">
                        <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-sky-300 text-sky-600 flex items-center justify-center shadow-[0_4px_15px_rgba(14,165,233,0.1)] hover:bg-sky-50 transition-colors cursor-pointer">
                            <RefreshCcw size={16} />
                          </div>
                          <span className="text-[10px] font-medium text-sky-800/80 whitespace-nowrap mt-1">Follow-up</span>
                        </motion.div>
                      </div>

                      {/* Left Node */}
                      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="flex flex-col items-center gap-2"
                        >
                          <span className="text-[10px] font-medium text-sky-800/80 whitespace-nowrap mb-1">Call Analyzer</span>
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-sky-300 text-sky-600 flex items-center justify-center shadow-[0_4px_15px_rgba(14,165,233,0.1)] hover:bg-sky-50 transition-colors cursor-pointer">
                            <ClipboardCheck size={16} />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                 </div>
              </div>

              {/* 4. Outcomes */}
              <div className="flex flex-col justify-center pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-sky-200 h-full pt-4 lg:pt-0 z-10 relative bg-transparent">
                <h3 className="text-sky-600 font-semibold text-sm mb-6 tracking-wide">OUTCOMES</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 sm:gap-4 lg:gap-6 text-center lg:text-left mt-4 lg:mt-0">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="text-sky-700/70 text-xs sm:text-sm lg:text-xs mb-1">Missed Calls</div>
                    <div className="text-sky-950 font-bold text-3xl sm:text-2xl lg:text-3xl flex items-center justify-center lg:justify-start gap-2">
                      <span className="text-sky-500 text-xl sm:text-lg lg:text-xl">↓</span> 100%
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-sky-700/70 text-xs sm:text-sm lg:text-xs mb-1">Booking rate</div>
                    <div className="text-sky-950 font-bold text-3xl sm:text-2xl lg:text-3xl flex items-center justify-center lg:justify-start gap-2">
                      <span className="text-sky-500 text-xl sm:text-lg lg:text-xl">↑</span> 45%
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-sky-700/70 text-xs sm:text-sm lg:text-xs mb-1">Avg wait time</div>
                    <div className="text-sky-950 font-bold text-3xl sm:text-2xl lg:text-3xl flex items-center justify-center lg:justify-start gap-2">
                      <span className="text-sky-500 text-xl sm:text-lg lg:text-xl">↓</span> 98%
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>

            {/* Bottom Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-sky-200 relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h4 className="text-sky-700 font-semibold text-sm mb-3">Reception Inputs</h4>
                <p className="text-sky-800/70 text-sm leading-relaxed">Phone lines, CRM, calendars, and your business phone number.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h4 className="text-sky-700 font-semibold text-sm mb-3">Knowledge Base</h4>
                <p className="text-sky-800/70 text-sm leading-relaxed">Learns from your business FAQs and scheduling rules seamlessly.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h4 className="text-sky-700 font-semibold text-sm mb-3">Receptionist Flywheel</h4>
                <p className="text-sky-800/70 text-sm leading-relaxed">Specialist sub-agents, handling booking, routing, and answering in sync.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h4 className="text-sky-700 font-semibold text-sm mb-3">Business Impact</h4>
                <p className="text-sky-800/70 text-sm leading-relaxed">More appointments booked, zero missed calls, tracked in real-time.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
