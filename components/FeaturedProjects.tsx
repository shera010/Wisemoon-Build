'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, ArrowLeft, ArrowRight, Eye } from 'lucide-react';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Luxury Walk-In Closet Transformation',
      location: 'Calgary, AB',
      timeline: '3 weeks',
      investment: '$4,500',
      description: 'Complete master bedroom closet renovation featuring 14 linear feet of hanging space, integrated LED lighting system, and custom velvet-lined jewelry drawers. Premium walnut finish with soft-close hardware throughout.',
      features: [
        '14 linear feet of premium hanging space',
        'Integrated LED lighting system',
        'Custom velvet-lined jewelry drawers',
        'Soft-close hardware throughout',
        'Premium walnut veneer finish',
        'Adjustable shelving system'
      ],
      beforeImage: 'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      afterImage: 'https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Custom Closets',
      featured: true
    },
    {
      title: 'Modern Family Mudroom',
      location: 'Airdrie, AB',
      timeline: '2 weeks',
      investment: '$3,200',
      description: 'Complete entryway transformation with built-in bench seating, hidden shoe storage drawers, and individual lockers for each family member. Overhead cabinets maximize vertical storage space.',
      features: [
        'Built-in bench with storage',
        'Hidden shoe storage drawers',
        'Individual family lockers',
        'Overhead storage cabinets',
        'Coat hooks and organization',
        'Durable laminate finish'
      ],
      beforeImage: 'https://images.pexels.com/photos/6969827/pexels-photo-6969827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      afterImage: 'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Mudrooms'
    },
    {
      title: 'Efficient Kitchen Pantry',
      location: 'Okotoks, AB',
      timeline: '1 week',
      investment: '$2,800',
      description: 'Space-maximizing pantry design with pull-out spice racks, double-height shelving for appliances, and a sliding barn door that saves floor space while adding rustic charm.',
      features: [
        'Pull-out spice organization system',
        'Double-height appliance shelving',
        'Space-saving sliding barn door',
        'Adjustable shelf configurations',
        'Custom depth optimization',
        'Easy-access storage solutions'
      ],
      beforeImage: 'https://images.pexels.com/photos/6969829/pexels-photo-6969829.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      afterImage: 'https://images.pexels.com/photos/6585743/pexels-photo-6585743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Pantries'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-[#EAD32C]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#EAD32C]/20 text-[#B8860B] rounded-full text-sm font-medium mb-4">
            Featured Work
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Recent Project Showcase
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our latest transformations across Calgary. Each project showcases 
            our commitment to exceptional craftsmanship and innovative design solutions.
          </p>
        </div>

        {/* Project Showcase */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Project Images */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Before Image */}
              <div className="relative group">
                <img
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-100 text-red-800 border-red-200">
                    Before
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm opacity-90">Original space before transformation</p>
                </div>
              </div>
              
              {/* After Image */}
              <div className="relative group">
                <img
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    After
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm opacity-90">Completed custom storage solution</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl border-slate-200"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl border-slate-200"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-[#EAD32C] to-[#D4AF37] text-white px-4 py-2">
                  Featured Project
                </Badge>
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <Badge className="bg-[#EAD32C]/20 text-[#B8860B] mb-4">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Project Highlights:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-[#EAD32C] rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="bg-gradient-to-r from-[#EAD32C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C19A10] text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Eye className="w-4 h-4 mr-2" />
                  View More Projects
                </Button>
              </div>

              {/* Project Stats */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-6">Project Details</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#EAD32C]/20 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5 text-[#B8860B]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Location</p>
                        <p className="font-semibold text-slate-900">{project.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#EAD32C]/20 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 text-[#B8860B]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Timeline</p>
                        <p className="font-semibold text-slate-900">{project.timeline}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#EAD32C]/20 rounded-lg flex items-center justify-center mr-4">
                        <DollarSign className="w-5 h-5 text-[#B8860B]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Investment</p>
                        <p className="font-semibold text-slate-900">{project.investment}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <Button variant="outline" className="w-full border-[#EAD32C]/30 text-[#B8860B] hover:bg-[#EAD32C]/10">
                      Get Similar Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-[#EAD32C] w-8' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`View project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
