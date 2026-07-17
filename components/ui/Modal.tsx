"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute inset-0 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClick}
      >
        <div className="relative w-full max-w-5xl m-auto mt-20 sm:mt-auto" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onDismiss}
            className="absolute -top-12 right-0 sm:-right-4 sm:-top-4 z-[110] p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
