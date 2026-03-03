
import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tight mb-6 block">
              PRESENCE<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              A modern digital studio dedicated to pushing the boundaries 
              of design and technology. Building experiences that matter.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
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
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© 2024 Presence. All rights reserved.</p>
          <p>Handcrafted with passion.</p>
        </div>
      </div>
    </footer>
  );
}
