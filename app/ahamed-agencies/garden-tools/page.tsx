'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AhamadAgenciesNavbar from '@/components/AhamadAgenciesNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Shovel,
  Scissors,
  Droplets,
  Flower2
} from 'lucide-react';

export default function GardenTools() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-yellow-400/10 to-blue-400/10"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-800 mb-6">
                Garden Tools
              </h1>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto mb-8">
                Professional garden tools for beautiful landscapes and thriving plants
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shovel className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Digging</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Scissors className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Pruning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Watering</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Flower2 className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Accessories</p>
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
                Our Garden Tool Range
              </h2>
              <p className="text-xl text-accent-600 max-w-2xl mx-auto">
                Professional garden tools for beautiful landscapes and thriving plants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  name: "Hand Cultivator",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/9.jpg",
                  variations: 2
                },
                {
                  name: "Lopper",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-43.jpg",
                  variations: 1
                },
                {
                  name: "Chopper",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-32.jpg",
                  variations: 3
                },
                {
                  name: "Forks",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-41.jpg",
                  variations: 2
                },
                {
                  name: "Khurpi",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-37.jpg",
                  variations: 4
                },
                {
                  name: "Powrah",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-38.jpg",
                  variations: 1
                },
                {
                  name: "Scissors",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-35.jpg",
                  variations: 3
                },
                {
                  name: "Secateur",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-29.jpg",
                  variations: 3
                },
                {
                  name: "Shears",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-30.jpg",
                  variations: 4
                },
                {
                  name: "Trowel",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-40.jpg",
                  variations: 2
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
                      <h3 className="text-lg font-bold text-accent-800 mb-2">{product.name}</h3>
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
          href="https://wa.me/919842448051?text=Hi, I'm interested in Garden Tools"
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
