
import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

export function PortfolioGrid() {
  const projects = PlaceHolderImages.filter(img => img.id.startsWith("project-"));

  const projectDetails = [
    { category: "Web Design", title: "Minimalist Studio" },
    { category: "Branding", title: "Future Forward" },
    { category: "App Development", title: "Health Tracker" },
    { category: "Photography", title: "Urban Spaces" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className="group relative overflow-hidden rounded-2xl bg-muted"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.description}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={project.imageHint}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-white text-black p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                <ExternalLink className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border border-t-0 rounded-b-2xl">
            <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">
              {projectDetails[index % projectDetails.length].category}
            </p>
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
              {projectDetails[index % projectDetails.length].title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
