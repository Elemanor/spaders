import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Shield, CheckCircle, Calculator, Info, ArrowRight, X } from 'lucide-react';

/**
 * Business constants — adjust as needed
 * NOTE: Toronto permit fee is treated as a constant in this tool.
 */
const TORONTO_PERMIT_FEE_PER_M = 11.89; // linear metre
const ABS_MIN_JOB_COST = 45_000;
const BASE_MIN_PER_LF = 300; // $/linear foot baseline
const BASE_MAX_PER_LF = 500; // $/linear foot baseline
const M_TO_FT = 3.28084;

/** Utilities */
const currencyCA = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
const money2 = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2 });
const num = new Intl.NumberFormat('en-CA');

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/** Pure estimate calculator to keep UI clean and testable */
function computeEstimate({ perimeterM, depthMm, access, soil }: {
  perimeterM: number;
  depthMm: number;
  access: string;
  soil: string;
}) {
  const perimeterFt = perimeterM * M_TO_FT;

  // Start with base rates per linear foot
  let minRate = BASE_MIN_PER_LF;
  let maxRate = BASE_MAX_PER_LF;

  // Depth adjustments
  if (depthMm > 600) {
    const extra = (depthMm - 600) / 100; // per 100 mm
    minRate += extra * 50;
    maxRate += extra * 80;
  } else if (depthMm < 600) {
    const less = (600 - depthMm) / 100;
    minRate -= less * 20;
    maxRate -= less * 30;
  }

  // Access multipliers
  const accessMult =
    access === 'limited' ? [1.15, 1.2] :
    access === 'difficult' ? [1.3, 1.4] :
    [1, 1];
  minRate *= accessMult[0];
  maxRate *= accessMult[1];

  // Soil multipliers
  const soilMult =
    soil === 'sand' ? [0.95, 0.95] :
    soil === 'rock' ? [1.5, 1.6] :
    [1, 1]; // clay or unknown
  minRate *= soilMult[0];
  maxRate *= soilMult[1];

  // Convert to base costs
  let minCost = Math.round(perimeterFt * minRate);
  let maxCost = Math.round(perimeterFt * maxRate);

  // Enforce business floors
  if (minCost < ABS_MIN_JOB_COST) minCost = ABS_MIN_JOB_COST;
  const minViableMax = Math.max(Math.round(ABS_MIN_JOB_COST * 1.5), Math.round(minCost * 1.25));
  if (maxCost < minViableMax) maxCost = minViableMax;

  return {
    minCost,
    maxCost,
    perimeterFt,
    minRate: Math.round(minRate),
    maxRate: Math.round(maxRate),
  };
}

