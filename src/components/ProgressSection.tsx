
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const ProgressSection: React.FC = () => {
  // In a real application, these would come from your fundraising platform API
  const goalAmount = 500000;
  const raisedAmount = 0;
  const progress = (raisedAmount / goalAmount) * 100;
  const backers = 0;
  const daysLeft = 60;
  
  const milestones = [
    { amount: 100000, title: "Pre-production", description: "Script development, location scouting, and casting" },
    { amount: 250000, title: "Production", description: "Filming in authentic locations with period-accurate costumes and sets" },
    { amount: 400000, title: "Post-production", description: "Editing, visual effects, and music composition" },
    { amount: 500000, title: "Distribution", description: "Festival submissions and distribution strategy" },
  ];

  return (
    <section id="progress" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Our Progress</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex justify-between mb-2 items-end">
              <span className="text-4xl md:text-6xl font-bold text-andalus-navy">${raisedAmount.toLocaleString()}</span>
              <span className="text-gray-500">of ${goalAmount.toLocaleString()}</span>
            </div>
            
            <Progress value={progress} className="h-4 mb-4" />
            
            <div className="flex justify-between text-gray-600 items-center">
              <span className="font-medium">{progress.toFixed(1)}% Complete</span>
              <span className="font-medium">${(goalAmount - raisedAmount).toLocaleString()} to go</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-andalus-cream rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-andalus-navy">{backers}</div>
              <div className="text-gray-600">Backers</div>
            </div>
            <div className="bg-andalus-cream rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-andalus-navy">${raisedAmount.toLocaleString()}</div>
              <div className="text-gray-600">Raised</div>
            </div>
            <div className="bg-andalus-cream rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-andalus-navy">{daysLeft}</div>
              <div className="text-gray-600">Days Left</div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Funding Milestones</h3>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="font-bold text-lg">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="font-bold text-andalus-navy">${milestone.amount.toLocaleString()}</span>
                    <Progress 
                      value={Math.min(100, (raisedAmount / milestone.amount) * 100)} 
                      className="h-2 w-24 mt-1" 
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              Every contribution brings us closer to sharing this important story with the world. 
              Help us reach our next milestone!
            </p>
            <div 
              className="bg-andalus-gold text-black py-2 px-4 rounded-md font-bold cursor-pointer inline-block hover:bg-andalus-gold/90"
              onClick={() => document.getElementById('donate')?.scrollIntoView({behavior: 'smooth'})}
            >
              Support This Film
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
