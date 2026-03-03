import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="text-3xl font-bold tracking-tight block">
              PRESENCE<span className="text-primary italic">.</span>INTERIORS
            </Link>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              A bespoke interior design studio dedicated to creating 
              sophisticated, soulful living environments that celebrate Indian heritage and modern luxury.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="p-3 bg-white/5 rounded-full hover:bg-primary transition-all hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5 text-white" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-primary uppercase tracking-widest">Our Studio</h4>
            <ul className="space-y-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span>Plot 12, Design Avenue,<br />Vijayawada, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>design@presence.interiors</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-primary uppercase tracking-widest">Region</h4>
            <p className="text-muted-foreground leading-relaxed">
              Available for projects across Andhra Pradesh & Telangana.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h5 className="font-semibold text-sm mb-4">Quick Links</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#work" className="hover:text-primary transition-colors">Featured Portfolio</Link></li>
                <li><Link href="#about" className="hover:text-primary transition-colors">Our Design Philosophy</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Book a Consultation</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm gap-4">
          <p>© 2024 Presence Interiors. All rights reserved.</p>
          <p className="font-medium">Crafting Legacies Through Design.</p>
        </div>
      </div>
    </footer>
  );
}