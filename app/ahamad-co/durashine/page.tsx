'use client';

import { useState, useEffect } from 'react';
import AhamadCompanyNavbar from '@/components/AhamadCompanyNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Building,
  Shield,
  Award,
  CheckCircle,
  Home,
  Factory,
  Users
} from 'lucide-react';

export default function Durashine() {
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
                  <Building size={20} className="text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Flagship Retail Brand by Tata BlueScope Steel</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                  <span className="block">DURASHINE®</span>
                  <span className="block text-blue-600">Leading Roofing Solutions</span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Flagship retail brand by Tata BlueScope Steel – leading roofing sheets and wall 
                cladding manufacturer, Durashine caters to a wide range of applications – 
                residential, commercial, small industrial and institutional.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">Flagship</div>
                  <div className="text-sm text-gray-600">Retail Brand</div>
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">Leading</div>
                  <div className="text-sm text-gray-600">Manufacturer</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Building size={48} className="text-blue-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Durashine</h3>
                    <p className="text-blue-700 mb-4">Tata BlueScope Steel</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">Residential Applications</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">Commercial Projects</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">Small Industrial</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-sm">Institutional Use</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Durashine Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive roofing and wall cladding solutions for every application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Roof and Wall Sheets",
                description: "High-quality roofing sheets and wall cladding for superior protection and aesthetics",
                features: ["Weather Resistant", "Durable Construction", "Easy Installation"],
                icon: "🏠"
              },
              {
                name: "Tile",
                description: "Premium tile solutions for roofing applications with excellent durability",
                features: ["Long Lasting", "Aesthetic Appeal", "Low Maintenance"],
                icon: "🔲"
              },
              {
                name: "Liner",
                description: "Specialized liner products for enhanced protection and insulation",
                features: ["Thermal Insulation", "Moisture Protection", "Energy Efficient"],
                icon: "📋"
              },
              {
                name: "LongLine Crimp",
                description: "Advanced crimp technology for superior water runoff and weather protection",
                features: ["Superior Water Runoff", "Enhanced Weather Protection", "Professional Finish"],
                icon: "〰️"
              },
              {
                name: "Accessories",
                description: "Complete range of accessories for professional installation and finishing",
                features: ["Professional Installation", "Complete Solutions", "Quality Components"],
                icon: "🔧"
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                      <span className="text-3xl">{product.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{product.name}</h3>
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Durashine Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for diverse market segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: 'Residential', desc: 'Perfect for home roofing, sheds, and residential construction projects' },
              { icon: Building, title: 'Commercial', desc: 'Ideal for commercial buildings, offices, and retail spaces' },
              { icon: Factory, title: 'Small Industrial', desc: 'Suitable for small industrial facilities and manufacturing units' },
              { icon: Users, title: 'Institutional', desc: 'Excellent for schools, hospitals, and institutional buildings' }
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

      {/* Our Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive building solutions from Tata BlueScope Steel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "DURASHINE®", 
                description: "Roof and Wall Cladding",
                icon: "🏠",
                featured: true
              },
              { 
                name: "LYSAGHT®", 
                description: "Roof, Wall Cladding and Structural Solutions",
                icon: "🏭"
              },
              { 
                name: "ZINCALUME® STEEL", 
                description: "55% Al-Zn Alloy Coated Steel Coils",
                icon: "⚙️"
              },
              { 
                name: "COLORBOND® STEEL", 
                description: "Colour Coated Steel Coils",
                icon: "🎨"
              },
              { 
                name: "EZYBUILD®", 
                description: "Smart Building Solutions",
                icon: "🏗️"
              },
              { 
                name: "ECOBUILD®", 
                description: "Pre-Engineered Buildings",
                icon: "🏢"
              },
              { 
                name: "BUTLER®", 
                description: "Pre-Engineered Buildings",
                icon: "🏗️"
              },
              { 
                name: "ILIOS®", 
                description: "Solar Module Mounting Solutions",
                icon: "☀️"
              }
            ].map((brand, index) => (
              <div key={index} className="group">
                <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2 overflow-hidden ${
                  brand.featured 
                    ? 'border-blue-500 shadow-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}>
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                      brand.featured 
                        ? 'bg-blue-100 group-hover:bg-blue-200' 
                        : 'bg-gray-100 group-hover:bg-blue-100'
                    }`}>
                      <span className="text-3xl">{brand.icon}</span>
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-2 ${
                      brand.featured ? 'text-blue-700' : 'text-gray-800'
                    }`}>
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{brand.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Durashine Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Durashine?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flagship retail brand with Tata BlueScope Steel quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building, title: 'Flagship Brand', desc: 'Leading retail brand by Tata BlueScope Steel with proven quality' },
              { icon: Shield, title: 'Superior Quality', desc: 'High-quality roofing sheets and wall cladding materials' },
              { icon: Award, title: 'Wide Applications', desc: 'Caters to residential, commercial, industrial and institutional needs' },
              { icon: Users, title: 'Trusted Choice', desc: 'Reliable solutions trusted by customers across diverse sectors' }
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
        href="https://wa.me/919842448051?text=Hi, I'm interested in Durashine products"
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
