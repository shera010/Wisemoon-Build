import { Award, Clock, Heart, Shield, Users, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Master Craftsmanship',
      description: 'Every detail is executed with precision and care by our skilled artisans.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Functional Beauty',
      description: 'We create storage solutions that are both stunning and supremely practical.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Reliable Timelines',
      description: 'We respect your time with honest schedules and punctual delivery.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Every project includes our comprehensive 2-year craftsmanship warranty.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-5 h-5" /> },
    { number: '5+', label: 'Years of Excellence', icon: <Award className="w-5 h-5" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { number: '5', label: 'Service Areas', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-[#EAD32C]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[#EAD32C]/20 text-[#B8860B] rounded-full text-sm font-medium mb-6">
              Our Story
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Crafting Excellence Since Day One
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded by master craftsman <strong>Gurpreet Singh Badwal</strong>, Wise Moon Build 
                (formerly Bespoke Wooden Creations) has been transforming Calgary homes since 2019. 
                Our rebrand in 2024 reflects our expanded expertise in comprehensive storage solutions.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                What started as a passion for woodworking has evolved into Calgary's premier 
                custom storage company. We combine traditional craftsmanship with modern design 
                principles to create spaces that truly enhance how our clients live.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Every project begins with understanding your unique needs and lifestyle. From there, 
                we design and build storage solutions that not only organize your space but elevate 
                your daily experience.
              </p>
            </div>

            <Button className="bg-gradient-to-r from-[#EAD32C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C19A10] text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Discover Our Process
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Master craftsman at work"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl" />
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#EAD32C] mb-1">500+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-[#EAD32C]/50">
                <div className="w-12 h-12 bg-[#EAD32C]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#EAD32C]/30 transition-colors">
                  <div className="text-[#B8860B]">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.number}</div>
                <div className="text-slate-600 font-medium">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These principles guide every decision we make and every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-[#EAD32C]/50 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#EAD32C]/20 to-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#EAD32C]/30 group-hover:to-[#D4AF37]/30 transition-all duration-300">
                  <div className="text-[#B8860B]">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
