import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Package, 
  Monitor, 
  ChefHat, 
  Shirt, 
  Tv, 
  Car,
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Custom Closets',
      description: 'Walk-in and reach-in closets with premium finishes and intelligent storage solutions.',
      features: ['Adjustable shelving systems', 'Soft-close drawers', 'LED lighting integration', 'Velvet-lined compartments'],
      price: 'From $2,000',
      timeline: '2-3 weeks',
      image: 'https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      popular: true
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Mudroom Solutions',
      description: 'Organized entryways with built-in storage for the whole family.',
      features: ['Built-in bench seating', 'Individual lockers', 'Shoe organization', 'Coat storage'],
      price: 'From $2,500',
      timeline: '2 weeks',
      image: 'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Home Office Built-ins',
      description: 'Productive workspaces with custom desks and storage solutions.',
      features: ['Built-in desk systems', 'Filing solutions', 'Cable management', 'Display shelving'],
      price: 'From $3,000',
      timeline: '3 weeks',
      image: 'https://images.pexels.com/photos/6585614/pexels-photo-6585614.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: 'Kitchen Pantries',
      description: 'Maximize kitchen efficiency with smart pantry organization.',
      features: ['Pull-out shelving', 'Spice organization', 'Appliance storage', 'Custom sizing'],
      price: 'From $1,500',
      timeline: '1-2 weeks',
      image: 'https://images.pexels.com/photos/6585743/pexels-photo-6585743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: 'Laundry Storage',
      description: 'Transform laundry rooms with functional cabinetry solutions.',
      features: ['Over-washer cabinets', 'Built-in hampers', 'Folding stations', 'Utility storage'],
      price: 'From $1,800',
      timeline: '1-2 weeks',
      image: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: 'Entertainment Centers',
      description: 'Media walls and entertainment units with concealed wiring.',
      features: ['Custom media walls', 'Floating shelves', 'Wire management', 'Component storage'],
      price: 'From $2,800',
      timeline: '2-3 weeks',
      image: 'https://images.pexels.com/photos/6585595/pexels-photo-6585595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Premium Storage Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From custom closets to complete home organization systems, we create beautiful, 
            functional storage that transforms how you live and work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-blue-200 relative overflow-hidden">
              {service.popular && (
                <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Price and Timeline */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-slate-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="font-semibold text-blue-600">{service.price}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{service.timeline}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 group/btn transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-slate-600 mb-8 text-lg max-w-2xl mx-auto">
            Get a free in-home consultation and custom design proposal. We'll help you create 
            the perfect storage solution for your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 transition-all duration-300">
              View Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;