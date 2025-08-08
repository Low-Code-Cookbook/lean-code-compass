import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Coming Soon • Beta Access
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-foreground leading-tight">
            The Low Code
            <br />
            Cookbook
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            As a founder, I learned the hard way that every tech decision compounds. 
            After years of building companies, I created a simple framework to help founders 
            like you make smarter technology choices with AI assistance.
          </p>
          
          <div className="flex justify-center mb-16">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center max-w-md">
              <p className="text-muted-foreground mb-4">
                It's coming soon! To get access, just subscribe to my newsletter.
              </p>
              <Button variant="default" size="lg" className="shadow-medium hover:shadow-large transition-all duration-300" asChild>
                <a href="https://lowcodecto.com/subscribe" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe to Newsletter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;