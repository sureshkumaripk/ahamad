'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AhamadAgenciesNavbar from '@/components/AhamadAgenciesNavbar';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  MessageCircle, 
  Mail, 
  MapPin,
  Wrench,
  Hammer,
  Shovel,
  Sprout,
  Building,
  Zap,
  Shield,
  Settings
} from 'lucide-react';

export default function AgriConstructionTools() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subcategories = [
    {
      icon: Shovel,
      title: 'Hand Tools',
      description: 'Essential hand tools for farming and construction work',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Hammer,
      title: 'Power Tools',
      description: 'Electric and pneumatic tools for heavy-duty work',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Mechanical Tools',
      description: 'Wrenches, pliers, and mechanical equipment',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Sprout,
      title: 'Garden Tools',
      description: 'Specialized tools for gardening and landscaping',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Building,
      title: 'Construction Equipment',
      description: 'Heavy construction and building equipment',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Zap,
      title: 'Safety Equipment',
      description: 'Protective gear and safety equipment',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Shield,
      title: 'Measuring Tools',
      description: 'Precision measuring and marking tools',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Maintenance Tools',
      description: 'Tools for equipment maintenance and repair',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <main className="min-h-screen">
      <AhamadAgenciesNavbar />
      <div className="min-h-screen bg-gradient-to-br from-accent-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-orange-400/10 to-blue-400/10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <Link 
              href="/ahamad-agencies" 
              className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-800 transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to AHAMAD Agencies
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-800 mb-6">
              Agri & Construction Tools
            </h1>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto mb-8">
              Comprehensive range of professional agricultural and construction tools for all your farming and building needs
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">8+</div>
                <div className="text-sm text-accent-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">500+</div>
                <div className="text-sm text-accent-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">15+</div>
                <div className="text-sm text-accent-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">100%</div>
                <div className="text-sm text-accent-600">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Explore Our Tool Categories
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Professional-grade tools for every agricultural and construction need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {subcategories.map((subcategory, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-100 hover:border-secondary-200 transform hover:-translate-y-2 overflow-hidden relative h-40">
                  <div className={`absolute top-0 right-0 w-3/4 h-full bg-gradient-to-br ${subcategory.color} rounded-l-full opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-center pl-6 pr-32">
                    <h3 className="text-lg font-bold text-accent-800 mb-2">{subcategory.title}</h3>
                    <p className="text-accent-600 text-sm leading-relaxed">{subcategory.description}</p>
                  </div>
                  
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-10">
                    <subcategory.icon className="w-8 h-8 text-accent-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Why Choose Our Tools?
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Quality, durability, and performance you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-accent-800 mb-2">Premium Quality</h3>
              <p className="text-accent-600">Professional-grade tools built to last</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-accent-800 mb-2">High Performance</h3>
              <p className="text-accent-600">Tools designed for maximum efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-accent-800 mb-2">Expert Support</h3>
              <p className="text-accent-600">Professional guidance and after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Ready to find the perfect tools for your needs? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-accent-50 rounded-2xl p-8 text-center border border-accent-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-accent-800 mb-2">WhatsApp</h3>
              <p className="text-accent-600 mb-4">Quick response and support</p>
              <a 
                href="https://wa.me/919842448051?text=Hi, I'm interested in Agri & Construction Tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </a>
            </div>

            <div className="bg-accent-50 rounded-2xl p-8 text-center border border-accent-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-accent-800 mb-2">Email</h3>
              <p className="text-accent-600 mb-4">Detailed inquiries and quotes</p>
              <a 
                href="mailto:ahamadandco@yahoo.co.in?subject=Agri & Construction Tools Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>

            <div className="bg-accent-50 rounded-2xl p-8 text-center border border-accent-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-accent-800 mb-2">Visit Us</h3>
              <p className="text-accent-600 mb-4">62, Madurai Rd, Palakarai, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001</p>
              <a 
                href="https://maps.google.com/?q=62, Madurai Rd, Palakarai, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/919842448051?text=Hi, I'm interested in Agri & Construction Tools"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 ${
          isScrolled ? 'animate-bounce' : ''
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      </div>
      <Footer />
    </main>
  );
}