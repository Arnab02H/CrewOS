"use client";

import { useRef } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

export function useScrollReveal(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
    ...options,
  });

  return { ref, isInView };
}
