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
  Zap,
  Shield,
  Grip,
  Wrench,
  Settings,
  Hammer
} from 'lucide-react';

export default function IndustrialHardware() {
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
      title: 'Fasteners',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      description: 'Essential fastening hardware for construction and manufacturing',
      tools: ['Bolts', 'Nuts', 'Washers', 'Screws', 'Rivets', 'Anchors']
    },
    {
      title: 'Hand Tools',
      icon: Wrench,
      color: 'from-green-500 to-green-600',
      description: 'Professional hand tools for industrial applications',
      tools: ['Wrenches', 'Pliers', 'Hammers', 'Screwdrivers', 'Sockets', 'Ratchets']
    },
    {
      title: 'Power Tools',
      icon: Settings,
      color: 'from-purple-500 to-purple-600',
      description: 'Heavy-duty power tools for industrial work',
      tools: ['Drills', 'Grinders', 'Saws', 'Impact Wrenches', 'Sanders', 'Cutters']
    },
    {
      title: 'Safety Equipment',
      icon: Hammer,
      color: 'from-red-500 to-red-600',
      description: 'Industrial safety gear and protective equipment',
      tools: ['Hard Hats', 'Safety Glasses', 'Gloves', 'Ear Protection', 'Respirators', 'Safety Vests']
    },
    {
      title: 'Measuring Tools',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Precision measuring instruments for industrial use',
      tools: ['Calipers', 'Micrometers', 'Levels', 'Squares', 'Tape Measures', 'Gauges']
    },
    {
      title: 'Hardware Accessories',
      icon: Grip,
      color: 'from-orange-500 to-orange-600',
      description: 'Supporting hardware and accessories',
      tools: ['Chains', 'Cables', 'Hooks', 'Clamps', 'Brackets', 'Hinges']
    }
  ];

  return (
    <main className="min-h-screen">
      <AhamadAgenciesNavbar />
      <div className="min-h-screen bg-gradient-to-br from-accent-50 to-secondary-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-orange-400/10"></div>
          
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
                Industrial & Hardware
              </h1>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto mb-8">
                Professional industrial hardware and tools for manufacturing, construction, and maintenance
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Fasteners</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Hand Tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Power Tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Grip className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subcategories Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
                Industrial Hardware Categories
              </h2>
              <p className="text-lg text-accent-600 max-w-2xl mx-auto">
                Complete range of industrial-grade hardware and tools for professional applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.title}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-100 hover:border-secondary-200 transform hover:-translate-y-2 overflow-hidden"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: '0.6s'
                    }}
                  >
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-accent-800 mb-4">{category.title}</h3>
                      <p className="text-secondary-600 mb-6">{category.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-accent-700 mb-3">Available Tools:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-accent-600">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
                Why Choose Our Industrial Hardware?
              </h2>
              <p className="text-lg text-accent-600 max-w-2xl mx-auto">
                Professional-grade industrial hardware that meets the highest standards for durability and performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-accent-800 mb-3">Industrial Grade</h3>
                <p className="text-accent-600">Heavy-duty hardware designed for demanding industrial applications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-accent-800 mb-3">Precision Tools</h3>
                <p className="text-accent-600">High-precision measuring and cutting tools for accurate work</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-accent-800 mb-3">Safety First</h3>
                <p className="text-accent-600">Complete safety equipment to protect workers in industrial environments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-accent-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-accent-600 max-w-2xl mx-auto">
                Need industrial hardware solutions? Contact us for expert advice and quality products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-accent-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-accent-800 mb-2">WhatsApp</h3>
                <p className="text-accent-600 mb-4">Quick responses and instant support</p>
                <a
                  href="https://wa.me/919842448051?text=Hi, I'm interested in Industrial & Hardware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat Now</span>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-accent-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-accent-800 mb-2">Email</h3>
                <p className="text-accent-600 mb-4">Detailed inquiries and quotes</p>
                <a
                  href="mailto:ahamadandco@yahoo.co.in?subject=Industrial & Hardware Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-accent-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-accent-800 mb-2">Visit Us</h3>
                <p className="text-accent-600 mb-4">62, Madurai Rd, Palakarai, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001</p>
                <a
                  href="https://maps.google.com/?q=62, Madurai Rd, Palakarai, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/919842448051?text=Hi, I'm interested in Industrial & Hardware"
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
