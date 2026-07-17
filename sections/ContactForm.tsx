"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Add the Web3Forms access key
    formData.append("access_key", "a578172d-18e0-41dd-b6bd-ef138188a1bd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-20 max-w-4xl mx-auto w-full">
        <div className="rounded-[32px] bg-gradient-to-br from-[#061819] to-[#010e0f] p-12 shadow-2xl relative overflow-hidden border border-teal-900/30 text-center">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Thank you for reaching out!
          </h3>
          <p className="text-lg text-gray-300">
            We've received your query and will get back to you at your business email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 max-w-5xl mx-auto w-full">
      <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark-text text-center mb-10 leading-tight">
        Ready to scale <span className="text-teal-500">outcomes</span> across your business?
      </h3>

      <div className="rounded-[32px] bg-gradient-to-br from-[#061819] to-[#010e0f] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-teal-900/30">
        {/* Starry background effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: '12px 12px' }}></div>
        
        {/* Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <form className="relative z-10 flex flex-col gap-6 text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Full Name<span className="text-red-500">*</span></label>
              <input type="text" name="name" placeholder="e.g. John Smith" required className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all border-none" />
            </div>

            {/* Organisation */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Organisation<span className="text-red-500">*</span></label>
              <input type="text" name="organisation" placeholder="e.g. ABC Private Limited" required className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all border-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Business Email<span className="text-red-500">*</span></label>
              <input type="email" name="email" placeholder="e.g. @company.com" required className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all border-none" />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">Contact Number</label>
              <input type="tel" name="phone" placeholder="e.g. +91 9876543210" className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all border-none" />
            </div>
          </div>

          {/* Use Case */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Use Case<span className="text-red-500">*</span></label>
            <select name="use_case" defaultValue="" required className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all border-none appearance-none">
              <option value="" disabled className="text-gray-400">Select use case</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Sales & Lead Generation">Sales & Lead Generation</option>
              <option value="HR & Recruiting">HR & Recruiting</option>
              <option value="Other">Other</option>
            </select>
            {/* Custom chevron for select */}
            <div className="pointer-events-none absolute right-4 bottom-3 text-gray-500" style={{ transform: 'translateY(-15px)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 10 12 15 17 10"></polyline></svg>
            </div>
          </div>

          {/* Monthly Volume */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Monthly Volume for your Use Case<span className="text-red-500">*</span></label>
            <input type="text" name="volume" placeholder="e.g. 150 agents · 50K chats · 75K calls · 50K emails/month" required className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all border-none" />
          </div>

          {/* Additional Info */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Additional Info</label>
            <textarea name="message" rows={4} placeholder="A few lines on what you're solving for - channels, current stack, gaps. The more you share, the sharper our first conversation." className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all border-none resize-none"></textarea>
          </div>

          {status === "error" && (
            <div className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</div>
          )}

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button type="submit" disabled={status === "submitting"} className="bg-[#008A90] hover:bg-teal-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium px-10 py-3.5 rounded-full shadow-lg shadow-teal-900/50 transition-all hover:-translate-y-1">
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
