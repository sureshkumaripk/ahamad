'use client'

import { useState } from 'react'
import Image from 'next/image'
import AhamadAgenciesNavbar from '@/components/AhamadAgenciesNavbar'
import Footer from '@/components/Footer'
import { Sprout, Tractor, Beaker, Shield, Wrench, Wheat, Leaf, Carrot, Flower2, GraduationCap, Microscope, TrendingUp, Truck, Award, Users, Users2, Globe, ArrowRight, Check, X, Hammer, FileText, Scissors, Settings, Zap, Grip, Droplets, HardHat, Cog, LucideIcon, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function AhamadAgencies() {

  return (
    <main className="min-h-screen">
      <AhamadAgenciesNavbar />
      
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-center overflow-hidden" style={{
        background: `linear-gradient(135deg, 
          #10b981 0%, 
          #059669 25%, 
          #047857 50%, 
          #065f46 75%, 
          #064e3b 100%)`
      }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <Sprout size={20} />
                <span className="text-sm font-medium">Premium Agricultural Tools</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-green-100">Tata Agrigo Excellence</span>
              </h1>

              <p className="text-xl text-green-100 leading-relaxed">
                Your trusted partner for premium agricultural tools, construction equipment, and 
                professional-grade products. From hand tools to welding electrodes, we provide 
                everything you need for farming and construction excellence.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-gradient-to-br from-green-300/30 to-green-400/30 backdrop-blur-sm rounded-xl p-4 border border-green-200/40">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-green-50">Products</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-400/30 to-green-500/30 backdrop-blur-sm rounded-xl p-4 border border-green-300/40">
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-sm text-green-50">Categories</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-sm rounded-xl p-4 border border-green-400/40">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-green-50">Quality</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Featured Product Categories - 6 Categories */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-green-300/20 to-green-400/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-200/30 hover:bg-green-300/30 transition-all duration-300 group cursor-pointer">
                  <Wrench size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Agricultural Tools</h4>
                  <p className="text-xs text-green-100">Hoes, Mamooties</p>
                </div>
                <div className="bg-gradient-to-br from-green-400/20 to-green-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-300/30 hover:bg-green-400/30 transition-all duration-300 group cursor-pointer">
                  <FileText size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Engineering Tools</h4>
                  <p className="text-xs text-green-100">Files, Spanners</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 group cursor-pointer">
                  <Zap size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Welding Solutions</h4>
                  <p className="text-xs text-green-100">Electrodes</p>
                </div>
                <div className="bg-gradient-to-br from-green-300/20 to-green-400/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-200/30 hover:bg-green-300/30 transition-all duration-300 group cursor-pointer">
                  <Flower2 size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Garden Tools</h4>
                  <p className="text-xs text-green-100">Landscaping</p>
                </div>
                <div className="bg-gradient-to-br from-green-400/20 to-green-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-300/30 hover:bg-green-400/30 transition-all duration-300 group cursor-pointer">
                  <Hammer size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Hammers & Axes</h4>
                  <p className="text-xs text-green-100">Construction</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 group cursor-pointer">
                  <Scissors size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Abrasive Tools</h4>
                  <p className="text-xs text-green-100">Cutting & Grinding</p>
                </div>
              </div>
              
              {/* Category Count Badge */}
              <div className="absolute -top-2 -right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                <span className="text-xs font-semibold">6 Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Products Section */}
      <section id="products-section" className="py-24 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 rounded-full px-6 py-3 mb-8">
              <Wrench size={20} />
              <span className="text-sm font-semibold">Premium Quality Products</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Explore Our
              <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                Product Categories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of professional-grade tools and equipment, 
              carefully organized into specialized categories for every project and application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Agri & Construction',
                subtext: 'Professional Tools',
                icon: Wrench,
                image: '/images/agricultural-tools.png',
                color: 'from-green-500 to-emerald-600',
                bgColor: 'bg-green-50',
                textColor: 'text-green-700'
              },
              {
                category: 'DIY Tools',
                subtext: 'Tool Kits & Sets',
                icon: Hammer,
                image: '/images/diy-tools.png',
                color: 'from-blue-500 to-cyan-600',
                bgColor: 'bg-blue-50',
                textColor: 'text-blue-700'
              },
              {
                category: 'Filing Tools',
                subtext: 'Sharpening Equipment',
                icon: Zap,
                image: '/images/filing-tools.png',
                color: 'from-purple-500 to-violet-600',
                bgColor: 'bg-purple-50',
                textColor: 'text-purple-700'
              },
              {
                category: 'Garden Tools',
                subtext: 'Landscaping Basics',
                icon: Flower2,
                image: '/images/gardening-tools.png',
                color: 'from-emerald-500 to-green-600',
                bgColor: 'bg-emerald-50',
                textColor: 'text-emerald-700'
              },
              {
                category: 'Industrial & Hardware',
                subtext: 'Heavy Duty Equipment',
                icon: Settings,
                image: '/images/industrial-hardware.png',
                color: 'from-gray-500 to-slate-600',
                bgColor: 'bg-gray-50',
                textColor: 'text-gray-700'
              },
              {
                category: 'Trade Hand Tools',
                subtext: 'Professional Grade',
                icon: Shield,
                image: '/images/trade-hand-tools.png',
                color: 'from-orange-500 to-red-600',
                bgColor: 'bg-orange-50',
                textColor: 'text-orange-700'
              }
            ].map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 border border-gray-100">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <category.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {category.category}
                          </h3>
                          <p className="text-white/80 text-sm font-medium">
                            {category.subtext}
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Image section */}
                  <div className={`${category.bgColor} p-8 flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20"></div>
                    <div className="relative z-10">
                      <Image 
                        src={category.image} 
                        alt={category.category}
                        width={160}
                        height={160}
                        className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-lg"></div>
                  </div>
                  
                  {/* Footer */}
                  <div className="p-6 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${category.textColor}`}>
                        Explore Products
                      </span>
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                        <ArrowRight size={12} className="text-gray-600 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <span>View All Products</span>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Why Choose AHAMAD Agencies?
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Your partner in agricultural success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Quality Products', desc: 'All Tata Agrigo products meet the highest quality standards and are backed by comprehensive warranties.' },
              { icon: Users, title: 'Expert Support', desc: 'Our agricultural specialists provide personalized guidance and support throughout the growing season.' },
              { icon: Users2, title: 'Farmer-First Approach', desc: 'We understand farmers\' needs and provide solutions that improve profitability and sustainability.' },
              { icon: Globe, title: 'Local Presence', desc: 'Strong local network ensures quick response times and personalized service in your area.' }
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
                Ready to improve your agricultural productivity? Contact us for expert advice and premium tools.
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
                  Get instant tool recommendations and pricing
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
                  Send us your detailed requirements
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-accent-200">
              <div className="flex items-center justify-center mb-4">
                <MapPin size={24} className="text-green-600 mr-3" />
                <h4 className="font-bold text-accent-800 text-lg">Visit Our Store</h4>
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
          href="https://wa.me/919842448051?text=Hi%20AHAMAD%20Agencies,%20I'm%20interested%20in%20your%20agricultural%20tools%20and%20equipment.%20Can%20you%20help%20me%20with%20product%20information%20and%20pricing?"
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
