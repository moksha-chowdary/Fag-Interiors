import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Home, Lamp, Sofa, Ruler, Paintbrush, Building2 } from "lucide-react";

export default function HomePage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-image");

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      
      <Section id="about" subtitle="Our Vision" title="We harmonize cultural heritage with modern spatial luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl group">
            {aboutImg && (
              <Image
                src={aboutImg.imageUrl}
                alt={aboutImg.description}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint={aboutImg.imageHint}
              />
            )}
            <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-md p-10 rounded-[32px] shadow-xl max-w-xs hidden sm:block border border-primary/10">
              <p className="text-5xl font-bold text-primary mb-3">250+</p>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Luxury Homes Delivered across South India.</p>
            </div>
          </div>
          <div className="space-y-10">
            <p className="text-2xl text-foreground font-medium leading-relaxed">
              At Presence Interiors, we believe that high-end design should be an extension of one's identity. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Vijayawada, our studio specializes in "Timeless Indian Luxury"—a philosophy that blends local craftsmanship, rich material palettes, and architectural precision. We transform vast spaces into intimate, soulful sanctuaries.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-primary/10">
              <div className="space-y-3">
                <h4 className="font-bold text-xl text-foreground">Bespoke Finishes</h4>
                <p className="text-sm text-muted-foreground">Handpicked marbles, custom woodwork, and artisanal textures unique to every project.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-xl text-foreground">Refined Elegance</h4>
                <p className="text-sm text-muted-foreground">Sophisticated environments that balance traditional warmth with global aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" subtitle="Curation Services" title="Elevating Environments for Inspired Living" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: Home, title: "Luxury Residential", desc: "Holistic design for private villas, estates, and high-end apartments." },
            { icon: Building2, title: "Boutique Commercial", desc: "Refined workspaces and hospitality venues that resonate with brand identity." },
            { icon: Ruler, title: "Architectural Planning", desc: "Expert space optimization focusing on flow, light, and natural ventilation." },
            { icon: Sofa, title: "Curated Furnishings", desc: "Global sourcing and custom-designed furniture that defines luxury." },
            { icon: Paintbrush, title: "Material Palette", desc: "Expertly curated finishes from Italian marbles to traditional Indian stone." },
            { icon: Lamp, title: "Ambient Lighting", desc: "Atmospheric lighting systems that enhance architectural details and mood." },
          ].map((service, i) => (
            <div key={i} className="p-12 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-5">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="work" subtitle="Portfolio" title="A Collection of Curated Sanctuaries">
        <PortfolioGrid />
      </Section>

      <Section id="contact" subtitle="Start Your Project" title="Ready to Begin Your Design Journey?">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2 space-y-10">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are currently accepting inquiries for large-scale residential and commercial projects. 
              Let's create a space that reflects your legacy.
            </p>
            <div className="space-y-8">
              <div className="group">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Studio Inquiry</p>
                <p className="text-3xl font-semibold hover:text-primary transition-colors">+91 98765 43210</p>
              </div>
              <div className="group">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Showroom Address</p>
                <p className="text-2xl font-semibold leading-snug">Plot 12, Design Avenue,<br />Vijayawada, AP 520001</p>
              </div>
              <div className="pt-6">
                <p className="text-sm font-medium text-muted-foreground italic">Available for projects across AP & Telangana.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white border border-primary/10 rounded-[48px] p-10 md:p-16 shadow-xl shadow-primary/5">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}