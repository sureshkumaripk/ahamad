'use client'

import { useState, useEffect } from 'react'
import { Users2, TrendingUp, Users, Award } from 'lucide-react'

export default function About() {
  const [counts, setCounts] = useState({ companies: 0, products: 0, customers: 0 })

  useEffect(() => {
    const animateCounts = () => {
      const targets = { companies: 2, products: 100, customers: 500 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)

        setCounts({
          companies: Math.floor(targets.companies * easeOut),
          products: Math.floor(targets.products * easeOut),
          customers: Math.floor(targets.customers * easeOut)
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts(targets)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounts()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('about-stats')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-6">
                About Ahamad Groups
              </h2>
              <p className="text-lg text-accent-700 leading-relaxed">
                Ahamad Groups has been a trusted name in the business community, serving customers with 
                excellence and integrity. Our two companies work synergistically to provide comprehensive 
                solutions across construction and agricultural sectors.
              </p>
            </div>

            {/* Stats */}
            <div id="about-stats" className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {counts.companies}+
                </div>
                <p className="text-accent-600 font-medium">Companies</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-600 mb-2">
                  {counts.products}+
                </div>
                <p className="text-accent-600 font-medium">Products</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {counts.customers}+
                </div>
                <p className="text-accent-600 font-medium">Happy Customers</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent-800 mb-1">Quality Assurance</h4>
                  <p className="text-sm text-accent-600">Premium Tata products with comprehensive warranties</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent-800 mb-1">Growth Focused</h4>
                  <p className="text-sm text-accent-600">Continuous expansion and innovation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent-800 mb-1">Expert Team</h4>
                  <p className="text-sm text-accent-600">Experienced professionals in both sectors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users2 size={20} className="text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent-800 mb-1">Trusted Partnership</h4>
                  <p className="text-sm text-accent-600">Long-standing relationships with clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 gradient-bg rounded-3xl p-8 flex flex-col items-center justify-center text-white text-center space-y-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Users2 size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Trusted Partnership</h3>
                  <p className="text-blue-100">Building relationships that last</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
