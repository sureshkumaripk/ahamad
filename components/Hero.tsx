'use client'

import { useState, useEffect } from 'react'
import { Building2, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const fullText = 'Welcome to Ahamad Groups'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="gradient-bg text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
              <Building2 size={20} />
              <span className="text-sm font-medium">Two Companies</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {currentText}
              <span className="block text-secondary-300">Leading Excellence</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
              A diversified business conglomerate with two specialized companies serving 
              the construction and agricultural sectors with premium Tata products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#companies" 
                className="btn-primary inline-flex items-center justify-center group"
              >
                Explore Companies
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Building2 size={40} className="text-white" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Two Companies</h3>
                  <p className="text-blue-100">Specialized Solutions</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
