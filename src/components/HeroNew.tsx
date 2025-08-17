import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Phone, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function HeroNew() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Basement Underpinning 
                <span className="text-blue-600 block mt-2">Toronto's #1 Choice</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mt-6 mb-8">
                Professional basement lowering with engineered plans, full permits, 
                and WSIB coverage. Transform your basement into valuable living space.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4.8★</div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Permit Success</div>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto font-semibold"
                  onClick={() => setShowModal(true)}
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 text-gray-700 text-lg px-8 py-6 h-auto font-semibold hover:bg-gray-50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  437-545-0067
                </Button>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  WSIB Clearance
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="h-5 w-5 text-yellow-500" />
                  10-Year Warranty
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/gallery/finished-basement-1.png" 
                  alt="Professional basement underpinning result"
                  className="w-full h-auto"
                />
              </div>
              {/* Quick Info Card */}
              <Card className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Toronto Permit Fee</div>
                    <div className="text-sm text-gray-600">$11.89/linear metre included</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
            <div className="bg-blue-600 p-6 rounded-t-2xl text-white">
              <h3 className="text-2xl font-bold">Free Site Assessment</h3>
              <p className="text-blue-100 mt-1">Takes less than 60 seconds</p>
            </div>
            
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Name*</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Property Address*</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base"
                  placeholder="123 Main St, Toronto"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Phone*</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base"
                  placeholder="437-545-0067"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold"
                >
                  Book Assessment
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 text-base"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}