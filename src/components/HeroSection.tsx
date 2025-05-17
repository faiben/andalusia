
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      <div className="container text-center px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            <span className="text-andalus-gold">Khalid & Siraj</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white">
            A tale of courage, resilience, and justice in 9th-century Al-Andalus
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
            <Button 
              size="lg" 
              className="bg-andalus-gold hover:bg-andalus-gold/80 text-black font-bold text-lg"
              onClick={() => document.getElementById('donate')?.scrollIntoView({behavior: 'smooth'})}
            >
              Support This Film
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-bold text-lg"
              onClick={() => document.getElementById('story')?.scrollIntoView({behavior: 'smooth'})}
            >
              Learn More
            </Button>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center text-white">
              <span className="text-andalus-gold font-bold mr-2">$0</span>
              <span className="text-sm opacity-80">raised of $500,000 goal</span>
            </div>
            <div className="flex items-center text-white">
              <span className="text-andalus-gold font-bold mr-2">0</span>
              <span className="text-sm opacity-80">backers</span>
            </div>
            <div className="flex items-center text-white">
              <span className="text-andalus-gold font-bold mr-2">60</span>
              <span className="text-sm opacity-80">days to go</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
