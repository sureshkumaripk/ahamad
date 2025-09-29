'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AhamadAgenciesNavbar from '@/components/AhamadAgenciesNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle
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


  return (
    <main className="min-h-screen">
      <AhamadAgenciesNavbar />
      <div className="min-h-screen bg-gradient-to-br from-accent-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-orange-400/10 to-blue-400/10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">

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

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Professional agricultural and construction tools with multiple variations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "Chaff Cutter & Thresher Cutter",
                image: "https://www.tataagrico.com/wp-content/uploads/2025/08/chaff-cutter.png",
                variations: 3
              },
              {
                name: "Tiller Shoe",
                image: "https://www.tataagrico.com/wp-content/uploads/2025/08/Tiller-Shoe.png",
                variations: 13
              },
              {
                name: "Total Rotator Blade",
                image: "https://www.tataagrico.com/wp-content/uploads/2025/08/Rotary-Tiller-Blade.png",
                variations: 6
              },
              {
                name: "Chisel",
                image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-6.jpg",
                variations: 15
              },
              {
                name: "Crowbar",
                image: "https://www.tataagrico.com/wp-content/uploads/2024/12/Crowbar-category-image.jpg",
                variations: 27
              },
              {
                name: "Hammer",
                image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-59.jpg",
                variations: 37
              },
              {
                name: "Hoe",
                image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-165.jpg",
                variations: 62
              },
              {
                name: "Pickaxe",
                image: "https://www.tataagrico.com/wp-content/uploads/2024/12/Pickaxe-Category-image.jpg",
                variations: 19
              },
              {
                name: "Shovel",
                image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-130.jpg",
                variations: 22
              },
              {
                name: "Sickle",
                image: "https://www.tataagrico.com/wp-content/uploads/2024/12/Sickle-category-image.jpg",
                variations: 37
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-100 hover:border-secondary-200 transform hover:-translate-y-2 overflow-hidden">
                  <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={300}
                      height={300}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-accent-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent-600">Available in</span>
                      <span className="text-sm font-semibold text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full">
                        {product.variations} VARIATIONS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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