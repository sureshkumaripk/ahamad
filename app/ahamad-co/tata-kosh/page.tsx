'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AhamadCompanyNavbar from '@/components/AhamadCompanyNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Zap,
  Shield,
  Award,
  CheckCircle,
  Gauge,
  Phone,
  Ruler
} from 'lucide-react';

export default function TataKosh() {
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
      
      {/* Header Banner Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                TATA KOSH
              </h1>
              <p className="text-2xl text-blue-100">
                One Sheet. <span className="text-blue-200">Many benefits!</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            Tata Kosh is premium GP sheets particularly catering to consumer household requirements.
          </p>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">HIGHLIGHTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tension Levelled",
                icon: "📐",
                description: "Tension Levelled material ensures no creases on bending"
              },
              {
                title: "Optimum Hardness Strength",
                icon: "💪",
                description: "Ensures easy bending with no drumming or spring back effect"
              },
              {
                title: "Uniform Adequate Zinc Coating",
                icon: "🛡️",
                description: "Prevents corrosion zinc peel off on fabrication"
              },
              {
                title: "No Health Hazards",
                icon: "✅",
                description: "No Lead in Zinc Coating"
              },
              {
                title: "Optimum passivation",
                icon: "🔒",
                description: "Adequate chromate usage to prevent white rust in turn enhancing life"
              },
              {
                title: "Consistent Weight And Thickness",
                icon: "⚖️",
                description: "Leads to consistent weight of final products"
              }
            ].map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Products Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">EXPLORE PRODUCTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Galvanised Plain (GP)",
                description: "Tata Kosh is premium GP sheets particularly catering to consumer household requirements.",
                image: "https://tatashaktee.com/wp-content/uploads/2024/08/kosh-feature.webp",
                specifications: [
                  { label: "Coating (GSM)", value: "80-275", icon: "📦" },
                  { label: "Width Range (mm)", value: "900-1350", icon: "📏" },
                  { label: "Surface Condition", value: "Zero Spangled (Lead free)", icon: "💎" },
                  { label: "Thickness range (mm)", value: "0.2-1.2", icon: "↔️" },
                  { label: "Weight (in tons)", value: "19 (max)", icon: "⚖️" }
                ]
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                    <Zap className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                {product.specifications && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-blue-900 mb-3">Specifications:</h4>
                    <div className="space-y-2">
                      {product.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-2 text-sm">
                          <span className="text-yellow-600">{spec.icon}</span>
                          <span className="text-gray-700 font-medium">{spec.label}:</span>
                          <span className="text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/919842448051?text=Hi, I'm interested in Tata Kosh products"
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
