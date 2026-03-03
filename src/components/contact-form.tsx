
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send } from "lucide-react";
import { submitContactForm } from "@/app/actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    await submitContactForm(formData);
    
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fadeIn">
        <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
        <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 rounded-full"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            required 
            className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-1"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Your Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="john@example.com" 
            required 
            className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-1"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input 
          id="subject" 
          name="subject" 
          placeholder="How can we help?" 
          required 
          className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-1"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Tell us about your project..." 
          required 
          className="rounded-xl min-h-[150px] bg-muted/30 border-none focus-visible:ring-1"
        />
      </div>
      <Button 
        type="submit" 
        size="lg" 
        disabled={status === "loading"}
        className="w-full rounded-full h-14 text-lg"
      >
        {status === "loading" ? "Sending..." : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
