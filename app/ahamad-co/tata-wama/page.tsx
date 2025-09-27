'use client';

import { useState, useEffect } from 'react';
import AhamadCompanyNavbar from '@/components/AhamadCompanyNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Building,
  Shield,
  Award,
  CheckCircle
} from 'lucide-react';

export default function TataWama() {
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
                <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                  TATA WAMA
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                <p className="text-2xl font-semibold text-gray-700">
                  Wall of Steel
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                TATA WAMA coined from 'Walling Masters' is Tata Steel's latest 
                offering in the retail and institutional segment catering to the 
                walling and fencing needs of consumers. Developed exclusively 
                for vertical applications.
              </p>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://www.vncgroup.com/assets/img/d-wama-logo.png" 
                    alt="TATA WAMA Logo" 
                    className="max-w-full max-h-80 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">APPLICATIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Construction Fences",
                icon: "🏗️",
                description: "Secure fencing solutions for construction sites and building projects"
              },
              {
                title: "Barricades",
                icon: "🚧",
                description: "Temporary barricades for traffic control and site safety"
              },
              {
                title: "Building Site Isolation",
                icon: "🏢",
                description: "Isolation barriers during construction to protect surrounding areas"
              },
              {
                title: "Temporary Residences",
                icon: "🏠",
                description: "Quick setup temporary housing solutions for construction workers"
              },
              {
                title: "Small Warehouses",
                icon: "🏭",
                description: "Compact warehouse structures for storage and industrial use"
              },
              {
                title: "Vertical Applications",
                icon: "📐",
                description: "Specialized for vertical walling and fencing installations"
              }
            ].map((application, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{application.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">KEY FEATURES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Walling Masters",
                icon: "👷",
                description: "Coined from 'Walling Masters' - expertise in walling solutions"
              },
              {
                title: "Tata Steel Quality",
                icon: "🏭",
                description: "Latest offering from Tata Steel's retail and institutional segment"
              },
              {
                title: "Vertical Applications",
                icon: "📏",
                description: "Developed exclusively for vertical walling and fencing needs"
              },
              {
                title: "Consumer Focused",
                icon: "👥",
                description: "Catering to the walling and fencing needs of consumers"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/919842448051?text=Hi, I'm interested in Tata Wama products"
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