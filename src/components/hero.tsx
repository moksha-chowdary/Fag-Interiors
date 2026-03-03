"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 animate-fadeIn">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
            Interior Design Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Elevating the <br />
            <span className="text-primary italic">Art of Living</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            We create timeless environments that reflect your lifestyle. 
            From concept to curation, we design spaces that inspire every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg">
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-lg">
              Our Process
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-square lg:aspect-auto lg:h-[700px] w-full animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-3 transition-transform hover:rotate-0 duration-700" />
          <div className="relative h-full w-full overflow-hidden rounded-[40px] shadow-2xl">
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
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
