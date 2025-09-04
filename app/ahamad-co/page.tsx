import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Building, Home, Cog, Check, ArrowRight, Award, Truck, Users, Users2 } from 'lucide-react'

export default function AhamadCo() {
  return (
    <main className="min-h-screen">
      <Navbar 
        companyName="Ahamad & Co"
        companyLogo="Ahamad & Co"
        logoColor="text-blue-800"
        hoverColor="hover:text-blue-600"
      />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <Building size={20} />
                <span className="text-sm font-medium">Construction Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ahamad & Co
                <span className="block text-secondary-300">Tata Roofing Excellence</span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Specializing in premium construction materials, Ahamad & Co has been the leading 
                distributor of Tata roofing sheets and coils. We provide comprehensive solutions 
                for residential, commercial, and industrial construction projects.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-blue-100">Projects Completed</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-blue-100">Quality Assurance</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <Home size={40} className="mx-auto mb-3" />
                  <h4 className="font-semibold">Roofing Sheets</h4>
                  <p className="text-sm text-blue-100">Premium Tata solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <Cog size={40} className="mx-auto mb-3" />
                  <h4 className="font-semibold">Coils</h4>
                  <p className="text-sm text-blue-100">High-quality steel coils</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Premium Tata construction materials for all your building needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Home size={40} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3">Tata Roofing Sheets</h3>
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    High-quality galvanized steel roofing sheets designed for durability and weather resistance. 
                    Perfect for residential and commercial applications.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['Weather resistant coating', 'Corrosion protection', 'Easy installation', 'Long-lasting durability'].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-secondary-500 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent-100 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-1">Specifications:</h4>
                    <p className="text-sm text-accent-600">Available in various thicknesses and sizes to meet your specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Cog size={40} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3">Tata Coils</h3>
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    Premium steel coils manufactured to the highest standards, suitable for various 
                    construction and manufacturing applications.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {['High tensile strength', 'Consistent quality', 'Multiple grades available', 'Custom sizing options'].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-secondary-500 flex-shrink-0" />
                        <span className="text-accent-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent-100 rounded-lg p-4">
                    <h4 className="font-semibold text-accent-800 mb-1">Specifications:</h4>
                    <p className="text-sm text-accent-600">Available in different grades and specifications to meet diverse industry needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Applications
            </h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Our products serve diverse construction needs across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: 'Commercial Buildings', desc: 'Office complexes, shopping centers, and commercial structures requiring durable roofing solutions.' },
              { icon: Home, title: 'Residential Projects', desc: 'Houses, apartments, and residential complexes with reliable and aesthetically pleasing roofing.' },
              { icon: Cog, title: 'Industrial Facilities', desc: 'Factories, warehouses, and industrial buildings requiring heavy-duty construction materials.' },
              { icon: Building, title: 'Storage Solutions', desc: 'Storage facilities, cold storage units, and specialized storage buildings.' }
            ].map((app, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <app.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-accent-800 mb-3">{app.title}</h3>
                <p className="text-accent-600 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-accent-50">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-accent-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-accent-700 leading-relaxed">
                  Ready to start your construction project? Contact us for expert advice and competitive pricing.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-800 mb-1">Phone</h4>
                    <p className="text-accent-600">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-800 mb-1">Email</h4>
                    <p className="text-accent-600">info@ahamadco.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-accent-800 mb-6">Request a Quote</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select Product</option>
                    <option value="roofing-sheets">Tata Roofing Sheets</option>
                    <option value="coils">Tata Coils</option>
                    <option value="both">Both Products</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Project Details & Requirements"
                    rows={4}
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Request Quote
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