export default function Hero() {
  // Estimator inputs
  const [perimeter, setPerimeter] = useState(30); // metres
  const [depth, setDepth] = useState(600); // mm to lower
  const [access, setAccess] = useState('good'); // 'good' | 'limited' | 'difficult'
  const [soil, setSoil] = useState('clay');     // 'clay' | 'sand' | 'rock' | 'unknown'
  const [targetSuite, setTargetSuite] = useState(false);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null); // return focus to this after close
  const nameInputRef = useRef<HTMLInputElement>(null);

  // IDs for a11y (React 18+)
  const perimeterId = useId();
  const depthId = useId();
  const accessId = useId();
  const soilId = useId();
  const suiteId = useId();

  // Derived values, memoized
  const permitFee = useMemo(() => perimeter * TORONTO_PERMIT_FEE_PER_M, [perimeter]);

  const estimate = useMemo(
    () => computeEstimate({ perimeterM: perimeter, depthMm: depth, access, soil }),
    [perimeter, depth, access, soil]
  );

  // Open/close modal helpers (a11y)
  const openModal = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (e?.currentTarget) triggerRef.current = e.currentTarget;
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    // Return focus to trigger after close for keyboard users
    if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
      triggerRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKeyDown);
    // Attempt to focus the first field
    const t = setTimeout(() => nameInputRef.current?.focus(), 0);
    // Prevent body scroll while modal open
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      clearTimeout(t);
      document.body.style.overflow = original;
    };
  }, [showModal, closeModal]);

  // Slider fill background (clamped)
  const PERIM_MIN = 10;
  const PERIM_MAX = 60;
  const sliderPct = useMemo(() => {
    const pct = ((perimeter - PERIM_MIN) / (PERIM_MAX - PERIM_MIN)) * 100;
    return clamp(pct, 0, 100);
  }, [perimeter]);

  const onSubmitAssessment = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Example payload – replace with your API call
    const payload: any = Object.fromEntries(formData.entries());
    // You can add estimator context to the payload:
    payload.estimator = { perimeter, depth, access, soil, targetSuite, permitFee, ...estimate };

    // eslint-disable-next-line no-console
    console.log('Assessment request:', payload);
    closeModal();
    // TODO: fire toast/notification
  }, [perimeter, depth, access, soil, targetSuite, permitFee, estimate, closeModal]);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center py-6 sm:py-8 md:py-12 mt-16 sm:mt-20"
        aria-labelledby="hero-title"
      >
        {/* Background with Pattern and Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
          <div className="absolute inset-0 opacity-30">
            <img
              src="/images/gallery/unfinished-basement-sump.png"
              alt=""
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

              <h1 id="hero-title" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 relative z-10">
                Basement Underpinning in Toronto —{' '}
                <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mt-1">
                  Lower Your Basement, Strengthen Your Home
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Engineered, permitted & WSIB‑covered underpinning to OBC 2024 (in force Jan 1, 2025).
                Toronto's official fee: <strong>{money2.format(TORONTO_PERMIT_FEE_PER_M)}/linear metre</strong>—we calculate and include it in your quote.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 mb-4 hidden sm:block">
                Unlock full‑height living space with basement underpinning in Toronto—designed by structural engineers,
                permitted and inspected to Ontario's current Building Code. We handle drawings, permits, and required
                inspections, provide WSIB Clearance, and include the Toronto linear‑metre permit fee in your estimate
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
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Engineer‑stamped</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">4.8★ (187 reviews)</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">10‑Year Warranty</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                  onClick={openModal}
                >
                  Get a Free Site Assessment
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </Button>

                {/* Use tel: link for better mobile behavior */}
                <a
                  href="tel:14375450067"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 text-blue-700 bg-white/80 backdrop-blur-sm hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Call Spaders at 437-545-0067"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" aria-hidden="true" />
                  437‑545‑0067
                </a>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-3">
                Prefer to talk? Call 8:00 AM – 6:00 PM Monday‑Friday | spaders.ca
              </p>
            </div>

            {/* Right Content - Quick Estimator */}
            <div className="mt-8 lg:mt-0">
              <Card className="shadow-2xl border border-white/20 max-w-md mx-auto lg:max-w-none bg-white/95 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600"></div>
                <CardHeader className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-3 sm:py-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5" aria-hidden="true"></div>
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base relative z-10">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Calculator className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </div>
                    Quick Estimator v2
                  </CardTitle>
                  <p className="text-blue-100 text-xs sm:text-sm">Depth affects price!</p>
                </CardHeader>

                <CardContent className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {/* Perimeter Input */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor={perimeterId} className="text-xs font-semibold text-gray-700">
                        Perimeter to underpin
                      </label>
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 rounded">
                        {num.format(perimeter)}m
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        id={perimeterId}
                        type="range"
                        value={perimeter}
                        onChange={(e) => setPerimeter(clamp(Number(e.target.value), PERIM_MIN, PERIM_MAX))}
                        min={PERIM_MIN}
                        max={PERIM_MAX}
                        step="1"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                        style={{
                          background: `linear-gradient(to right, #2563eb 0%, #2563eb ${sliderPct}%, #e5e7eb ${sliderPct}%, #e5e7eb 100%)`,
                        }}
                        aria-valuemin={PERIM_MIN}
                        aria-valuemax={PERIM_MAX}
                        aria-valuenow={perimeter}
                        aria-label="Perimeter to underpin in metres"
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
                      <span>{PERIM_MIN}m</span>
                      <span>{PERIM_MAX}m</span>
                    </div>
                  </div>

                  {/* Depth Input - Buttons */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-gray-700" id={depthId}>
                        Depth to lower
                      </label>
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 rounded">
                        {num.format(depth)}mm
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1" role="group" aria-labelledby={depthId}>
                      {[300, 600, 900].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDepth(d)}
                          aria-pressed={depth === d}
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
                    <label htmlFor={accessId} className="block text-xs font-semibold text-gray-700 mb-1">
                      Site Access
                    </label>
                    <select
                      id={accessId}
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
                    <label htmlFor={soilId} className="block text-xs font-semibold text-gray-700 mb-1">
                      Soil Type (if known)
                    </label>
                    <select
                      id={soilId}
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
                      id={suiteId}
                      checked={targetSuite}
                      onChange={(e) => setTargetSuite(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={suiteId} className="text-xs text-gray-700">
                      Planning a legal basement suite (1.95m min)
                    </label>
                  </div>

                  {/* Results */}
                  <div className="border-t border-gray-200 pt-2">
                    <div className="space-y-2">
                      {/* Permit Fee */}
                      <div className="bg-blue-50 rounded p-2">
                        <div className="flex items-start gap-1">
                          <Info className="h-3 w-3 text-blue-600 mt-0.5" aria-hidden="true" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-700">Toronto Permit Fee:</p>
                            <p className="text-sm font-bold text-blue-600">
                              {money2.format(permitFee)}
                            </p>
                            <p className="text-xs text-gray-600">
                              {num.format(perimeter)}m × {money2.format(TORONTO_PERMIT_FEE_PER_M)}/m
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Construction Range */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded p-2 border border-blue-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          💰 Construction Range (Depth: {num.format(depth)}mm)
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {currencyCA.format(estimate.minCost)} – {currencyCA.format(estimate.maxCost)}
                        </p>
                        <p className="text-xs text-gray-600">
                          *Updates with depth & site factors. Final after site assessment.
                        </p>
                      </div>

                      {/* Suite Height Check */}
                      {targetSuite && depth >= 600 && (
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-xs text-green-800">
                            ✓ Selected depth may support 1.95m finished ceiling for legal suite (verify on site).
                          </p>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 mt-2 italic">
                      Planning tool only. Final pricing after site visit.
                    </p>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 py-1.5 text-xs font-semibold"
                    onClick={openModal}
                  >
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
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => {
            // close on backdrop click
            if (e.currentTarget === e.target) closeModal();
          }}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl my-8 focus:outline-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assessment-title"
          >
            <div className="bg-blue-600 p-4 sm:p-6 rounded-t-2xl text-white relative">
              <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">SPADERS</div>
              <h3 id="assessment-title" className="text-xl sm:text-2xl font-bold">Free Site Assessment</h3>
              <p className="text-blue-100 mt-1 text-sm sm:text-base">Takes less than 60 seconds</p>
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 p-1 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="p-4 sm:p-6 space-y-3 sm:space-y-4" onSubmit={onSubmitAssessment}>
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700" htmlFor="name">
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  ref={nameInputRef}
                  required
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700" htmlFor="address">
                  Property Address*
                </label>
                <input
                  id="address"
                  name="address"
                  required
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                  placeholder="123 Main St, Toronto"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700" htmlFor="phone">
                  Phone*
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                  placeholder="437-545-0067"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700" htmlFor="height">
                  Target Finished Height
                </label>
                <select
                  id="height"
                  name="targetHeight"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                >
                  <option>7 feet (2.13m)</option>
                  <option>8 feet (2.44m)</option>
                  <option>9 feet (2.74m)</option>
                  <option>Legal suite height (1.95m min)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700" htmlFor="photos">
                  Upload Photos (optional)
                </label>
                <input
                  id="photos"
                  name="photos"
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                />
                <p className="text-xs text-gray-500 mt-1">Basement, stairs, exterior foundation</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 py-2.5 sm:py-3 text-sm sm:text-base">
                  Book Assessment
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeModal}
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