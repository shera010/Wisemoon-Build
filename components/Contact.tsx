import { Phone, Mail, Clock, MapPin, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us Today',
      info: '+1 (587) 500-2477',
      description: 'Speak directly with our team',
      action: 'tel:+15875002477',
      primary: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      info: 'info@wisemoonbuild.com',
      description: 'Get a detailed response within 24 hours',
      action: 'mailto:info@wisemoonbuild.com'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Text Message',
      info: '587-500-2477',
      description: 'Quick questions and scheduling',
      action: 'sms:+15875002477'
    }
  ];

  const serviceAreas = [
    { city: 'Calgary', highlight: true },
    { city: 'Airdrie' },
    { city: 'Okotoks' },
    { city: 'Chestermere' },
    { city: 'Cochrane' }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We visit your space and discuss your vision and needs'
    },
    {
      step: '2',
      title: 'Custom Design',
      description: '3D renderings and detailed material selection'
    },
    {
      step: '3',
      title: 'Expert Installation',
      description: 'Professional installation with 2-year warranty'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-4">
            Get Started Today
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contact us today for your free design consultation. We'll discuss your project, 
            visit your space, and provide a detailed estimate—all at no cost to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className={`block group transition-all duration-300 rounded-2xl p-6 ${
                    method.primary 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl' 
                      : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-xl ${
                      method.primary ? 'bg-white/20' : 'bg-blue-600/20'
                    } group-hover:scale-110 transition-transform`}>
                      <div className={method.primary ? 'text-white' : 'text-blue-400'}>
                        {method.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg mb-1">
                        {method.title}
                      </h4>
                      <p className={`font-medium mb-1 ${
                        method.primary ? 'text-blue-100' : 'text-blue-400'
                      }`}>
                        {method.info}
                      </p>
                      <p className={`text-sm ${
                        method.primary ? 'text-blue-100/80' : 'text-slate-400'
                      }`}>
                        {method.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-blue-400 mr-3" />
                <h4 className="font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-blue-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-blue-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white text-slate-900 h-full border-0 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold mb-4">
                  Start Your Project Today
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Here's how we'll bring your vision to life:
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="text-center relative">
                      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold text-blue-600 text-xl">{step.step}</span>
                      </div>
                      <h4 className="font-semibold mb-2 text-lg">{step.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-slate-200" />
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 587-500-2477
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </div>

                {/* Service Areas */}
                <div className="text-center pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-slate-900">Service Areas:</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {serviceAreas.map((area, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          area.highlight
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {area.city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Free Consultation Guarantee</h4>
                  <p className="text-slate-600 text-sm">
                    No obligation, no pressure. Just expert advice and a detailed project proposal.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;