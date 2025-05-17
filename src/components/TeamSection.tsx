
import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Layla Hassan",
    role: "Director",
    bio: "Award-winning filmmaker with a passion for historical narratives. Previously worked on documentaries featuring Islamic history and culture.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Omar Malik",
    role: "Producer",
    bio: "Veteran producer with over 15 years of experience in independent film. Passionate about bringing authentic Muslim stories to global audiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Amina Rodriguez",
    role: "Screenwriter",
    bio: "Historian and screenwriter specializing in medieval Islamic Spain. Author of several books on Al-Andalus and its cultural legacy.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Tariq Ahmed",
    role: "Historical Consultant",
    bio: "Professor of Islamic History at Cambridge University with multiple publications on 9th century Iberia and Viking interactions with Muslim territories.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  }
];

const productionDetails = [
  {
    question: "Production Timeline",
    answer: "Pre-production: 6 months\nPrincipal photography: 8 weeks\nPost-production: 9 months\nEstimated completion: Late 2026"
  },
  {
    question: "Filming Locations",
    answer: "We plan to film in modern Spain, Morocco, and Tunisia to authentically capture the architecture and landscapes of 9th century Al-Andalus."
  },
  {
    question: "Production Values",
    answer: "Our vision includes high-quality period costumes, authentic sets, and historically accurate representations of 9th century Cordoba and surrounding regions. We are committed to showcasing the architectural splendor and cultural richness of Islamic Spain."
  },
  {
    question: "Distribution Plan",
    answer: "We aim to premiere at major film festivals, followed by theatrical release in select markets and distribution through international streaming platforms to ensure global reach."
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-andalus-cream">
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Meet Our Team</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-andalus-blue font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Production Details</h3>
            <Accordion type="single" collapsible className="w-full">
              {productionDetails.map((detail, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{detail.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="whitespace-pre-line">{detail.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
