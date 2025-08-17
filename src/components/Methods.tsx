import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function Methods() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Underpinning vs. Bench Footing: Choose the Right Method
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Both methods lower your basement floor, but they differ in cost, timeline, and final usable space
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Underpinning */}
          <Card className="border-2 border-brand-200">
            <CardHeader className="bg-brand-50">
              <CardTitle className="text-2xl">
                Full Underpinning
                <span className="block text-sm font-normal text-gray-600 mt-2">
                  Maximum space, higher investment
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Advantages:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Maximizes usable floor space - no lost square footage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Best for legal suite readiness (full 1.95m+ height)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Strengthens existing foundation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Highest property value increase</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Considerations:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>Higher cost ($250-400 per linear foot)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>Longer timeline (6-10 weeks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                      <span>More complex engineering required</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-brand-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-brand-700">
                    Best For: Maximum space needs, rental suites, narrow basements
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bench Footing */}
          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-2xl">
                Bench Footing
                <span className="block text-sm font-normal text-gray-600 mt-2">
                  Faster and cheaper, reduced floor area
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Advantages:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>20-30% lower cost than underpinning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Faster completion (4-6 weeks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Less structural risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Simpler permit process</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Considerations:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Creates bench along walls (2-4 ft wide)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span>Reduces usable floor space by 15-25%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span>May limit furniture placement options</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700">
                    Best For: Large basements, storage focus, budget-conscious projects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Comparison */}
        <div className="mt-12 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 font-semibold">Factor</th>
                  <th className="py-3 px-4 font-semibold text-brand-600">Underpinning</th>
                  <th className="py-3 px-4 font-semibold">Bench Footing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-medium">Cost Range</td>
                  <td className="py-3 px-4">$250-400/linear ft</td>
                  <td className="py-3 px-4">$175-280/linear ft</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Timeline</td>
                  <td className="py-3 px-4">6-10 weeks</td>
                  <td className="py-3 px-4">4-6 weeks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Floor Space</td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-medium">100% preserved</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-yellow-600 font-medium">75-85% usable</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Legal Suite Ready</td>
                  <td className="py-3 px-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </td>
                  <td className="py-3 px-4">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Structural Risk</td>
                  <td className="py-3 px-4">Higher (managed)</td>
                  <td className="py-3 px-4">Lower</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">ROI</td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-medium">Highest</span>
                  </td>
                  <td className="py-3 px-4">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which method is right for your basement? Our engineers will assess your specific situation.
          </p>
          <button className="bg-brand-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors">
            Get Professional Recommendation
          </button>
        </div>
      </div>
    </section>
  );
}