"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useRelativeMousePosition } from "@/hooks/useMousePosition";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  tilt = true,
  glow = false,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouse = useRelativeMousePosition(cardRef);

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-[24px] bg-white/70 backdrop-blur-xl border border-[rgba(59,130,246,0.08)] shadow-[0_10px_40px_rgba(59,130,246,0.08)] overflow-hidden ${className}`}
      style={
        tilt
          ? {
              transform: `perspective(1000px) rotateY(${mouse.x * 5}deg) rotateX(${-mouse.y * 5}deg)`,
              transition: "transform 0.15s ease-out",
            }
          : undefined
      }
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: "0 20px 60px rgba(59,130,246,0.12)",
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      {/* Gradient glow on hover */}
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover-parent:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${(mouse.x + 0.5) * 100}% ${(mouse.y + 0.5) * 100}%, rgba(96,165,250,0.08), transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
