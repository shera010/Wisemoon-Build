import { ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Happy Clients' },
    { icon: <Award className="w-5 h-5" />, value: '5+', label: 'Years Experience' },
    { icon: <Star className="w-5 h-5" />, value: '5.0', label: 'Average Rating' },
  ];

  const benefits = [
    'Free in-home design consultation',
    'Premium materials & soft-close hardware',
    'Professional installation team',
    '2-year comprehensive warranty'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/6585614/pexels-photo-6585614.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Calgary's #1 Custom Storage Specialists
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Transform Your Space with
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Premium Storage
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Custom closets, wardrobes, mudrooms, and cabinetry that combine stunning design 
              with intelligent functionality. Every project is crafted to perfection.
            </p>
            
            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:ml-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Custom closet installation"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl" />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Project Complete</div>
                    <div className="text-sm text-slate-600">Another happy client!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Areas */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-600">
            <strong className="text-slate-900">Proudly Serving:</strong> Calgary • Airdrie • Okotoks • Chestermere • Cochrane
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;