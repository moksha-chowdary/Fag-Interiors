import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tight mb-6 block">
              PRESENCE<span className="text-primary italic">.</span>INTERIORS
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              A boutique interior design studio dedicated to creating 
              sophisticated, functional, and soulful living environments.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="p-3 bg-white/5 rounded-full hover:bg-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Residential Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Commercial Interiors</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Project Management</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Custom Furnishings</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© 2024 Presence Interiors. All rights reserved.</p>
          <p>Designing for a well-lived life.</p>
        </div>
      </div>
    </footer>
  );
}
