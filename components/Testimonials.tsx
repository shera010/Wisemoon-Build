'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah L.',
      location: 'Calgary, AB',
      rating: 5,
      text: 'The quality and finish are absolutely outstanding. Worth every penny. Gurpreet and his team transformed our master bedroom closet into something we see in luxury magazines. The attention to detail is incredible.',
      project: 'Master Bedroom Closet',
      image: 'https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Robert J.',
      location: 'Chestermere, AB',
      rating: 5,
      text: 'They made our mornings completely stress-free with a perfectly organized closet. Everything has its place now, and the soft-close drawers are such a nice touch. Professional installation from start to finish.',
      project: 'Walk-in Closet Organization',
      image: 'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Nancy K.',
      location: 'Airdrie, AB',
      rating: 5,
      text: 'From initial design to final install, Wise Moon delivered exactly what we wanted and more. The mudroom has been a complete game-changer for our family. No more shoes scattered around!',
      project: 'Family Mudroom',
      image: 'https://images.pexels.com/photos/6585743/pexels-photo-6585743.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Michael P.',
      location: 'Okotoks, AB',
      rating: 5,
      text: 'Exceptional craftsmanship and customer service throughout the entire process. They listened to our needs and created a pantry that maximizes every single inch. The pull-out shelves make everything so accessible.',
      project: 'Kitchen Pantry Renovation',
      image: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      name: 'Diana T.',
      location: 'Cochrane, AB',
      rating: 5,
      text: 'Our home office is now a space we actually want to work in every day. The built-in desk and shelving system is both beautiful and incredibly functional. Highly recommend Wise Moon Build.',
      project: 'Home Office Built-ins',
      image: 'https://images.pexels.com/photos/6585614/pexels-photo-6585614.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Client Stories
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what homeowners across Calgary 
            say about their experience with Wise Moon Build.
          </p>
        </div>

        {/* Testimonial Showcase */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={`${testimonials[currentTestimonial].project} project`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/20" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-slate-200 pt-6">
                  <div className="font-semibold text-slate-900 text-lg mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-slate-600 mb-2">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white border-slate-200 hover:border-blue-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white border-slate-200 hover:border-blue-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Start your transformation with a free consultation today.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;