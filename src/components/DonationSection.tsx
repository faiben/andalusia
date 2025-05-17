
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

type DonationTier = {
  id: string;
  amount: number;
  title: string;
  description: string;
  perks: string[];
  popular?: boolean;
};

const tiers: DonationTier[] = [
  {
    id: 'supporter',
    amount: 25,
    title: 'Supporter',
    description: 'Show your support for Islamic historical cinema',
    perks: ['Digital thank you card', 'Name in credits']
  },
  {
    id: 'friend',
    amount: 100,
    title: 'Friend of Al-Andalus',
    description: 'Help bring 9th century Cordoba to life',
    perks: ['Digital thank you card', 'Name in credits', 'Digital wallpaper set', 'Early access to trailer']
  },
  {
    id: 'patron',
    amount: 500,
    title: 'Film Patron',
    description: 'Make a significant contribution to our production',
    perks: ['Digital thank you card', 'Name in credits', 'Digital wallpaper set', 'Early access to trailer', 'Digital script', 'Digital artbook'],
    popular: true
  },
  {
    id: 'producer',
    amount: 2500,
    title: 'Associate Producer',
    description: 'Become officially associated with our production',
    perks: ['Digital thank you card', 'Name in credits as Associate Producer', 'Digital wallpaper set', 'Early access to trailer', 'Digital script', 'Digital artbook', 'Invitation to virtual set tour', 'One-on-one call with director']
  }
];

const DonationSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('patron');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleDonation = () => {
    // In a real implementation, this would connect to a payment processor
    toast.success('Thank you for your support! Redirecting to payment...', {
      description: 'You will be redirected to complete your donation.',
    });
  };

  return (
    <section id="donate" className="py-20 bg-andalus-cream">
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Support This Film</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Your contribution will help bring the rich history of Al-Andalus to screens worldwide, 
          inspiring a new generation with tales of courage and excellence.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="tiers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="tiers">Donation Tiers</TabsTrigger>
              <TabsTrigger value="custom">Custom Amount</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tiers" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {tiers.map((tier) => (
                  <Card 
                    key={tier.id}
                    className={`p-6 border-2 transition-all ${
                      selectedTier === tier.id 
                        ? 'border-andalus-gold shadow-lg' 
                        : 'border-transparent'
                    } ${
                      tier.popular ? 'ring-4 ring-andalus-gold/20' : ''
                    }`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    {tier.popular && (
                      <div className="bg-andalus-gold text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{tier.title}</h3>
                    <p className="text-2xl font-bold my-2">${tier.amount}</p>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="space-y-2">
                      {tier.perks.map((perk, index) => (
                        <div key={index} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-andalus-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{perk}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => setSelectedTier(tier.id)}
                      variant={selectedTier === tier.id ? "default" : "outline"}
                      className={`w-full mt-4 ${
                        selectedTier === tier.id 
                          ? 'bg-andalus-gold hover:bg-andalus-gold/90 text-black' 
                          : 'border-andalus-gold text-andalus-gold hover:bg-andalus-gold/10'
                      }`}
                    >
                      {selectedTier === tier.id ? 'Selected' : 'Select'}
                    </Button>
                  </Card>
                ))}
              </div>
              
              {selectedTier && (
                <Card className="p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Complete Your Donation</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="donor-name">Your Name</Label>
                        <Input 
                          id="donor-name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="donor-email">Email</Label>
                        <Input 
                          id="donor-email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Selected Tier</Label>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <span className="font-medium">
                          {tiers.find(t => t.id === selectedTier)?.title}
                        </span>
                        <span className="font-bold">
                          ${tiers.find(t => t.id === selectedTier)?.amount}
                        </span>
                      </div>
                    </div>
                    <Button 
                      onClick={handleDonation} 
                      className="w-full bg-andalus-gold hover:bg-andalus-gold/90 text-black text-lg py-6"
                    >
                      Donate ${tiers.find(t => t.id === selectedTier)?.amount}
                    </Button>
                  </div>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="custom">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Custom Donation</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="custom-amount">Donation Amount ($)</Label>
                    <Input 
                      id="custom-amount" 
                      type="number" 
                      min="1" 
                      value={customAmount} 
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="text-xl"
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    {[10, 25, 50, 100].map(amount => (
                      <Button
                        key={amount}
                        variant="outline"
                        onClick={() => setCustomAmount(amount.toString())}
                        className="border-andalus-gold text-andalus-gold hover:bg-andalus-gold/10"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="custom-name">Your Name</Label>
                      <Input 
                        id="custom-name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="custom-email">Email</Label>
                      <Input 
                        id="custom-email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleDonation} 
                    className="w-full bg-andalus-gold hover:bg-andalus-gold/90 text-black text-lg py-6"
                    disabled={!customAmount || Number(customAmount) <= 0}
                  >
                    {customAmount && Number(customAmount) > 0 
                      ? `Donate $${customAmount}` 
                      : 'Enter an amount'}
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
