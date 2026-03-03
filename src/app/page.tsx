import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Home, Lamp, Sofa, Ruler, Paintbrush, Building2 } from "lucide-react";

export default function HomePage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-image");

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <Section id="about" subtitle="Our Vision" title="We transform houses into homes and spaces into experiences">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl">
            {aboutImg && (
              <Image
                src={aboutImg.imageUrl}
                alt={aboutImg.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImg.imageHint}
              />
            )}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-8 rounded-3xl shadow-lg max-w-xs hidden sm:block">
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-sm font-medium text-muted-foreground">Bespoke interiors designed for families and businesses across the globe.</p>
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that where you live shapes how you feel. Our approach to interior design 
              is deeply personal, blending your lifestyle with our expertise in spatial harmony.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From historic renovations to modern minimalist lofts, our team handles every 
              detail—from floor plans to the final selection of art and accessories.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Bespoke Craft</h4>
                <p className="text-sm text-muted-foreground">Custom furniture and unique finishes tailored to your specific needs.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Timeless Style</h4>
                <p className="text-sm text-muted-foreground">Designs that transcend trends, focusing on quality and enduring elegance.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" subtitle="Design Services" title="Curating environments for inspired living" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Home, title: "Residential", desc: "Full-service interior design for homes, apartments, and private estates." },
            { icon: Building2, title: "Commercial", desc: "Elevating boutique offices, retail spaces, and hospitality venues." },
            { icon: Ruler, title: "Space Planning", desc: "Optimizing layouts for functionality, flow, and maximum comfort." },
            { icon: Sofa, title: "Furniture Curation", desc: "Sourcing and styling unique pieces that reflect your personality." },
            { icon: Paintbrush, title: "Color & Finish", desc: "Curating palettes and materials that set the perfect mood." },
            { icon: Lamp, title: "Lighting Design", desc: "Creating atmospheric lighting plans that highlight architectural beauty." },
          ].map((service, i) => (
            <div key={i} className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="work" subtitle="Portfolio" title="A collection of curated sanctuaries">
        <PortfolioGrid />
      </Section>

      <Section id="contact" subtitle="Start Your Project" title="Ready to transform your space?">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're currently accepting new residential and commercial projects. 
              Tell us about your space and let's begin the journey of creation.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Studio Line</p>
                <p className="text-2xl font-semibold">+1 (555) 789-4321</p>
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Inquiries</p>
                <p className="text-2xl font-semibold">design@presence.interiors</p>
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Visit Our Showroom</p>
                <p className="text-2xl font-semibold">456 Artisan Way,<br />Design District, NY 10013</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white border rounded-[40px] p-8 md:p-12 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
