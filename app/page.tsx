import AhamadGroupNavbar from '@/components/AhamadGroupNavbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Building, Sprout, ArrowRight, Check, MessageCircle, Phone, Mail, MapPin, Award, Users, Globe, Truck, Wrench, Hammer, Zap, Settings } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AhamadGroupNavbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{
        background: `linear-gradient(135deg, 
          #1e40af 0%, 
          #1d4ed8 25%, 
          #2563eb 50%, 
          #10b981 75%, 
          #059669 100%)`
      }}>
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-2xl rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-xl -rotate-6 animate-bounce" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 border border-white/20 rounded-2xl rotate-45 animate-ping" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-16 w-20 h-20 border border-white/20 rounded-xl -rotate-12 animate-pulse" style={{animationDuration: '7s', animationDelay: '0.5s'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce" style={{animationDuration: '9s', animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/8 rounded-full animate-pulse" style={{animationDuration: '8s', animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 left-1/6 w-8 h-8 bg-white/10 rounded-full animate-ping" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 animate-pulse" style={{animationDuration: '4s'}}>
                <Building size={20} className="animate-bounce" style={{animationDuration: '3s', animationDelay: '0.5s'}} />
                <span className="text-sm font-medium tracking-wide">LEADING BUSINESS GROUP</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>
                  Construction & Agricultural Excellence
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}>
                Two specialized companies delivering <span className="text-white font-semibold">premium solutions</span> - 
                <span className="text-blue-200 font-semibold"> Ahamad & Co</span> for construction materials 
                and <span className="text-green-200 font-semibold"> AHAMED Agencies</span> for agricultural tools.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '3s'}}>
                  <div className="text-3xl font-bold text-white">505+</div>
                  <div className="text-sm text-blue-200">Premium Products</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '3.5s'}}>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-blue-200">Years Excellence</div>
                </div>
              </div>

              {/* Animated CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ahamad-co" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 animate-pulse" style={{animationDuration: '5s', animationDelay: '4s'}}>
                  Construction Materials
                </Link>
                <Link href="/ahamed-agencies" className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-pulse" style={{animationDuration: '5s', animationDelay: '4.5s'}}>
                  Agricultural Tools
                </Link>
              </div>
            </div>

            {/* Right Side - Products Showcase */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-lg w-full">
                <div className="text-center mb-8 animate-pulse" style={{animationDuration: '4s', animationDelay: '5s'}}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    Our Premium Brands
                  </h2>
                  <div className="w-24 h-1 bg-blue-200 mx-auto rounded-full animate-pulse" style={{animationDuration: '3s', animationDelay: '5.5s'}}></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Tata Shaktee */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '6s'}}>
                    <div className="w-12 h-12 bg-white rounded-xl p-2 mx-auto mb-3 hover:rotate-3 transition-transform duration-300">
                      <Image
                        src="/images/products/tata-shaktee-logo.png"
                        alt="Tata Shaktee"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-white">Tata Shaktee</h4>
                    <p className="text-xs text-blue-200">GC Sheets</p>
                  </div>

                  {/* Durashine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '6.5s'}}>
                    <div className="w-12 h-12 bg-white rounded-xl p-2 mx-auto mb-3 hover:rotate-3 transition-transform duration-300">
                      <Image
                        src="/images/products/durashine-logo.png"
                        alt="Durashine"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-white">Durashine</h4>
                    <p className="text-xs text-blue-200">Color Coated</p>
                  </div>

                  {/* Tata Kosh */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '7s'}}>
                    <div className="w-12 h-12 bg-white rounded-xl p-2 mx-auto mb-3 hover:rotate-3 transition-transform duration-300">
                      <Image
                        src="/images/products/tata-kosh-logo.png"
                        alt="Tata Kosh"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-white">Tata Kosh</h4>
                    <p className="text-xs text-blue-200">GP Sheets</p>
                  </div>

                  {/* Tata Wama */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '7.5s'}}>
                    <div className="w-12 h-12 bg-white rounded-xl p-2 mx-auto mb-3 hover:rotate-3 transition-transform duration-300">
                      <Image
                        src="/images/products/tata-wama-logo.png"
                        alt="Tata Wama"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-white">Tata Wama</h4>
                    <p className="text-xs text-blue-200">Walling</p>
                  </div>

                  {/* Palram */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '8s'}}>
                    <div className="w-12 h-12 bg-white rounded-xl p-2 mx-auto mb-3 hover:rotate-3 transition-transform duration-300">
                      <Image
                        src="/images/products/palram-logo.png"
                        alt="Palram"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-white">Palram</h4>
                    <p className="text-xs text-blue-200">Polycarbonate</p>
                  </div>

                  {/* Tata Agrico */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-pulse" style={{animationDuration: '4s', animationDelay: '8.5s'}}>
                    <div className="w-12 h-12 bg-white rounded-xl p-2 mx-auto mb-3 hover:rotate-3 transition-transform duration-300">
                      <Image
                        src="/images/products/tata-agrigo-logo.png"
                        alt="Tata Agrico"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-white">Tata Agrico</h4>
                    <p className="text-xs text-blue-200">Agricultural Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" style={{animationDuration: '2s'}}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse" style={{animationDuration: '3s'}}>
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-ping" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
            </div>
            <p className="text-xs text-white/70 mt-2 text-center animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}>Scroll to Explore</p>
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
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2 mx-auto">
                    <Image
                      src="/images/products/tata-shaktee-logo.png"
                      alt="Tata Shaktee"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Tata Shaktee</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2 mx-auto">
                    <Image
                      src="/images/products/durashine-logo.png"
                      alt="Durashine"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Durashine</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2 mx-auto">
                    <Image
                      src="/images/products/tata-kosh-logo.png"
                      alt="Tata Kosh"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Tata Kosh</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2 mx-auto">
                    <Image
                      src="/images/products/tata-wama-logo.png"
                      alt="Tata Wama"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Tata Wama</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-xl p-2 mb-2 mx-auto">
                    <Image
                      src="/images/products/palram-logo.png"
                      alt="Palram"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Palram</p>
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

            {/* AHAMED Agencies Detailed */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-200">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <Sprout size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-800">AHAMED Agencies</h3>
                  <p className="text-accent-600 text-lg">Agricultural & Construction Tools</p>
                </div>
              </div>

              <p className="text-accent-700 mb-6 leading-relaxed text-lg">
                Comprehensive partner for agricultural and construction tools. We offer 500+ premium products 
                across 32 categories including hand tools, power tools, welding equipment, and safety gear 
                from trusted brands.
              </p>

              {/* Tool Categories Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <Wrench size={28} className="text-secondary-600" />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Hand Tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <Hammer size={28} className="text-secondary-600" />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Hammers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <Zap size={28} className="text-secondary-600" />
                  </div>
                  <p className="text-xs text-accent-600 font-medium">Welding</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center mb-2 mx-auto text-secondary-600 font-bold text-sm">
                    +29
                  </div>
                  <p className="text-xs text-accent-600 font-medium">More</p>
                </div>
              </div>

              <Link 
                href="/ahamed-agencies" 
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
