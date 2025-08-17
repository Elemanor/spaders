import React from 'react';
import { Card, CardContent } from './ui/card';
import { Home, Shield, FileCheck, Droplets, DollarSign, Ruler } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: "More Height & Value",
    description: "We plan your dig to support 1.95m minimum clear height for a legal second unit (where applicable).",
    link: "https://www.ontario.ca/page/add-second-unit-your-house"
  },
  {
    icon: Shield,
    title: "Safer, Stronger Foundation",
    description: "Sequential underpinning pits with engineered sequencing and OHSA controls.",
    link: "https://www.ontario.ca/page/underpinning-hazards-and-compliance"
  },
  {
    icon: FileCheck,
    title: "Permits, Inspections, Compliance",
    description: "We prepare staged sequence drawings (showing total linear metres), submit, and coordinate inspections (~2 business days); we include the $11.89/lin m fee in your quote.",
    link: "https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/small-residential-project-guides/residential-underpinning-including-basement-entrances/"
  },
  {
    icon: Droplets,
    title: "Dry, Warm, Efficient",
    description: "Integrate drainage (weeping tile/sump) and slab insulation while we're open."
  },
  {
    icon: DollarSign,
    title: "Transparent Scope & Billing",
    description: "Stage-based milestones tied to inspection points. No hidden costs or surprise fees."
  },
  {
    icon: Ruler,
    title: "Maximum Space Gain",
    description: "Full underpinning maximizes usable space compared to bench footing alternatives."
  }
];

export default function Benefits() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What You Get With Professional Basement Underpinning
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Transform your basement into valuable, legal living space with our comprehensive underpinning solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                      {benefit.link && (
                        <a 
                          href={benefit.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-xs sm:text-sm hover:underline mt-2 inline-block"
                        >
                          Learn more →
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}