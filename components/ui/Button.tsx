"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  icon,
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white shadow-[0_8px_30px_rgba(59,130,246,0.25)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-white text-[#0F172A] border border-[rgba(59,130,246,0.15)] shadow-[0_4px_20px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:border-[rgba(59,130,246,0.25)] hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[rgba(59,130,246,0.05)]",
    outline:
      "bg-transparent text-[#3B82F6] border border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 hover:border-[#3B82F6]/50 hover:scale-[1.02] active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const content = (
    <>
      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-white/10 to-transparent" />
      {/* Ripple target */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={btnRef}
      className={`group ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
