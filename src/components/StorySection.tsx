
import React from 'react';
import { Card } from '@/components/ui/card';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">The Story</h2>
          
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              In the vibrant yet turbulent 9th-century Al-Andalus, <strong>Khalid & Siraj</strong> follows a young warrior who uncovers a treacherous conspiracy to overthrow Emir Abd ar-Rahman II, masterminded by Musa ibn Musa of the Banu Qasi and Íñigo Arista of Navarre.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-andalus-cream shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-andalus-navy">Historical Significance</h3>
                <p>
                  Set in Cordoba, the "Jewel of Europe" and one of the most advanced cities during this time, our film showcases a center of culture and learning that shaped European history.
                </p>
              </Card>
              
              <Card className="p-6 bg-andalus-cream shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-andalus-navy">A Forgotten Chapter</h3>
                <p>
                  As Viking raiders unleash chaos across the southern cities of Cadiz and Seville, our hero must navigate political betrayal, brutal warfare, and personal sacrifice to save his homeland.
                </p>
              </Card>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-4 text-andalus-navy">Why This Story Matters</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-andalus-gold rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Muslim Heroes - Inspiration</h4>
                  <p>We want Muslim youth to be inspired by heroes who demonstrate values and behaviors worth striving for. These heroes serve as role models, showing it's possible to overcome adversity and make a positive impact.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-andalus-gold rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Excellence and Achievement</h4>
                  <p>It's not just about looking to heroes for inspiration. Muslim youth should remember their rich history of excellence and achievement, recognizing their potential to do great things, just as their ancestors did.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-andalus-gold rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Bridging Cultures</h4>
                  <p>Al-Andalus was a place where different cultures and religions coexisted and created something greater than the sum of their parts. This story highlights the importance of unity, understanding, and cooperation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
