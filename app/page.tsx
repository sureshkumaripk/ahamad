import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Building, Sprout, ArrowRight, Check, MessageCircle, Phone, Mail, MapPin, Award, Users, Globe, Truck, Wrench, Hammer, Zap, Settings } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar 
        companyName="Ahamad Groups"
        companyLogo="Ahamad Groups"
        logoColor="text-accent-800"
        hoverColor="hover:text-primary-600"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{
        background: `linear-gradient(135deg, 
          #1e40af 0%, 
          #1d4ed8 25%, 
          #2563eb 50%, 
          #10b981 75%, 
          #059669 100%)`
      }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-2xl rotate-12 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-xl -rotate-6 animate-bounce" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 border border-white/20 rounded-2xl rotate-45 animate-ping" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-16 w-20 h-20 border border-white/20 rounded-xl -rotate-12 animate-pulse" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-yellow-300/40 shadow-xl animate-bounce" style={{animationDuration: '2s'}}>
                <Building size={24} className="text-yellow-300 animate-spin" style={{animationDuration: '4s'}} />
                <span className="text-base font-bold tracking-wider text-yellow-100">🏆 LEADING BUSINESS GROUP</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-yellow-300 via-orange-300 to-green-300 bg-clip-text text-transparent animate-pulse" style={{animationDuration: '4s', animationDelay: '0.5s'}}>
                  🚀 Construction & Agricultural Excellence
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>
                Two specialized companies delivering <span className="text-yellow-300 font-bold">premium solutions</span> - 
                <span className="text-blue-300 font-bold"> Ahamad & Co</span> for construction materials 
                and <span className="text-green-300 font-bold"> AHAMAD Agencies</span> for agricultural tools.
              </p>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-300/40 shadow-xl hover:scale-110 transition-all duration-300 animate-bounce" style={{animationDuration: '3s', animationDelay: '2s'}}>
                  <div className="text-4xl font-black text-yellow-300">505+</div>
                  <div className="text-base font-bold text-white">Premium Products</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-300/40 shadow-xl hover:scale-110 transition-all duration-300 animate-bounce" style={{animationDuration: '3s', animationDelay: '2.5s'}}>
                  <div className="text-4xl font-black text-yellow-300">15+</div>
                  <div className="text-base font-bold text-white">Years Excellence</div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/ahamad-co" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 hover:-translate-y-2 border-2 border-blue-300/50 animate-bounce" style={{animationDuration: '2s', animationDelay: '3s'}}>
                  🏗️ Construction Materials
                </Link>
                <Link href="/ahamad-agencies" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 hover:-translate-y-2 border-2 border-green-300/50 animate-bounce" style={{animationDuration: '2s', animationDelay: '3.5s'}}>
                  🌱 Agricultural Tools
                </Link>
              </div>
            </div>

            {/* Right Side - Products Showcase */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-lg w-full">
                <div className="text-center mb-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/30 shadow-xl animate-bounce" style={{animationDuration: '2s', animationDelay: '4s'}}>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                    ✨ Our Premium Brands
                  </h2>
                  <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 mx-auto rounded-full animate-pulse shadow-lg" style={{animationDuration: '2s', animationDelay: '4.5s'}}></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Tata Shaktee */}
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-5 text-center border-2 border-white/30 hover:border-yellow-300/50 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl animate-bounce" style={{animationDuration: '2s', animationDelay: '5s'}}>
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 mx-auto mb-3 shadow-lg hover:rotate-6 transition-transform duration-300">
                      <Image
                        src="/images/products/tata-shaktee-logo.png"
                        alt="Tata Shaktee"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-black text-sm mb-1 text-yellow-200">Tata Shaktee</h4>
                    <p className="text-xs text-white font-medium">🏠 GC Sheets</p>
                  </div>

                  {/* Durashine */}
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-5 text-center border-2 border-white/30 hover:border-orange-300/50 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl animate-bounce" style={{animationDuration: '2s', animationDelay: '5.5s'}}>
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 mx-auto mb-3 shadow-lg hover:rotate-6 transition-transform duration-300">
                      <Image
                        src="/images/products/durashine-logo.png"
                        alt="Durashine"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-black text-sm mb-1 text-orange-200">Durashine</h4>
                    <p className="text-xs text-white font-medium">🎨 Color Coated</p>
                  </div>

                  {/* Tata Kosh */}
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-5 text-center border-2 border-white/30 hover:border-blue-300/50 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl animate-bounce" style={{animationDuration: '2s', animationDelay: '6s'}}>
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 mx-auto mb-3 shadow-lg hover:rotate-6 transition-transform duration-300">
                      <Image
                        src="/images/products/tata-kosh-logo.png"
                        alt="Tata Kosh"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-black text-sm mb-1 text-blue-200">Tata Kosh</h4>
                    <p className="text-xs text-white font-medium">📦 GP Sheets</p>
                  </div>

                  {/* Tata Wama */}
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-5 text-center border-2 border-white/30 hover:border-purple-300/50 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl animate-bounce" style={{animationDuration: '2s', animationDelay: '6.5s'}}>
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 mx-auto mb-3 shadow-lg hover:rotate-6 transition-transform duration-300">
                      <Image
                        src="/images/products/tata-wama-logo.png"
                        alt="Tata Wama"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-black text-sm mb-1 text-purple-200">Tata Wama</h4>
                    <p className="text-xs text-white font-medium">🧱 Walling</p>
                  </div>

                  {/* Palram */}
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-5 text-center border-2 border-white/30 hover:border-cyan-300/50 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl animate-bounce" style={{animationDuration: '2s', animationDelay: '7s'}}>
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 mx-auto mb-3 shadow-lg hover:rotate-6 transition-transform duration-300">
                      <Image
                        src="/images/products/palram-logo.png"
                        alt="Palram"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-black text-sm mb-1 text-cyan-200">Palram</h4>
                    <p className="text-xs text-white font-medium">💎 Polycarbonate</p>
                  </div>

                  {/* Tata Agrigo */}
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-5 text-center border-2 border-white/30 hover:border-green-300/50 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl animate-bounce" style={{animationDuration: '2s', animationDelay: '7.5s'}}>
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 mx-auto mb-3 shadow-lg hover:rotate-6 transition-transform duration-300">
                      <Sprout size={28} className="text-green-500 mx-auto" />
                    </div>
                    <h4 className="font-black text-sm mb-1 text-green-200">Tata Agrigo</h4>
                    <p className="text-xs text-white font-medium">🌾 Agricultural Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" style={{animationDuration: '2s'}}>
            <div className="w-8 h-12 border-3 border-gradient-to-b from-yellow-300 to-green-300 rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-lg animate-pulse" style={{animationDuration: '3s'}}>
              <div className="w-2 h-4 bg-gradient-to-b from-yellow-400 to-green-400 rounded-full mt-2 animate-ping shadow-lg" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
            </div>
            <p className="text-sm font-bold text-center mt-3 bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}>
              ⬇️ Scroll to Explore
            </p>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Our Specialized Companies
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto">
              Two industry-leading companies under the Ahamad Groups umbrella, each serving distinct markets with specialized expertise and premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Ahamad & Co Detailed */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-200">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                  <Building size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-800">Ahamad & Co</h3>
                  <p className="text-accent-600 text-lg">Premium Construction Materials</p>
                </div>
              </div>

              <p className="text-accent-700 mb-6 leading-relaxed text-lg">
                Authorized distributor of Tata Steel products and Palram polycarbonate solutions. 
                We provide comprehensive roofing, walling, and construction solutions for residential, 
                commercial, and industrial projects.
              </p>

              {/* Products Grid */}
              <div className="grid grid-cols-5 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2">
                    <Image
                      src="/images/products/tata-shaktee-logo.png"
                      alt="Tata Shaktee"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600">Tata Shaktee</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2">
                    <Image
                      src="/images/products/durashine-logo.png"
                      alt="Durashine"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600">Durashine</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2">
                    <Image
                      src="/images/products/tata-kosh-logo.png"
                      alt="Tata Kosh"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600">Tata Kosh</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2">
                    <Image
                      src="/images/products/tata-wama-logo.png"
                      alt="Tata Wama"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600">Tata Wama</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2">
                    <Image
                      src="/images/products/palram-logo.png"
                      alt="Palram"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600">Palram</p>
                </div>
              </div>

              <Link 
                href="/ahamad-co" 
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Construction Materials</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* AHAMAD Agencies Detailed */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-200">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <Sprout size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-800">AHAMAD Agencies</h3>
                  <p className="text-accent-600 text-lg">Agricultural & Construction Tools</p>
                </div>
              </div>

              <p className="text-accent-700 mb-6 leading-relaxed text-lg">
                Comprehensive partner for agricultural and construction tools. We offer 500+ premium products 
                across 32 categories including hand tools, power tools, welding equipment, and safety gear 
                from trusted brands.
              </p>

              {/* Tool Categories Grid */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2">
                    <Wrench size={28} className="text-secondary-600" />
                  </div>
                  <p className="text-xs text-accent-600">Hand Tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2">
                    <Hammer size={28} className="text-secondary-600" />
                  </div>
                  <p className="text-xs text-accent-600">Hammers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2">
                    <Zap size={28} className="text-secondary-600" />
                  </div>
                  <p className="text-xs text-accent-600">Welding</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2 text-secondary-600 font-bold text-sm">
                    +29
                  </div>
                  <p className="text-xs text-accent-600">More</p>
                </div>
              </div>

              <Link 
                href="/ahamad-agencies" 
                className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Tools & Equipment</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ahamad Groups */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Why Choose Ahamad Groups?
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Excellence, trust, and quality across all our business verticals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'All products meet the highest industry standards with comprehensive warranties and quality assurance.' },
              { icon: Users, title: 'Expert Support', desc: 'Our specialized teams provide technical guidance and support for both construction and agricultural needs.' },
              { icon: Globe, title: 'Authorized Distributor', desc: 'Official partnerships with Tata Steel and leading brands ensure authentic products and competitive pricing.' },
              { icon: Truck, title: 'Reliable Service', desc: 'Timely delivery, excellent customer service, and long-standing relationships built on trust and reliability.' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-accent-800 mb-3">{feature.title}</h3>
                <p className="text-accent-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-6">Get in Touch</h2>
              <p className="text-xl text-accent-700 leading-relaxed">
                Ready to start your project? Contact us for expert advice, competitive pricing, and quality products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center text-center bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-accent-200">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle size={32} className="text-green-600" />
                </div>
                <h4 className="font-bold text-accent-800 text-xl mb-3">WhatsApp</h4>
                <p className="text-accent-600 mb-4">
                  <a 
                    href="https://wa.me/919842448051" 
                    className="hover:text-green-600 transition-colors duration-300 text-lg font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 9842448051
                  </a>
                </p>
                <p className="text-accent-500 text-sm">
                  Instant support for all your needs
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-accent-200">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Mail size={32} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-accent-800 text-xl mb-3">Email</h4>
                <p className="text-accent-600 mb-4">
                  <a 
                    href="mailto:ahamadandco@yahoo.co.in" 
                    className="hover:text-blue-600 transition-colors duration-300 text-lg font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ahamadandco@yahoo.co.in
                  </a>
                </p>
                <p className="text-accent-500 text-sm">
                  Detailed inquiries and quotations
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-accent-200">
              <div className="flex items-center justify-center mb-4">
                <MapPin size={24} className="text-green-600 mr-3" />
                <h4 className="font-bold text-accent-800 text-lg">Visit Our Location</h4>
              </div>
              <p className="text-accent-600 leading-relaxed">
                62, Madurai Rd, Palakarai, Sangillyandapuram,<br />
                Tiruchirappalli, Tamil Nadu 620001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919842448051?text=Hi%20Ahamad%20Groups,%20I'm%20interested%20in%20your%20products%20and%20services.%20Can%20you%20help%20me%20with%20information%20and%20pricing?"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      <Footer />
    </main>
  )
}
