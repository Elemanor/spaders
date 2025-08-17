import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FileText, DollarSign, Clock, Shield, CheckSquare, AlertTriangle } from 'lucide-react';

export default function Permits() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Toronto Permits & Compliance Made Simple
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We handle all permit requirements and ensure full compliance with OBC 2024/25 
            (in force January 1, 2025) and City of Toronto regulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What the City Needs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-600" />
                What Toronto Requires for Underpinning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Required Drawings:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Site plan showing property boundaries and existing structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Foundation/underpinning plans showing stages and total linear metres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Structural details and sequencing diagrams</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Required Forms:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Application to Construct or Demolish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Designer Information (Schedule 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Commitment to General Review by Engineer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Tree Declaration Form (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Rental Housing Demolition screening</span>
                    </li>
                  </ul>
                </div>
                
                <a 
                  href="https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/small-residential-project-guides/residential-underpinning-including-basement-entrances/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm"
                >
                  View Official Toronto Requirements →
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Fees and Timeline */}
          <div className="space-y-6">
            <Card className="border-2 border-brand-200 bg-brand-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-brand-600" />
                  Toronto Permit Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-2xl font-bold text-brand-600 mb-2">
                    $11.89 per linear metre
                  </p>
                  <p className="text-sm text-gray-600">
                    Effective January 1, 2025 • City of Toronto
                  </p>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  We calculate the exact linear metres from your engineered sequence drawings 
                  and include the permit fee in your detailed quote—no hidden add-ons.
                </p>
                <div className="bg-accent-50 rounded p-3">
                  <p className="text-sm font-medium text-accent-700">
                    Example: 100 ft perimeter = 30.48m = $362 permit fee
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-600" />
                  Review Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-100 rounded-full p-1 mt-0.5">
                      <Clock className="h-3 w-3 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-medium">House Stream Review</p>
                      <p className="text-sm text-gray-600">
                        OBC targets ~10 business days for residential permits
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <CheckSquare className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Express Services Available</p>
                      <p className="text-sm text-gray-600">
                        Expedited review for qualifying projects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 rounded-full p-1 mt-0.5">
                      <AlertTriangle className="h-3 w-3 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium">Actual Timeline Varies</p>
                      <p className="text-sm text-gray-600">
                        Depends on submission completeness and City workload
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Inspections */}
        <Card>
          <CardHeader>
            <CardTitle>Required Inspections & Compliance Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border-l-4 border-brand-600 pl-4">
                <h4 className="font-semibold mb-1">Pre-Construction</h4>
                <p className="text-sm text-gray-600">
                  Verify permit posted, tree protection, sediment control
                </p>
              </div>
              <div className="border-l-4 border-brand-500 pl-4">
                <h4 className="font-semibold mb-1">During Excavation</h4>
                <p className="text-sm text-gray-600">
                  Stage inspections for each underpinning pit sequence
                </p>
              </div>
              <div className="border-l-4 border-brand-400 pl-4">
                <h4 className="font-semibold mb-1">Before Backfill</h4>
                <p className="text-sm text-gray-600">
                  Waterproofing, weeping tile, foundation wall inspection
                </p>
              </div>
              <div className="border-l-4 border-brand-300 pl-4">
                <h4 className="font-semibold mb-1">Final Inspection</h4>
                <p className="text-sm text-gray-600">
                  Complete work verification to close permit
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WSIB Section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="bg-brand-100 p-3 rounded-lg shrink-0">
              <Shield className="h-6 w-6 text-brand-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                WSIB Coverage & Safety Compliance
              </h3>
              <p className="text-gray-700 mb-4">
                We operate under WSIB expanded compulsory coverage for construction businesses. 
                We provide a WSIB Clearance Certificate for every project and verify all subcontractor coverage. 
                Note that homeowner-only exemptions don't apply to our commercial scope.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4">
                  <h4 className="font-semibold mb-2">What We Provide:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• WSIB Clearance Certificate</li>
                    <li>• Liability insurance proof</li>
                    <li>• Engineer oversight documentation</li>
                    <li>• Safety program compliance</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-4">
                  <h4 className="font-semibold mb-2">Compliance Standards:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• OBC 2024/25 (effective Jan 1, 2025)</li>
                    <li>• OHSA underpinning hazards</li>
                    <li>• Toronto building bylaws</li>
                    <li>• Professional engineer standards</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <a 
                  href="https://www.wsib.ca/en/businesses/registration-and-coverage/expanded-compulsory-coverage-construction-industry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 underline hover:text-brand-700 text-sm"
                >
                  WSIB Expanded Coverage Info →
                </a>
                <a 
                  href="https://www.publications.gov.on.ca/store/20170501121/Free_Download_Files/301720.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 underline hover:text-brand-700 text-sm"
                >
                  OBC 2024 Compendium →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}