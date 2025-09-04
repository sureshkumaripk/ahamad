import Link from 'next/link'
import { Building, Sprout, ArrowRight, Check } from 'lucide-react'

export default function Companies() {
  return (
    <section id="companies" className="section-padding bg-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            Our Companies
          </h2>
          <p className="text-xl text-accent-600 max-w-2xl mx-auto">
            Two specialized companies under the Ahamad Groups umbrella, each serving distinct markets with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ahamad & Co */}
          <div className="card p-8 group hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Building size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent-800">Ahamad & Co</h3>
                <p className="text-accent-600">Construction Solutions</p>
              </div>
            </div>

            <p className="text-accent-700 mb-6 leading-relaxed">
              Specializing in construction materials, we are the trusted distributor of Tata roofing sheets and coils, 
              providing quality solutions for residential and commercial construction projects.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-accent-800 mb-3">Products:</h4>
              <ul className="space-y-2">
                {['Tata Roofing Sheets', 'Tata Coils', 'Construction Solutions'].map((product, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check size={16} className="text-secondary-500 flex-shrink-0" />
                    <span className="text-accent-700">{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/ahamad-co" 
              className="btn-outline inline-flex items-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300"
            >
              Learn More
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* AHAMAD Agencies */}
          <div className="card p-8 group hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                <Sprout size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent-800">AHAMAD Agencies</h3>
                <p className="text-accent-600">Tools & Equipment Solutions</p>
              </div>
            </div>

            <p className="text-accent-700 mb-6 leading-relaxed">
              Your comprehensive partner for agricultural and construction tools. We offer 500+ premium products across 
              32 categories including hand tools, power tools, welding equipment, and safety gear from trusted brands.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-accent-800 mb-3">Key Product Categories:</h4>
              <ul className="space-y-2">
                {['Hand Tools & Hoes', 'Power Tools & Equipment', 'Welding Electrodes', 'Safety & Protective Gear', 'Construction Tools', 'Agricultural Implements'].map((product, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check size={16} className="text-secondary-500 flex-shrink-0" />
                    <span className="text-accent-700">{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary-700 font-medium">500+ Products</span>
                <span className="text-secondary-700 font-medium">32 Categories</span>
                <span className="text-secondary-700 font-medium">Premium Quality</span>
              </div>
            </div>

            <Link 
              href="/ahamad-agencies" 
              className="btn-outline inline-flex items-center group-hover:bg-secondary-600 group-hover:text-white transition-all duration-300"
            >
              Learn More
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
