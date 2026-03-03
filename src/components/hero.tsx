"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 animate-fadeIn">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
            Bespoke Luxury Interiors
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground">
            Designing <br />
            <span className="text-primary italic font-serif">Timeless Indian Luxury Spaces</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed font-medium">
            From bespoke residences to refined commercial interiors, we craft spaces that balance elegance, comfort, and cultural sophistication.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-10 h-16 text-lg hover:bg-accent transition-all">
              Our Process
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-square lg:aspect-auto lg:h-[750px] w-full animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-3 transition-transform hover:rotate-0 duration-1000" />
          <div className="relative h-full w-full overflow-hidden rounded-[40px] shadow-2xl border-8 border-white">
            {heroImg && (
              <Image
                src={heroImg.imageUrl}
                alt={heroImg.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImg.imageHint}
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Subtle Gradient Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}