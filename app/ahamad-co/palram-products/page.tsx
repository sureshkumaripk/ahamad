'use client';

import { useState, useEffect } from 'react';
import AhamadCompanyNavbar from '@/components/AhamadCompanyNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Layers,
  Shield,
  Award,
  CheckCircle,
  Sun
} from 'lucide-react';

export default function PalramProducts() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <AhamadCompanyNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
                  <Layers size={20} className="text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Global Leader in Thermoplastic Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                  <span className="block">IMAGINE.</span>
                  <span className="block">BUILD.</span>
                  <span className="block text-blue-600">PALRAM.</span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                For over 60 years, Palram has continually pushed the limits of thermoplastic technology 
                to solve emerging market challenges. Our products are used in countless applications 
                around the world – from stadiums and airports to agricultural facilities, commercial 
                buildings, and private residences.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">60+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">Global</div>
                  <div className="text-sm text-gray-600">Leader</div>
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">Innovation</div>
                  <div className="text-sm text-gray-600">Driven</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Layers size={48} className="text-blue-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Palram Industries</h3>
                    <p className="text-blue-700 mb-4">Leading Global Manufacturer</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">Polycarbonate & PVC Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">Construction & Architecture</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">Agricultural & Industrial</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">DIY & Residential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Palram Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of polycarbonate solutions for every application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Corrugated Sheets",
                description: "High-performance corrugated polycarbonate sheets for roofing and cladding applications",
                features: ["UV Protection", "Impact Resistant", "Weather Resistant"],
                icon: "🌊",
                active: false
              },
              {
                name: "Flat Sheets",
                description: "Smooth flat polycarbonate sheets for glazing and architectural applications",
                features: ["Crystal Clear", "Lightweight", "Easy Installation"],
                icon: "📄",
                active: false
              },
              {
                name: "Multiwall Sheets",
                description: "Multi-chamber polycarbonate sheets for superior insulation and strength",
                features: ["Thermal Insulation", "High Strength", "Energy Efficient"],
                icon: "🏗️",
                active: false
              },
              {
                name: "Panel Systems",
                description: "Complete panel systems for comprehensive roofing and wall solutions",
                features: ["Complete Systems", "Professional Installation", "Long-lasting"],
                icon: "🔧",
                active: false
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2 overflow-hidden ${
                  product.active 
                    ? 'border-blue-500 shadow-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                      product.active 
                        ? 'bg-blue-100 group-hover:bg-blue-200' 
                        : 'bg-gray-100 group-hover:bg-blue-100'
                    }`}>
                      <span className="text-3xl">{product.icon}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-xl font-bold mb-3 ${
                        product.active ? 'text-blue-700' : 'text-gray-800'
                      }`}>
                        {product.name}
                      </h3>
                      {product.active && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-blue-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Palram Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Palram?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Global leader in innovative polycarbonate solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Layers, title: 'Innovation Leader', desc: '60+ years of innovation in polycarbonate technology' },
              { icon: Sun, title: 'Superior Light Transmission', desc: 'Excellent light transmission with UV protection' },
              { icon: Shield, title: 'Impact Resistant', desc: 'Superior impact resistance for safety and durability' },
              { icon: Award, title: 'Global Quality', desc: 'International quality standards and certifications' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon size={40} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/919842448051?text=Hi, I'm interested in Palram products"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 ${
          isScrolled ? 'animate-bounce' : ''
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <Footer />
    </main>
  );
}
