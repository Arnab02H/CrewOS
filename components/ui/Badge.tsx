"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "info";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-[#EEF6FF] text-[#3B82F6] border-[rgba(59,130,246,0.15)]",
    success:
      "bg-emerald-50 text-emerald-600 border-emerald-200/50",
    info:
      "bg-violet-50 text-violet-600 border-violet-200/50",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
