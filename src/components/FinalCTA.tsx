import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Calendar, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const [showScheduler, setShowScheduler] = useState(false);
  
  return (
    <>
      <section className="relative py-24 bg-blue-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0L0 15L15 30L30 15L15 0Z' fill='white' fill-opacity='0.02'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/90 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              Serving Toronto Since 2010
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform
              <span className="block text-white">Your Basement?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 500+ Toronto homeowners who've successfully lowered their basements. 
              Get your free assessment and transparent quote today.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 text-white">
                ✓ Free Site Assessment
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 text-white">
                ✓ Permit Fees Included
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 text-white">
                ✓ 10-Year Warranty
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-6 py-3 text-white">
                ✓ WSIB Certified
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-xl transition-all group"
                onClick={() => setShowScheduler(true)}
              >
                Book Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white px-10 py-7 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 437-545-0067
              </Button>
            </div>
          </div>
          
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-white">
              <Clock className="h-10 w-10 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-3">Business Hours</h3>
              <div className="space-y-1 text-white/80 text-sm">
                <p>Monday-Friday: 8am-6pm</p>
                <p>Saturday: 9am-4pm</p>
                <p>Sunday: Emergency only</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-white">
              <MapPin className="h-10 w-10 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-3">Service Areas</h3>
              <div className="text-white/80 text-sm">
                <p>Toronto • North York • Scarborough</p>
                <p>Etobicoke • East York • York</p>
                <p>Mississauga • Vaughan</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-white">
              <Mail className="h-10 w-10 mb-4 text-white" />
              <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <p>info@example.com</p>
                <p>437-545-0067</p>
                <p>647-555-0456</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Trust Statement */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-center text-white/80 max-w-3xl mx-auto">
              Licensed, insured, and committed to transforming basements safely and professionally. 
              Every project engineered to OBC 2024/25 standards with full City of Toronto permit compliance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Scheduler Modal */}
      {showScheduler && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl">
            {/* Modal Header */}
            <div className="bg-blue-700 p-6 rounded-t-3xl">
              <h3 className="text-2xl font-bold text-white">Schedule Your Free Assessment</h3>
              <p className="text-blue-100 mt-1">Takes less than 60 seconds</p>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-700">First Name*</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-700">Last Name*</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-1 text-gray-700">Property Address*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="123 Main Street, Toronto"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-700">Phone*</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="437-545-0067"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-700">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1 text-gray-700">Preferred Time</label>
                    <select className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Morning (8am-12pm)</option>
                      <option>Afternoon (12pm-4pm)</option>
                      <option>Late (4pm-6pm)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-1 text-gray-700">Project Goals (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2.5 border-2 border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your basement project goals..."
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-blue-700 hover:bg-blue-800 py-3 text-base font-semibold"
                  >
                    Schedule Assessment
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowScheduler(false)}
                    className="px-8"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}