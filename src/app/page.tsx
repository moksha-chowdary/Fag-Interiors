
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Monitor, Smartphone, Layout, Palette, Code, BarChart } from "lucide-react";

export default function Home() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-image");

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <Section id="about" subtitle="About Us" title="We bring ideas to life through design and technology">
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
              <p className="text-4xl font-bold text-primary mb-2">12+</p>
              <p className="text-sm font-medium text-muted-foreground">Years of experience in digital innovation and creative strategy.</p>
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We started with a simple belief: great design is more than just aesthetics. 
              It's about solving problems, creating connections, and building lasting impressions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we are a multidisciplinary team of designers, developers, and strategists 
              working together to help brands navigate the digital landscape with confidence.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Strategy First</h4>
                <p className="text-sm text-muted-foreground">Every pixel and line of code is backed by deep research.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">User Centric</h4>
                <p className="text-sm text-muted-foreground">We design for humans, ensuring intuitive and delightful experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" subtitle="What We Do" title="Comprehensive digital solutions for modern brands" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Layout, title: "Web Design", desc: "Creating visually stunning and highly functional websites." },
            { icon: Code, title: "Development", desc: "Building robust, scalable applications with modern stacks." },
            { icon: Smartphone, title: "App Design", desc: "Native and cross-platform mobile experiences that engage." },
            { icon: Palette, title: "Branding", desc: "Defining your identity and telling your story to the world." },
            { icon: BarChart, title: "Marketing", desc: "Data-driven strategies to grow your reach and revenue." },
            { icon: Monitor, title: "UX Audit", desc: "Optimizing your existing products for better conversions." },
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

      <Section id="work" subtitle="Selected Work" title="A glimpse into some of our favorite projects">
        <PortfolioGrid />
      </Section>

      <Section id="contact" subtitle="Get In Touch" title="Ready to start your next big project?">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're always looking for new challenges and interesting people to work with. 
              Drop us a line and let's create something extraordinary together.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Call Us</p>
                <p className="text-2xl font-semibold">+1 (555) 000-1234</p>
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Email Us</p>
                <p className="text-2xl font-semibold">hello@presence.studio</p>
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Studio</p>
                <p className="text-2xl font-semibold">123 Creative Lane,<br />Digital Valley, CA 94043</p>
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
