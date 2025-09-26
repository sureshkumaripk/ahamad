'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AhamadAgenciesNavbar from '@/components/AhamadAgenciesNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Archive,
  Folder,
  FileText,
  Search
} from 'lucide-react';

export default function FilingTools() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-green-400/10"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-800 mb-6">
                Filing Tools
              </h1>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto mb-8">
                Professional filing and document organization solutions for offices and businesses
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Archive className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">File Cabinets</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Folder className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Filing Systems</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Organizers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-accent-700">Digital Tools</p>
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
                Our Filing Tool Range
              </h2>
              <p className="text-xl text-accent-600 max-w-2xl mx-auto">
                Professional TATA AGRICO filing tools for precision metalworking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  name: "TATA AGRICO Slim Taper File With Handle (100 mm) - FIL058",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-24-300x300.jpg"
                },
                {
                  name: "TATA AGRICO Slim Taper File (100 mm) - FIL007",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-20-300x300.jpg"
                },
                {
                  name: "TATA AGRICO Slim Taper File (125 mm) - FIL008",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-21-300x300.jpg"
                },
                {
                  name: "TATA AGRICO Slim Taper File (150 mm) - FIL009",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-22-300x300.jpg"
                },
                {
                  name: "TATA AGRICO Heavy Taper File (200 mm) - FIL013",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-23-300x300.jpg"
                },
                {
                  name: "TATA AGRICO Flat Bastard File (250 mm) - FIL001",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-163-300x300.jpg"
                },
                {
                  name: "TATA AGRICO Super Light Bastard (250 mm) - FIL003",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-164-300x300.jpg"
                },
                {
                  name: "TATA AGRICO Flat Handle Bastard File (250 mm) - FIL005",
                  image: "https://www.tataagrico.com/wp-content/uploads/2024/12/1-19-300x300.jpg"
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
          href="https://wa.me/919842448051?text=Hi, I'm interested in Filing Tools"
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
