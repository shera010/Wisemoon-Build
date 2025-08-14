import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      'Custom Closets',
      'Mudroom Solutions',
      'Home Office Built-ins',
      'Kitchen Pantries',
      'Laundry Storage',
      'Entertainment Centers'
    ],
    company: [
      'About Us',
      'Our Process',
      'Client Reviews',
      'FAQ',
      'Warranty Info',
      'Blog'
    ],
    serviceAreas: [
      'Calgary',
      'Airdrie',
      'Okotoks',
      'Chestermere',
      'Cochrane'
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Wise Moon Build</h3>
                <p className="text-xs text-slate-400">Premium Storage Solutions</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Calgary's premier custom storage specialists. We create beautiful, functional 
              solutions that transform your home and enhance your daily life.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+15875002477" className="text-slate-300 hover:text-white transition-colors">
                  +1 (587) 500-2477
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@wisemoonbuild.com" className="text-slate-300 hover:text-white transition-colors">
                  info@wisemoonbuild.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Calgary, Alberta, Canada
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-slate-300 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Service Areas</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.serviceAreas.map((area, index) => (
                <li key={index} className="text-slate-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
            
            {/* Business Hours */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Clock className="w-4 h-4 text-blue-400 mr-2" />
                <span className="font-semibold text-sm">Hours</span>
              </div>
              <div className="text-slate-300 text-sm space-y-1">
                <div>Mon-Fri: 9am-6pm</div>
                <div>Sat: 10am-4pm</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="font-semibold text-sm">Free Consultation</span>
              </div>
              <p className="text-slate-300 text-xs mb-3">
                Ready to get started?
              </p>
              <a 
                href="tel:+15875002477" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Today
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Wise Moon Build. All rights reserved.
              <span className="mx-2 text-slate-600">•</span>
              <span className="text-slate-500">Formerly Bespoke Wooden Creations</span>
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;