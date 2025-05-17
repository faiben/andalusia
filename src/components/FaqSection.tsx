
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How will my donation be used?",
    answer: "Your donations will directly fund the production of 'Khalid & Siraj', covering expenses such as location fees, costume design, set construction, crew salaries, equipment rental, post-production, and distribution costs. We are committed to full transparency and will provide regular updates on how funds are being utilized."
  },
  {
    question: "When will the film be completed?",
    answer: "We anticipate a production timeline of approximately 24 months from reaching our funding goal. This includes 6 months of pre-production, 8 weeks of filming, and 9 months of post-production. Our estimated completion date is late 2026, with festival submissions to follow."
  },
  {
    question: "Will I receive updates about the film's progress?",
    answer: "Absolutely! All donors will receive regular email updates about our progress. Higher-tier donors will get exclusive behind-the-scenes content and early access to production materials."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "While we are passionate about creating meaningful cultural content, we are not a registered non-profit organization. Therefore, donations are not tax-deductible. However, higher-tier donations do include perks as our way of showing appreciation."
  },
  {
    question: "What happens if you don't reach your funding goal?",
    answer: "We are committed to bringing this important story to life. If we don't reach our full funding goal, we will adjust our production scale accordingly while maintaining our commitment to historical authenticity and quality storytelling. All funds raised will go directly toward production."
  },
  {
    question: "Can I get involved beyond donating?",
    answer: "Yes! We welcome supporters who want to help spread the word about our project. Additionally, we have special tiers for executive producers who wish to be more involved in the production process. Please contact us directly if you're interested in larger partnerships or have specialized skills to offer."
  },
  {
    question: "How historically accurate will the film be?",
    answer: "Historical accuracy is one of our top priorities. We have historians and cultural consultants on our team to ensure authenticity in everything from set design and costumes to language and customs. While we'll take some creative liberties for storytelling purposes, the historical context, setting, and major events will be thoroughly researched and accurately portrayed."
  }
];

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Still have questions?</p>
            <a 
              href="mailto:contact@khalidandsiraj.com"
              className="text-andalus-blue hover:underline font-medium"
            >
              Contact our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
