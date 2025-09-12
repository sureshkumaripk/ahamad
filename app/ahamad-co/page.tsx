import AhamadCompanyNavbar from '@/components/AhamadCompanyNavbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Building, Home, Cog, Check, ArrowRight, Award, Truck, Users, Users2, Phone, Mail, MessageCircle, MapPin } from 'lucide-react'

export default function AhamadCo() {
  return (
    <main className="min-h-screen">
      <AhamadCompanyNavbar />
      
      {/* Hero Section */}
      <section className="relative gradient-bg text-white min-h-screen flex items-center overflow-hidden pt-28">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-2xl rotate-12 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-xl -rotate-6 animate-bounce" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 border border-white/20 rounded-2xl rotate-45 animate-ping" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-16 w-20 h-20 border border-white/20 rounded-xl -rotate-12 animate-pulse" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce" style={{animationDuration: '7s', animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/8 rounded-full animate-ping" style={{animationDuration: '6s', animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 left-1/6 w-8 h-8 bg-white/10 rounded-full animate-pulse" style={{animationDuration: '9s', animationDelay: '4s'}}></div>
          
          {/* Geometric Lines */}
          <div className="absolute top-1/4 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '10s'}}></div>
          <div className="absolute bottom-1/4 right-0 w-28 h-0.5 bg-gradient-to-l from-transparent via-white/15 to-transparent animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto space-y-8 mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 animate-pulse" style={{animationDuration: '3s'}}>
              <Building size={20} className="animate-bounce" style={{animationDuration: '2s', animationDelay: '0.5s'}} />
              <span className="text-sm font-medium tracking-wide">AUTHORIZED DISTRIBUTOR</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>
              <span className="block text-secondary-300 font-normal">
                Premium Construction Materials
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}>
              Your trusted partner for authentic <strong>Tata Steel</strong> and <strong>Palram</strong> products. 
              Delivering quality solutions for roofing, walling, and specialized construction applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#products" className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 animate-pulse" style={{animationDuration: '6s', animationDelay: '3s'}}>
                View Our Products
              </a>
              <a href="#contact" className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-pulse" style={{animationDuration: '7s', animationDelay: '3.5s'}}>
                Get Quote
              </a>
            </div>
          </div>

          {/* Products Showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-pulse" style={{animationDuration: '3s', animationDelay: '4s'}}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Premium Brands</h2>
              <div className="w-24 h-1 bg-secondary-300 mx-auto rounded-full animate-pulse" style={{animationDuration: '2s', animationDelay: '4.5s'}}></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Tata Shaktee */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-pulse" style={{animationDuration: '4s', animationDelay: '5s'}}>
                <div className="w-16 h-16 bg-white rounded-2xl p-3 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Image
                    src="/images/products/tata-shaktee-logo.png"
                    alt="Tata Shaktee"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain group-hover:animate-pulse"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">Tata Shaktee</h4>
                <p className="text-sm text-blue-200">Galvanized Corrugated Sheets</p>
              </div>

              {/* Durashine */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-pulse" style={{animationDuration: '4.5s', animationDelay: '5.5s'}}>
                <div className="w-16 h-16 bg-white rounded-2xl p-3 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Image
                    src="/images/products/durashine-logo.png"
                    alt="Durashine"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain group-hover:animate-pulse"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">Durashine</h4>
                <p className="text-sm text-blue-200">Color Coated Sheets</p>
              </div>

              {/* Tata Kosh */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-pulse" style={{animationDuration: '5s', animationDelay: '6s'}}>
                <div className="w-16 h-16 bg-white rounded-2xl p-3 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Image
                    src="/images/products/tata-kosh-logo.png"
                    alt="Tata Kosh"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain group-hover:animate-pulse"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">Tata Kosh</h4>
                <p className="text-sm text-blue-200">GP Sheets with Spangles</p>
              </div>

              {/* Tata Wama */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-pulse" style={{animationDuration: '5.5s', animationDelay: '6.5s'}}>
                <div className="w-16 h-16 bg-white rounded-2xl p-3 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Image
                    src="/images/products/tata-wama-logo.png"
                    alt="Tata Wama"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain group-hover:animate-pulse"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">Tata Wama</h4>
                <p className="text-sm text-blue-200">Walling & Fencing</p>
              </div>

              {/* Palram */}
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-pulse" style={{animationDuration: '6s', animationDelay: '7s'}}>
                <div className="w-16 h-16 bg-white rounded-2xl p-3 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Image
                    src="/images/products/palram-logo.png"
                    alt="Palram"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain group-hover:animate-pulse"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">Palram</h4>
                <p className="text-sm text-blue-200">Polycarbonate Solutions</p>
              </div>
            </div>
          </div>

        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{animationDuration: '2s'}}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse" style={{animationDuration: '3s'}}>
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-ping" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-white/70 animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}>Scroll Down</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Premium Tata construction materials for all your building needs
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Tata Shaktee */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white p-2 border border-gray-200">
                  <Image
                    src="/images/products/tata-shaktee-logo.png"
                    alt="Tata Shaktee official logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3">Tata Shaktee</h3>
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    Tata Steel&apos;s flagship brand in galvanized corrugated sheets. Made of virgin steel with uniform zinc coating for superior weather resistance and longevity.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['Virgin steel construction', 'Uniform zinc coating', 'Weather resistant', 'Superior durability'].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-secondary-500 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent-100 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-1">Application:</h4>
                    <p className="text-sm text-accent-600">Ideal for roofing applications in residential and commercial buildings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Durashine */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white p-2 border border-gray-200">
                  <Image
                    src="/images/products/durashine-logo.png"
                    alt="Durashine official logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3">Durashine</h3>
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    Flagship retail brand of Tata BlueScope Steel. Premium color coated profile sheets for roof and wall solutions. Award-winning quality and trusted performance.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['Color coated profile sheets', 'Roof & wall solutions', 'Award-winning quality', 'Structural products & accessories'].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-secondary-500 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent-100 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-1">Recognition:</h4>
                    <p className="text-sm text-accent-600">Asia&apos;s Most Trusted Brand by International Brand Consulting Corporation, USA.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tata Kosh */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white p-2 border border-gray-200">
                  <Image
                    src="/images/products/tata-kosh-logo.png"
                    alt="Tata Kosh official logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3">Tata Kosh</h3>
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    GP sheets with spangles designed for fabricators to make storage & utility equipment. Perfect for rural and urban Tier-3 household applications.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['GP sheets with spangles', 'Storage equipment fabrication', 'Utility applications', 'Rural & urban solutions'].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-secondary-500 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent-100 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-1">Applications:</h4>
                    <p className="text-sm text-accent-600">Trunks, grain silos, tasla, buckets, and other storage equipment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tata Wama */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white p-2 border border-gray-200">
                  <Image
                    src="/images/products/tata-wama-logo.png"
                    alt="Tata Wama official logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3">Tata Wama</h3>
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    &quot;Walling Masters&quot; - Tata Steel&apos;s latest offering for walling and fencing needs. Developed exclusively for vertical applications in retail and institutional segments.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['Vertical applications', 'Walling & fencing solutions', 'Construction site use', 'Temporary structures'].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-secondary-500 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent-100 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-1">Uses:</h4>
                    <p className="text-sm text-accent-600">Fences, barricades, site isolation, temporary residences, small warehouses.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Palram */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white p-2 border border-gray-200">
                  <Image
                    src="/images/products/palram-logo.png"
                    alt="Palram official logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3">Palram Products</h3>
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    Comprehensive range of polycarbonate sheets including SUNTUF corrugated sheets for architectural, industrial, agricultural, and DIY applications.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['SUNTUF corrugated sheets', 'PALSUN flat sheets', 'SUNLITE multiwall sheets', 'SOLARSMART specialty products'].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-secondary-500 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent-100 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-1">Applications:</h4>
                    <p className="text-sm text-accent-600">Skylights, sidelights, roofs, architectural and industrial applications.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white border-t border-accent-200">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Why Choose Ahamad & Co?
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              We deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Quality Assurance', desc: 'All our products meet Tata\'s stringent quality standards and come with comprehensive warranties.' },
              { icon: Truck, title: 'Timely Delivery', desc: 'We ensure prompt delivery of materials to keep your projects on schedule.' },
              { icon: Users, title: 'Expert Support', desc: 'Our experienced team provides technical guidance and support throughout your project.' },
              { icon: Users2, title: 'Trusted Partnership', desc: 'Long-standing relationships with clients built on trust, reliability, and quality service.' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                Ready to start your construction project? Contact us for expert advice and competitive pricing.
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
                  Get instant quotes and expert advice
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
                  Send us your project details
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-accent-200">
              <div className="flex items-center justify-center mb-4">
                <MapPin size={24} className="text-green-600 mr-3" />
                <h4 className="font-bold text-accent-800 text-lg">Visit Our Office</h4>
              </div>
              <p className="text-accent-600 leading-relaxed">
                62, Madurai Rd, Palakarai, Sangillyandapuram,<br />
                Tiruchirappalli, Tamil Nadu 620001
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919842448051?text=Hi%20Ahamad%20%26%20Co,%20I'm%20interested%20in%20your%20construction%20materials.%20Can%20you%20help%20me%20with%20pricing%20and%20availability?"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </main>
  )
}
