import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: "Do I really need a permit for basement underpinning?",
    answer: "Yes, absolutely. Toronto requires a building permit for underpinning with specific drawings (including staged sequencing and total linear metres) and forms. We prepare, submit, and coordinate all inspections for you. The City has detailed requirements that must be followed.",
    link: "https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/small-residential-project-guides/residential-underpinning-including-basement-entrances/"
  },
  {
    question: "What will the City of Toronto charge me for the permit?",
    answer: "Toronto uses a linear-metre fee for underpinning permits. For applications on or after January 1, 2025, the City charges $11.89 per linear metre. We measure the metres from your engineered drawings and include this fee in your detailed estimate—no hidden surprises.",
    highlight: "$11.89 per linear metre (as of Jan 1, 2025)"
  },
  {
    question: "How high should we go for a legal basement apartment?",
    answer: "Ontario guidance requires a minimum 1.95m (6'5\") ceiling height for legal basement apartments. We design your target dig depth and finished assembly (including slab and insulation thickness) with this requirement in mind, ensuring compliance for rental suite applications.",
    link: "https://www.ontario.ca/page/add-second-unit-your-house"
  },
  {
    question: "Are you covered by WSIB?",
    answer: "Yes. Expanded compulsory coverage applies to all construction businesses in Ontario. We provide a WSIB Clearance Certificate for every project and verify all subcontractor coverage. Note that homeowner-only exemptions don't apply to our commercial scope of work.",
    link: "https://www.wsib.ca/en/businesses/registration-and-coverage/expanded-compulsory-coverage-construction-industry"
  },
  {
    question: "How long does the permit approval process take?",
    answer: "The Ontario Building Code sets administrative timelines of approximately 10 business days for house permits (for approval or refusal). However, actual timing depends on submission completeness and City workload. We ensure all documents are complete to avoid delays.",
    link: "https://www.ontario.ca/document/ontario-municipal-councillors-guide/12-building-regulation"
  },
  {
    question: "Is basement underpinning safe for my home?",
    answer: "When done properly, yes. We follow Ontario OHSA guidance specific to underpinning hazards, use engineered sequencing, and maintain structural integrity throughout. Our P.Eng provides oversight and signs off on all critical stages. Safety is our top priority.",
    link: "https://www.ontario.ca/page/underpinning-hazards-and-compliance"
  },
  {
    question: "What's the difference between underpinning and bench footing?",
    answer: "Underpinning extends your existing foundation deeper, preserving 100% of floor space but costing more. Bench footing creates a concrete 'bench' along the walls, reducing usable space by 15-25% but costing 20-30% less. We'll help you choose based on your needs and budget."
  },
  {
    question: "Can I live in my home during underpinning?",
    answer: "Yes, in most cases. The work is done from below and outside. You'll experience some noise and vibration during work hours (8am-6pm), but the living areas remain habitable. We maintain safe access and egress at all times as required by safety regulations."
  },
  {
    question: "What if we hit bedrock or water during excavation?",
    answer: "Our initial assessment includes soil evaluation to identify potential issues. If we encounter unexpected conditions, we have protocols in place: bedrock may require specialized equipment (additional cost), while water requires drainage solutions. We'll discuss options before proceeding."
  },
  {
    question: "How does underpinning affect my property value?",
    answer: "Professionally done basement underpinning typically adds 10-15% to property value in Toronto, especially when creating legal suite potential. The exact increase depends on your neighborhood and the quality of finishing work. It's one of the best ROI renovations for Toronto homes."
  },
  {
    question: "Do you handle the entire project or just the underpinning?",
    answer: "We can handle just the structural underpinning or manage the complete basement transformation including waterproofing, insulation, electrical rough-in, and even finishing. Many clients prefer our turnkey service to avoid coordinating multiple contractors."
  },
  {
    question: "What warranty do you provide?",
    answer: "We provide a 10-year structural warranty on all underpinning work, backed by our liability insurance. This covers the structural integrity of the underpinning itself. Waterproofing systems carry a separate 5-year warranty. All warranties are transferable to new owners."
  }
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about basement underpinning in Toronto
          </p>
        </div>

        <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="px-6">
              <AccordionTrigger className="text-left hover:text-brand-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p className="mb-2">{faq.answer}</p>
                {faq.highlight && (
                  <p className="font-semibold text-brand-600 mb-2">
                    ⚡ {faq.highlight}
                  </p>
                )}
                {faq.link && (
                  <a 
                    href={faq.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-600 underline hover:text-brand-700 text-sm"
                  >
                    Learn more from official source →
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Have a question not answered here?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors">
              Call Us: 416-555-0123
            </button>
            <button className="bg-white text-brand-600 border-2 border-brand-600 px-6 py-3 rounded-lg font-medium hover:bg-brand-50 transition-colors">
              Email Your Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}