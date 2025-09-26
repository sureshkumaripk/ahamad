'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AhamadAgenciesNavbar from '@/components/AhamadAgenciesNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Hammer,
  Zap,
  Ruler,
  Eye
} from 'lucide-react';

export default function DITools() {
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
      <AhamadAgenciesNavbar />
      <div className="min-h-screen bg-gradient-to-br from-accent-50 to-secondary-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-green-400/10 to-orange-400/10"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-800 mb-6">
                DIY Tools
              </h1>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto mb-8">
                Complete range of DIY tools for home improvement, repairs, and creative projects
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Hammer className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Hand Tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Power Tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Ruler className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Measuring</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Safety</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
                Our DIY Tool Range
              </h2>
              <p className="text-xl text-accent-600 max-w-2xl mx-auto">
                Professional DIY tools for home improvement and creative projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  name: "TATA AGRICO Combination Screwdriver Set (Pack of 9)",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-102-300x300.jpg",
                  variations: 1
                },
                {
                  name: "TATA AGRICO Standard Screwdriver Set (Pack of 6)",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-103-300x300.jpg",
                  variations: 1
                },
                {
                  name: "TATA AGRICO Small Neon Bulb Tester (125 mm)",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-104-300x300.jpg",
                  variations: 1
                },
                {
                  name: "TATA AGRICO Diy Hand Tool Kit - 17 pcs",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-13-300x300.jpg",
                  variations: 1
                },
                {
                  name: "Including Hammer, Adjustable Wrench, Screw Driver and a Combination Plier Socket Set (Pack of 5)",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/2-10-300x300.jpg",
                  variations: 1
                }
              ].map((product, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-100 hover:border-secondary-200 transform hover:-translate-y-2 overflow-hidden">
                    <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-accent-800 mb-2">{product.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/919842448051?text=Hi, I'm interested in DIY Tools"
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
