import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const processImages = [
  {
    title: "Stage 1: Excavation Begins",
    image: '/images/process/excavation-underpinning.webp',
    description: "Carefully excavating sections for underpinning while maintaining structural integrity",
    highlights: [
      "Sequential excavation pattern",
      "OHSA safety protocols",
      "Continuous monitoring"
    ]
  },
  {
    title: "Stage 2: Foundation Work Complete",
    image: '/images/process/underpinning-finished-no-slab.webp',
    description: "New underpinned foundation walls completed, ready for waterproofing and slab",
    highlights: [
      "Reinforced concrete walls",
      "Increased ceiling height achieved",
      "Ready for next phase"
    ]
  },
  {
    title: "Stage 3: Legal Height Achieved",
    image: '/images/gallery/legal-basement.webp',
    description: "Finished basement with legal ceiling height for rental suite compliance",
    highlights: [
      "1.95m+ ceiling height",
      "Building code compliant",
      "Rental income potential"
    ]
  },
  {
    title: "Stage 4: Premium Finishes",
    image: '/images/gallery/heated-floor.jpg',
    description: "Optional radiant floor heating installed for ultimate comfort",
    highlights: [
      "In-floor heating system",
      "Energy efficient",
      "Year-round comfort"
    ]
  }
];

export default function ProcessShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % processImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + processImages.length) % processImages.length);
  };

  const current = processImages[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Construction Progress Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See The Transformation In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the journey from excavation to finished basement with real project photos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3]">
                <img 
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Stage Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-bold text-blue-600">{current.title}</p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>
            </Card>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {processImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div>
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {current.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {current.description}
                </p>

                <div className="space-y-3">
                  {current.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <p className="text-sm font-semibold text-blue-900 mb-2">
                    Why Choose Professional Underpinning?
                  </p>
                  <p className="text-sm text-blue-800">
                    Our engineered approach ensures your home's structural integrity while 
                    maximizing your basement's potential. Every project includes permits, 
                    inspections, and WSIB clearance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-600">Project Timeline</span>
            <span className="text-sm font-semibold text-gray-600">6-10 Weeks Average</span>
          </div>
          <div className="relative">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / processImages.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {processImages.map((stage, index) => (
                <div 
                  key={index}
                  className={`text-xs font-medium ${
                    index <= currentIndex ? 'text-blue-600' : 'text-gray-400'
                  }`}
                >
                  Stage {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}