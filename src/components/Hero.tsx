import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Shield, CheckCircle, Calculator, Info, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [perimeter, setPerimeter] = useState(30);
  const [depth, setDepth] = useState(600);
  const [access, setAccess] = useState('good');
  const [soil, setSoil] = useState('clay');
  const [targetSuite, setTargetSuite] = useState(false);
  
  // Calculate permit fee
  const permitFee = (perimeter * 11.89).toFixed(2);
  
  // Calculate construction range with REALISTIC pricing
  // Base costs (your actual costs):
  // - Labor: 18 days × $1500/day = $27,000 minimum
  // - Drainage: $6,000
  // - Slab: $2,000
  // - Engineering: $3,000-5,000
  // - Permits & inspections: $2,000-3,000
  // - Concrete materials: $8,000-12,000 (depends on volume)
  // - Soil removal/bins: $3,000-5,000
  // - Profit margin: 20-30%
  
  // Base rate per linear foot (more realistic)
  let baseMin = 300; // $300/linear foot minimum for basic job
  let baseMax = 500; // $500/linear foot for complex job
  
  // Adjust for depth (significant factor!)
  if (depth > 600) {
    const extraDepth = (depth - 600) / 100; // Extra depth in hundreds of mm
    baseMin += extraDepth * 50; // Add $50/ft per 100mm extra depth
    baseMax += extraDepth * 80; // Add $80/ft per 100mm extra depth
  } else if (depth < 600) {
    const lessDepth = (600 - depth) / 100;
    baseMin -= lessDepth * 20; // Small reduction for shallower dig
    baseMax -= lessDepth * 30;
  }
  
  // Adjust for access
  if (access === 'limited') {
    baseMin *= 1.15;
    baseMax *= 1.20;
  } else if (access === 'difficult') {
    baseMin *= 1.30;
    baseMax *= 1.40;
  }
  
  // Adjust for soil
  if (soil === 'sand') {
    baseMin *= 0.95; // Slightly easier
    baseMax *= 0.95;
  } else if (soil === 'rock') {
    baseMin *= 1.50; // Much harder
    baseMax *= 1.60;
  }
  
  // Convert metres to feet and calculate
  const perimeterFt = perimeter * 3.28;
  
  // Calculate base cost
  let minCost = Math.round(perimeterFt * baseMin);
  let maxCost = Math.round(perimeterFt * baseMax);
  
  // Ensure minimum viable cost (your actual minimum costs)
  const absoluteMinimum = 45000; // Can't do any job for less than this
  if (minCost < absoluteMinimum) minCost = absoluteMinimum;
  if (maxCost < absoluteMinimum * 1.5) maxCost = Math.round(absoluteMinimum * 1.5);
  
  // Debug output to console
  console.log('Depth:', depth, 'BaseMin:', baseMin, 'BaseMax:', baseMax, 'MinCost:', minCost, 'MaxCost:', maxCost);
  
  return (
    <>
      <section className="relative min-h-screen flex items-center py-6 sm:py-8 md:py-12 mt-16 sm:mt-20">
        {/* Background with Pattern and Image */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
          
          {/* Background Image with blend */}
          <div className="absolute inset-0 opacity-30">
            <img 
              src="/images/gallery/unfinished-basement-sump.png" 
              alt="Professional basement transformation by Spaders"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 relative z-10">
                Basement Underpinning in Toronto — 
                <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mt-1">
                  Lower Your Basement, Strengthen Your Home
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Engineered, permitted & WSIB-covered underpinning to OBC 2024 (in force Jan 1, 2025). 
                Toronto's official fee: <strong>$11.89/linear metre</strong>—we calculate and include it in your quote.
              </p>
              
              <p className="text-xs sm:text-sm text-gray-600 mb-4 hidden sm:block">
                Unlock full-height living space with basement underpinning in Toronto—designed by structural engineers, 
                permitted and inspected to Ontario's current Building Code. We handle drawings, permits, and required 
                inspections, provide WSIB Clearance, and include the Toronto linear-metre permit fee in your estimate 
                so there are no surprises.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">WSIB Clearance</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Engineer-stamped</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">4.8★ (187 reviews)</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">10-Year Warranty</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                  onClick={() => setShowModal(true)}
                >
                  Get a Free Site Assessment
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-700 bg-white/80 backdrop-blur-sm hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  437-545-0067
                </Button>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-600 mt-3">
                Prefer to talk? Call 8:00 AM – 6:00 PM Monday-Friday | spaders.ca
              </p>
            </div>
            
            {/* Right Content - Quick Estimator */}
            <div className="mt-8 lg:mt-0">
              <Card className="shadow-2xl border border-white/20 max-w-md mx-auto lg:max-w-none bg-white/95 backdrop-blur-xl relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600"></div>
                <CardHeader className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-3 sm:py-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5"></div>
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base relative z-10">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    Quick Estimator v2
                  </CardTitle>
                  <p className="text-blue-100 text-xs sm:text-sm">Depth affects price!</p>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {/* Perimeter Input */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-gray-700">
                        Perimeter to underpin
                      </label>
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 rounded">
                        {perimeter}m
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        value={perimeter}
                        onChange={(e) => setPerimeter(Number(e.target.value))}
                        min="10"
                        max="60"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                        style={{
                          background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((perimeter - 10) / 50) * 100}%, #e5e7eb ${((perimeter - 10) / 50) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <style jsx>{`
                        .slider-thumb::-webkit-slider-thumb {
                          appearance: none;
                          width: 16px;
                          height: 16px;
                          background: #2563eb;
                          border-radius: 50%;
                          cursor: pointer;
                          border: 2px solid white;
                          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                        }
                        .slider-thumb::-moz-range-thumb {
                          width: 16px;
                          height: 16px;
                          background: #2563eb;
                          border-radius: 50%;
                          cursor: pointer;
                          border: 2px solid white;
                          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                        }
                      `}</style>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>10m</span>
                      <span>60m</span>
                    </div>
                  </div>
                  
                  {/* Depth Input - BUTTONS FOR DEPTH SELECTION */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-gray-700">
                        Depth to lower
                      </label>
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 rounded">
                        {depth}mm
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {[300, 600, 900].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDepth(d)}
                          className={`px-2 py-1 rounded border text-xs font-medium transition-colors ${
                            depth === d 
                              ? 'border-blue-600 bg-blue-50 text-blue-700' 
                              : 'border-gray-200 hover:border-gray-300 bg-white text-gray-600'
                          }`}
                        >
                          {d}mm
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Access */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Site Access
                    </label>
                    <select 
                      value={access}
                      onChange={(e) => setAccess(e.target.value)}
                      className="w-full px-2 py-1.5 text-xs border border-gray-200 rounded focus:border-blue-500 focus:outline-none"
                    >
                      <option value="good">Good access</option>
                      <option value="limited">Limited access</option>
                      <option value="difficult">Difficult access</option>
                    </select>
                  </div>
                  
                  {/* Soil Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Soil Type (if known)
                    </label>
                    <select 
                      value={soil}
                      onChange={(e) => setSoil(e.target.value)}
                      className="w-full px-2 py-1.5 text-xs border border-gray-200 rounded focus:border-blue-500 focus:outline-none"
                    >
                      <option value="clay">Clay</option>
                      <option value="sand">Sand</option>
                      <option value="rock">Rock</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </div>
                  
                  {/* Legal Suite Toggle */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="suite"
                      checked={targetSuite}
                      onChange={(e) => setTargetSuite(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="suite" className="text-xs text-gray-700">
                      Planning a legal basement suite (1.95m min)
                    </label>
                  </div>
                  
                  {/* Results */}
                  <div className="border-t border-gray-200 pt-2">
                    <div className="space-y-2">
                      {/* Permit Fee */}
                      <div className="bg-blue-50 rounded p-2">
                        <div className="flex items-start gap-1">
                          <Info className="h-3 w-3 text-blue-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-700">
                              Toronto Permit Fee:
                            </p>
                            <p className="text-sm font-bold text-blue-600">
                              ${permitFee}
                            </p>
                            <p className="text-xs text-gray-600">
                              {perimeter}m × $11.89/m
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Construction Range */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded p-2 border border-blue-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          💰 Construction Range (Depth: {depth}mm)
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          ${minCost.toLocaleString()} – ${maxCost.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-600">
                          *Updates with depth! Final after site assessment.
                        </p>
                      </div>
                      
                      {/* Suite Height Check */}
                      {targetSuite && depth >= 600 && (
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-xs text-green-800">
                            ✓ Depth supports 1.95m ceiling for legal suite
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-2 italic">
                      Planning tool only. Final pricing after site visit.
                    </p>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-1.5 text-xs font-semibold">
                    Get Your Detailed Quote →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl my-8">
            <div className="bg-blue-600 p-4 sm:p-6 rounded-t-2xl text-white">
              <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">SPADERS</div>
              <h3 className="text-xl sm:text-2xl font-bold">Free Site Assessment</h3>
              <p className="text-blue-100 mt-1 text-sm sm:text-base">Takes less than 60 seconds</p>
            </div>
            
            <form className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">Name*</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">Property Address*</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                  placeholder="123 Main St, Toronto"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">Phone*</label>
                <input
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                  placeholder="437-545-0067"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">Target Finished Height</label>
                <select className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base">
                  <option>7 feet (2.13m)</option>
                  <option>8 feet (2.44m)</option>
                  <option>9 feet (2.74m)</option>
                  <option>Legal suite height (1.95m min)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">Upload Photos (optional)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                />
                <p className="text-xs text-gray-500 mt-1">Basement, stairs, exterior foundation</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Book Assessment
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base"
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