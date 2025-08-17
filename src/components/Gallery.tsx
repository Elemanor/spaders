import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Calendar, Ruler, Star, ArrowRight, Eye, X } from 'lucide-react';

const projects = [
  {
    image: '/images/gallery/finished-basement-1.png',
    neighborhood: 'Leslieville',
    type: 'Victorian Semi-Detached',
    heightGained: '24 inches',
    duration: '7 weeks',
    year: '2024',
    testimonial: 'Professional team, stayed on schedule and budget.',
    rating: 5,
    client: 'Sarah M.',
    beforeAfter: {
      before: '/images/gallery/basement-before-underpinning.png',
      after: '/images/gallery/finished-basement-1.png'
    }
  },
  {
    image: '/images/gallery/finished-basement-2.png',
    neighborhood: 'High Park',
    type: 'Edwardian Detached',
    heightGained: '30 inches',
    duration: '8 weeks',
    year: '2024',
    testimonial: 'Exceeded expectations. Now have a legal rental suite!',
    rating: 5,
    client: 'Michael R.',
    beforeAfter: {
      before: '/images/gallery/before-underpinning.png',
      after: '/images/gallery/finished-basement-2.png'
    }
  },
  {
    image: '/images/gallery/finished-basement-3.png',
    neighborhood: 'The Beaches',
    type: '1920s Bungalow',
    heightGained: '28 inches',
    duration: '6 weeks',
    year: '2024',
    testimonial: 'Clean, organized, and great communication throughout.',
    rating: 5,
    client: 'Jennifer L.',
    beforeAfter: {
      before: '/images/gallery/unfinished-basement-after.png',
      after: '/images/gallery/finished-basement-3.png'
    }
  },
  {
    image: '/images/gallery/finished-basement-4.png',
    neighborhood: 'Roncesvalles',
    type: 'Row House',
    heightGained: '26 inches',
    duration: '7 weeks',
    year: '2023',
    testimonial: 'Handled permit complexities smoothly. Very knowledgeable.',
    rating: 5,
    client: 'David K.',
    beforeAfter: {
      before: '/images/gallery/unfinished-basement-sump.png',
      after: '/images/gallery/finished-basement-4.png'
    }
  },
  {
    image: '/images/gallery/finished-basement-5.png',
    neighborhood: 'Danforth',
    type: 'Post-War Semi',
    heightGained: '32 inches',
    duration: '9 weeks',
    year: '2023',
    testimonial: 'Worth every penny. Basement is now our favorite space.',
    rating: 5,
    client: 'Emily S.',
    beforeAfter: {
      before: '/images/gallery/basement-before-underpinning.png',
      after: '/images/gallery/finished-basement-5.png'
    }
  },
  {
    image: '/images/gallery/finished-basement-6.png',
    neighborhood: 'The Junction',
    type: 'Century Home',
    heightGained: '24 inches',
    duration: '8 weeks',
    year: '2023',
    testimonial: 'Engineers were thorough. Work passed all inspections first time.',
    rating: 5,
    client: 'Robert H.',
    beforeAfter: {
      before: '/images/gallery/furnace-room.png',
      after: '/images/gallery/finished-basement-6.png'
    }
  }
];

const badges = [
  { name: 'WSIB Clearance', icon: '✓', color: 'blue', description: 'Current certificate' },
  { name: 'Licensed & Insured', icon: '🛡️', color: 'green', description: '$5M liability' },
  { name: 'Engineer Stamped', icon: '📐', color: 'purple', description: 'P.Eng oversight' },
  { name: 'BBB Accredited', icon: 'A+', color: 'yellow', description: 'A+ rating' },
  { name: '10-Year Warranty', icon: '🏆', color: 'red', description: 'Structural warranty' },
  { name: 'TCA Member', icon: '🏗️', color: 'indigo', description: 'Toronto Construction' }
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            500+ Projects Completed
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Toronto Basement
            <span className="block text-blue-600">Transformation Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every neighborhood has unique challenges. See how we've helped homeowners across the GTA 
            transform their basements into valuable living spaces.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden cursor-pointer bg-white"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.neighborhood} basement project`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur rounded-full text-xs font-bold text-gray-900">
                    {project.year}
                  </span>
                  <div className="bg-white/95 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-4 w-4 text-gray-900" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm">"{project.testimonial}"</p>
                  <p className="text-xs mt-2 font-semibold">— {project.client}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-bold text-gray-900">{project.neighborhood}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.type}</p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Height Added</p>
                    <p className="font-bold text-gray-900">{project.heightGained}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Timeline</p>
                    <p className="font-bold text-gray-900">{project.duration}</p>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges - Enhanced */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Why Toronto Homeowners Trust Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-6 mb-3 group-hover:bg-blue-50 transition-colors duration-300">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <p className="text-sm font-bold text-gray-900">{badge.name}</p>
                </div>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews - Enhanced */}
        <div className="text-center bg-blue-700 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-8">What Our Clients Say</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-8 w-8 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-white/30 text-white/30'}`} />
                ))}
              </div>
              <p className="text-5xl font-black mb-2">4.9</p>
              <p className="text-blue-100">Average Rating</p>
            </div>
            <div className="text-left max-w-md">
              <p className="text-2xl font-bold mb-2">187+ Verified Reviews</p>
              <p className="text-blue-100 mb-6">
                Read what real homeowners say about their basement transformation experience with us.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Read All Reviews
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.neighborhood} Project</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Before</h4>
                  <img 
                    src={selectedProject.beforeAfter.before} 
                    alt="Before renovation"
                    className="w-full rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">After</h4>
                  <img 
                    src={selectedProject.beforeAfter.after} 
                    alt="After renovation"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Project Details</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Property Type</p>
                    <p className="font-semibold">{selectedProject.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Height Gained</p>
                    <p className="font-semibold">{selectedProject.heightGained}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{selectedProject.duration}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{selectedProject.testimonial}"</p>
                  <p className="text-sm text-gray-600 mt-2">— {selectedProject.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}