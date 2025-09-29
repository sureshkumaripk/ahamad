'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AhamadCompanyNavbar from '@/components/AhamadCompanyNavbar';
import Footer from '@/components/Footer';
import { 
  MessageCircle,
  Building,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Ruler,
  Zap
} from 'lucide-react';

export default function TataShaktee() {
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
                TATA SHAKTEE
              </h1>
              <p className="text-2xl text-blue-100">
                One GC Sheet. <span className="text-blue-200">Many benefits!</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            Tata Shaktee is Tata Steel&apos;s premier GC Sheet product particularly catering to consumer requirements in roofing applications.
          </p>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">PRODUCT HIGHLIGHTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Right hardness for Roofing",
                icon: "🛡️",
                description: "Accurate tempering to resist cracks and fissures"
              },
              {
                title: "High Tensile Strength",
                icon: "💪",
                description: "High tensile strength of 700 MPa to resist natural forces like hailstorms"
              },
              {
                title: "Accurate dimensions & thickness",
                icon: "📏",
                description: "Length & thickness is equal to or more than specified ensuring value for money"
              },
              {
                title: "Uniform zinc coating & adherence",
                icon: "🎯",
                description: "Superior x-ray and cleaning technology to ensure even coating"
              },
              {
                title: "Printed thickness & zinc coating",
                icon: "📋",
                description: "Thickness & zinc coating printed on sheet ensuring fair pay"
              },
              {
                title: "Even Corrugations",
                icon: "〰️",
                description: "Even corrugations ensures perfect overlapping, no water seepage preventing white rust"
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
                name: "Galvanised Corrugated (GC) Long Length 1220mm",
                description: "Tata Shaktee brings the widest, most economical GC sheets in the Indian Market. With 15 corrugations and a width of 1220 mm. Tata Shaktee wider GC sheets give the added benefits of superior quality and super savings while building your house. The superior sheets are used for bigger structures to cover larger areas.",
                image: "https://tatashaktee.com/wp-content/uploads/2024/08/product-range-img2.webp"
              },
              {
                name: "Galvanised Corrugated (GC) Standard GC Sheet 800mm",
                description: "Tata Shaktee standard GC sheets are known for their twin benefits of superior quality and super savings. With the assured thickness and accurate dimensions, they provide complete roofing solutions ensuring complete protection of the house. Even corrugations of the Tata Shaktee GC sheets also ensure perfect overlapping, which results in weatherproofing.",
                image: "https://tatashaktee.com/wp-content/uploads/2024/08/product-range-img2.webp"
              },
              {
                name: "Galvanised Corrugated (GC) Standard GC Sheet 840mm",
                description: "Tata Shaktee standard GC sheets are known for their twin benefits of superior quality and super savings. With the assured thickness and accurate dimensions, they provide complete roofing solutions ensuring complete protection of the house. Even corrugations of the Tata Shaktee GC sheets also ensure perfect overlapping, which results in weatherproofing.",
                image: "https://tatashaktee.com/wp-content/uploads/2024/08/product-range-img2.webp"
              },
              {
                name: "Galvanised Corrugated (GC) Wide GC Sheet 910mm",
                description: "Tata Shaktee presents 910 mm GC sheets in the Indian market. With 13 corrugations and a width of 910 mm, Tata Shaktee GC sheets provide the added benefit of superior quality at super savings while building a house. They are used for bigger structures to cover larger areas.",
                image: "https://tatashaktee.com/wp-content/uploads/2024/08/product-range-img2.webp"
              },
              {
                name: "Galvanised Corrugated (GC) Wider GC Sheet 1220mm",
                description: "Tata Shaktee brings the widest, most economical GC sheets in the Indian Market. With 15 corrugations and a width of 1220 mm. Tata Shaktee wider GC sheets give the added benefits of superior quality and super savings while building your house. The superior sheets are used for bigger structures to cover larger areas.",
                image: "https://tatashaktee.com/wp-content/uploads/2024/08/product-range-img2.webp"
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
                    <Building className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  {product.name.includes('Long Length 1220mm') 
                    ? (
                        <>
                          <span className="text-lg font-bold">Galvanised Corrugated (GC)</span><br />
                          <span className="text-base font-semibold">Long Length 1220mm</span>
                        </>
                      )
                    : product.name.includes('Standard GC Sheet 800mm')
                    ? (
                        <>
                          <span className="text-lg font-bold">Galvanised Corrugated (GC)</span><br />
                          <span className="text-base font-semibold">Standard GC Sheet 800mm</span>
                        </>
                      )
                    : product.name.includes('Standard GC Sheet 840mm')
                    ? (
                        <>
                          <span className="text-lg font-bold">Galvanised Corrugated (GC)</span><br />
                          <span className="text-base font-semibold">Standard GC Sheet 840mm</span>
                        </>
                      )
                    : product.name.includes('Wide GC Sheet 910mm')
                    ? (
                        <>
                          <span className="text-lg font-bold">Galvanised Corrugated (GC)</span><br />
                          <span className="text-base font-semibold">Wide GC Sheet 910mm</span>
                        </>
                      )
                    : product.name.includes('Wider GC Sheet 1220mm')
                    ? (
                        <>
                          <span className="text-lg font-bold">Galvanised Corrugated (GC)</span><br />
                          <span className="text-base font-semibold">Wider GC Sheet 1220mm</span>
                        </>
                      )
                    : product.name
                  }
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/919842448051?text=Hi, I'm interested in Tata Shaktee products"
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
