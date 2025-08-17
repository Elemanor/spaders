import React from 'react';
import { CheckCircle, TrendingUp, Home } from 'lucide-react';

export default function ImageShowcase() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Transform Your Space
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                From Cramped to Comfortable
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                See the dramatic difference professional underpinning makes. 
                We turn low, unusable basements into bright, valuable living spaces.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Average 24-36" Height Gain</h3>
                  <p className="text-gray-600">Transform 6' ceilings to comfortable 8'+ heights</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Increase Property Value</h3>
                  <p className="text-gray-600">Add $150-250K in Toronto real estate value</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Home className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Suite Ready</h3>
                  <p className="text-gray-600">Meet 1.95m minimum ceiling requirements</p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Permit Approval</div>
              </div>
            </div>
          </div>
          
          {/* Right Images - Before/After Grid */}
          <div className="space-y-4">
            {/* Before/After Comparison */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    BEFORE
                  </div>
                  <img 
                    src="/images/gallery/basement-before-underpinning.png" 
                    alt="Basement before underpinning - low ceiling"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    AFTER
                  </div>
                  <img 
                    src="/images/gallery/finished-basement-1.png" 
                    alt="Basement after underpinning - full height"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            {/* Additional After Images */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/gallery/finished-basement-2.png" 
                alt="Modern finished basement"
                className="w-full h-48 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
              <img 
                src="/images/gallery/finished-basement-3.png" 
                alt="Luxury basement renovation"
                className="w-full h-48 object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            
            {/* Call to Action */}
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2">Ready to See Your Transformation?</h3>
              <p className="text-blue-100 mb-4">
                Get a free assessment and see what's possible for your basement.
              </p>
              <a 
                href="#calculator"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Calculate Your Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}