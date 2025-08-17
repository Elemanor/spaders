import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calculator, Info, DollarSign, Home, Clock } from 'lucide-react';

export default function CostCalculator() {
  const [perimeter, setPerimeter] = useState(30);
  const [depth, setDepth] = useState(600);
  const [access, setAccess] = useState('good');
  const [soil, setSoil] = useState('clay');
  const [waterproofing, setWaterproofing] = useState(false);
  const [walkout, setWalkout] = useState(false);
  const [drainage, setDrainage] = useState(false);
  
  // Calculate Toronto permit fee
  const permitFee = (perimeter * 11.89).toFixed(2);
  
  // REALISTIC PRICING based on actual costs:
  // Labor: 18-25 days × $1500/day = $27,000-37,500
  // Drainage system: $6,000
  // New slab: $2,000-3,000
  // Engineering: $3,000-5,000
  // Permits & city inspections: $2,000-3,000
  // Concrete materials: $200-300 per cubic meter
  // Soil removal/bins: $3,000-5,000
  // Equipment rental: $2,000-4,000
  // Overhead & profit: 25-35%
  
  // Base rate per linear foot (realistic Toronto pricing)
  let baseMin = 350; // $350/linear foot minimum
  let baseMax = 550; // $550/linear foot for complex
  
  // Adjust for depth - MAJOR cost factor
  if (depth > 600) {
    const extraDepth = (depth - 600) / 100;
    baseMin += extraDepth * 60; // $60/ft per 100mm extra
    baseMax += extraDepth * 100; // $100/ft per 100mm extra
  } else if (depth < 600) {
    const lessDepth = (600 - depth) / 100;
    baseMin -= lessDepth * 30; // Slight reduction for shallow
    baseMax -= lessDepth * 40;
  }
  
  // Adjust for access
  if (access === 'limited') {
    baseMin *= 1.20;
    baseMax *= 1.25;
  } else if (access === 'difficult') {
    baseMin *= 1.40;
    baseMax *= 1.50;
  }
  
  // Adjust for soil - major factor
  if (soil === 'sand') {
    baseMin *= 0.95;
    baseMax *= 0.95;
  } else if (soil === 'rock') {
    baseMin *= 1.60;
    baseMax *= 1.80;
  } else if (soil === 'unknown') {
    baseMax *= 1.20; // Add contingency for unknown
  }
  
  // Convert metres to feet and calculate
  const perimeterFt = perimeter * 3.28;
  let minCost = Math.round(perimeterFt * baseMin);
  let maxCost = Math.round(perimeterFt * baseMax);
  
  // Ensure minimum viable cost
  const absoluteMinimum = 50000;
  if (minCost < absoluteMinimum) minCost = absoluteMinimum;
  if (maxCost < absoluteMinimum * 1.5) maxCost = Math.round(absoluteMinimum * 1.5);
  
  // Add options (realistic pricing)
  if (waterproofing) {
    minCost += 5000;
    maxCost += 8000;
  }
  if (walkout) {
    minCost += 20000;
    maxCost += 35000;
  }
  if (drainage) {
    minCost += 4000;
    maxCost += 6000;
  }

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cost & Timelines Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get an instant estimate including Toronto permit fees. Final pricing determined after our free site assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calculator className="h-6 w-6" />
                  Detailed Cost Estimator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {/* Perimeter */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-bold text-gray-700">
                      Perimeter to Underpin
                    </label>
                    <span className="text-2xl font-bold text-gray-900">{perimeter}m</span>
                  </div>
                  <input
                    type="range"
                    value={perimeter}
                    onChange={(e) => setPerimeter(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    min="10"
                    max="60"
                    style={{
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((perimeter - 10) / 50) * 100}%, #e5e7eb ${((perimeter - 10) / 50) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10m</span>
                    <span>60m</span>
                  </div>
                </div>

                {/* Depth */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-bold text-gray-700">
                      Depth to Lower
                    </label>
                    <span className="text-2xl font-bold text-gray-900">{depth}mm</span>
                  </div>
                  <input
                    type="range"
                    value={depth}
                    onChange={(e) => setDepth(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    min="300"
                    max="1200"
                    step="100"
                    style={{
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((depth - 300) / 900) * 100}%, #e5e7eb ${((depth - 300) / 900) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>300mm (1ft)</span>
                    <span>1200mm (4ft)</span>
                  </div>
                </div>

                {/* Options Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 text-gray-700">
                      Site Access
                    </label>
                    <div className="space-y-2">
                      {['good', 'limited', 'difficult'].map((option) => (
                        <label key={option} className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50"
                          style={{ borderColor: access === option ? '#2563eb' : '#e5e7eb' }}>
                          <input
                            type="radio"
                            value={option}
                            checked={access === option}
                            onChange={(e) => setAccess(e.target.value)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${access === option ? 'border-blue-600' : 'border-gray-300'}`}>
                            {access === option && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                          </div>
                          <span className="capitalize font-medium">{option} Access</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-3 text-gray-700">
                      Soil Type
                    </label>
                    <div className="space-y-2">
                      {['clay', 'sand', 'rock', 'unknown'].map((option) => (
                        <label key={option} className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50"
                          style={{ borderColor: soil === option ? '#2563eb' : '#e5e7eb' }}>
                          <input
                            type="radio"
                            value={option}
                            checked={soil === option}
                            onChange={(e) => setSoil(e.target.value)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${soil === option ? 'border-blue-600' : 'border-gray-300'}`}>
                            {soil === option && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                          </div>
                          <span className="capitalize font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">
                    Add-ons (Optional)
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50"
                      style={{ borderColor: waterproofing ? '#2563eb' : '#e5e7eb' }}>
                      <input
                        type="checkbox"
                        checked={waterproofing}
                        onChange={(e) => setWaterproofing(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${waterproofing ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}>
                        {waterproofing && <span className="text-white text-xs">✓</span>}
                      </div>
                      <span className="font-medium">Exterior Waterproofing (+$5-8k)</span>
                    </label>
                    
                    <label className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50"
                      style={{ borderColor: walkout ? '#2563eb' : '#e5e7eb' }}>
                      <input
                        type="checkbox"
                        checked={walkout}
                        onChange={(e) => setWalkout(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${walkout ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}>
                        {walkout && <span className="text-white text-xs">✓</span>}
                      </div>
                      <span className="font-medium">Walkout Entrance (+$20-35k)</span>
                    </label>
                    
                    <label className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50"
                      style={{ borderColor: drainage ? '#2563eb' : '#e5e7eb' }}>
                      <input
                        type="checkbox"
                        checked={drainage}
                        onChange={(e) => setDrainage(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${drainage ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}>
                        {drainage && <span className="text-white text-xs">✓</span>}
                      </div>
                      <span className="font-medium">Enhanced Drainage System (+$4-6k)</span>
                    </label>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <DollarSign className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Toronto Permit Fee</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">${permitFee}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {perimeter}m × $11.89/m
                        <a href="https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-fees/" 
                           className="text-blue-600 underline ml-1" 
                           target="_blank" 
                           rel="noopener noreferrer">
                          (Official rate)
                        </a>
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Home className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">Added Home Value</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">+10-15%</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Typical ROI in Toronto
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-600 rounded-lg p-5 text-white text-center">
                    <p className="text-sm font-medium mb-2 text-blue-100">Estimated Total Investment</p>
                    <p className="text-3xl font-bold mb-1">
                      ${minCost.toLocaleString()} - ${maxCost.toLocaleString()}
                    </p>
                    <p className="text-sm text-blue-100">
                      Includes construction and permit fees
                    </p>
                    <p className="text-xs text-blue-200 mt-2">
                      *Market context range. Final pricing after site engineering.
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg font-semibold">
                  Get Your Detailed Quote →
                </Button>
              </CardContent>
            </Card>

            {/* Permit Math Callout */}
            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Toronto permit math—no surprises</h3>
              <p className="text-gray-700 text-sm">
                Underpinning permits are charged by linear metre. Applications on or after Jan 1, 2025 pay 
                <strong> $11.89 per linear metre</strong>. We take the total metres from your stamped sequence 
                drawings and include the fee in your quote.
              </p>
              <a href="https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-fees/" 
                 className="text-blue-600 text-sm underline mt-2 inline-block" 
                 target="_blank" 
                 rel="noopener noreferrer">
                View City of Toronto fee schedule →
              </a>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Timeline Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Expected Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Permit Decision</p>
                    <p className="text-sm text-gray-600">~10 business days (OBC target)</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold text-gray-900">Excavation & Pits</p>
                    <p className="text-sm text-gray-600">3-4 weeks</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-semibold text-gray-900">Curing & Waterproofing</p>
                    <p className="text-sm text-gray-600">7-10 days</p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <p className="font-semibold text-gray-900">Slab & Finishing</p>
                    <p className="text-sm text-gray-600">1-2 weeks</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-sm font-bold text-gray-900">Total: 6-10 weeks</p>
                    <p className="text-xs text-gray-600">from permit approval</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Context Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Market Context</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Toronto underpinning pricing varies widely based on scope:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">
                      <strong>$350-$550/linear ft</strong> realistic Toronto range
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">
                      <strong>$50k-$120k</strong> typical total project cost
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">
                      <strong>Labor alone:</strong> $27k-40k (18-25 days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">
                      Bench footing: <strong>25-35% less</strong> but reduces floor space
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  Sources: VMB Group, NuSite, Strong Basements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}