import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, FileText, HardHat, Hammer, Droplets, ClipboardCheck, Home, Ruler } from 'lucide-react';

const processSteps = [
  {
    icon: Ruler,
    title: "Site Visit & Measurements",
    description: "Free comprehensive assessment of your basement, soil conditions, and access points",
    duration: "Same week booking"
  },
  {
    icon: FileText,
    title: "Structural Engineering & Stamped Drawings",
    description: "Professional engineer creates detailed plans with Commitment to General Reviews",
    duration: "5-7 business days"
  },
  {
    icon: ClipboardCheck,
    title: "Permit Submission",
    description: "Complete Toronto underpinning application with sequence drawings & linear metres calculation",
    duration: "~10 business days review"
  },
  {
    icon: HardHat,
    title: "Site Preparation",
    description: "Install shoring, relocate services, establish dust control and safe egress routes",
    duration: "2-3 days"
  },
  {
    icon: Hammer,
    title: "Sequential Underpinning Pits",
    description: "Excavate and pour concrete in engineered sequence with OHSA safety controls",
    duration: "3-4 weeks"
  },
  {
    icon: Droplets,
    title: "Drainage & Waterproofing",
    description: "Install weeping tile system, sump pump, and exterior waterproof membrane",
    duration: "3-4 days"
  },
  {
    icon: Home,
    title: "New Slab & Insulation",
    description: "Pour reinforced concrete floor with integrated insulation system",
    duration: "2-3 days + cure time"
  },
  {
    icon: CheckCircle,
    title: "Final Inspection & Handover",
    description: "City inspection, WSIB clearance certificate, warranty documentation provided",
    duration: "1-2 days"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            8-Step Proven Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Underpinning Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial assessment to final inspection, every step is engineered for safety and compliance 
            with Ontario Building Code 2024/25 standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-gray-200">
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-gray-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* OHSA Safety Notice */}
        <div className="mt-16 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-xl shrink-0">
              <svg className="h-6 w-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Safety First, By The Book
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Underpinning is a specialized high-risk task. We plan and execute sequential pits with engineered 
                shoring and inspections aligned to Ontario OHSA underpinning guidance. Our crews carry current 
                WSIB clearance; all subcontractors are verified.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.ontario.ca/page/underpinning-hazards-and-compliance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  View OHSA Guidelines
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://www.wsib.ca/en/businesses/registration-and-coverage/expanded-compulsory-coverage-construction-industry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  WSIB Coverage Info
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Method Details */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-gray-200 hover:border-blue-200 transition-colors">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Mass Concrete Pour</h4>
              <p className="text-gray-600">
                Traditional method using sequential excavation and concrete pours. Most cost-effective for standard conditions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-200 hover:border-blue-200 transition-colors">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Beam & Base</h4>
              <p className="text-gray-600">
                Reinforced concrete beams support loads during excavation. Ideal for challenging soil conditions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-200 hover:border-blue-200 transition-colors">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Mini-Piles</h4>
              <p className="text-gray-600">
                Steel piles driven to bedrock for maximum stability. Required for extremely poor soil or high water tables.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}