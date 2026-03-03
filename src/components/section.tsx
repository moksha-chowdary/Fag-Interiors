
"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, title, subtitle, children, className, dark }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        "py-24 px-6 transition-colors duration-500",
        dark ? "bg-black text-white" : "bg-white text-foreground",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 reveal-on-scroll">
            {subtitle && (
              <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {title}
              </h2>
            )}
            <div className="w-12 h-1 bg-primary mt-6 rounded-full" />
          </div>
        )}
        <div className="reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
          {children}
        </div>
      </div>
    </section>
  );
}
