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
    { step: '1', title: 'Free Consultation', description: 'We visit your space and discuss your vision' },
    { step: '2', title: 'Custom Design', description: '3D renderings and detailed material selection' },
    { step: '3', title: 'Expert Installation', description: 'Professional installation with 2-year warranty' }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern omitted for brevity */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#EAD32C]/20 text-[#B8860B] rounded-full text-sm font-medium mb-4">
            Get Started Today
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contact us today for your free design consultation. We'll discuss your project,
            visit your space, and provide a detailed estimate—at no cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact cards */}
          <div className="lg:col-span-1">
            {contactMethods.map((m, i) => (
              <a
                key={i}
                href={m.action}
                className={`block group rounded-2xl p-6 mb-6 transition-all ${
                  m.primary
                    ? 'bg-gradient-to-r from-[#EAD32C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C19A10] shadow-xl'
                    : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-xl ${m.primary ? 'bg-white/20' : 'bg-[#EAD32C]/20'}`}>
                    {m.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg mb-1">{m.title}</h4>
                    <p className={`font-medium mb-1 ${m.primary ? 'text-blue-900' : 'text-[#EAD32C]'}`}>{m.info}</p>
                    <p className={`text-sm ${m.primary ? 'text-blue-800' : 'text-slate-400'}`}>{m.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Main CTA card */}
          <div className="lg:col-span-2">
            <Card className="bg-white text-slate-900 h-full border-0 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold mb-4">Start Your Project Today</CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Here's how we'll bring your vision to life:
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* 3-step process */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {processSteps.map(s => (
                    <div key={s.step} className="text-center">
                      <div className="w-16 h-16 bg-[#EAD32C]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold text-[#B8860B] text-xl">{s.step}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{s.title}</h4>
                      <p className="text-sm text-slate-600">{s.description}</p>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-[#EAD32C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C19A10] text-white text-lg py-6 shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 587-500-2477
                  </Button>
                  <Button variant="outline" className="flex-1 border-2 border-[#EAD32C] text-[#B8860B] hover:bg-[#EAD32C]/10 text-lg py-6">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </div>

                {/* Service areas */}
                <div className="text-center pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-[#EAD32C] mr-2" />
                    <span className="font-semibold">Service Areas:</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {serviceAreas.map(a => (
                      <span
                        key={a.city}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          a.highlight
                            ? 'bg-[#EAD32C]/20 text-[#B8860B]'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {a.city}
                      </span>
                    ))}
                  </div>
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
