import AhamadGroupNavbar from '@/components/AhamadGroupNavbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Building, Sprout, ArrowRight, Check, MessageCircle, Phone, Mail, MapPin, Award, Users, Globe, Truck, Wrench, Hammer, Zap, Settings, Star, Shield, TrendingUp, Layers, Factory, Home as HomeIcon, Flower2, FileText, Grip } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AhamadGroupNavbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        {/* Modern Abstract Background */}
        <div className="absolute inset-0">
          {/* Large geometric shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-88 h-88 bg-gradient-to-tl from-green-300/25 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          {/* Floating geometric elements */}
          <div className="absolute inset-0">
            {/* Large rectangles */}
            <div className="absolute top-1/4 left-1/6 w-32 h-20 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-2xl rotate-12 animate-float" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/3 right-1/5 w-28 h-16 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-2xl -rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-14 bg-gradient-to-r from-blue-500/15 to-blue-700/15 rounded-2xl rotate-45 animate-float" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-30 h-18 bg-gradient-to-r from-green-500/15 to-green-700/15 rounded-2xl -rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
            
            {/* Medium squares */}
            <div className="absolute top-1/2 left-1/8 w-16 h-16 bg-gradient-to-br from-blue-300/25 to-blue-500/25 rounded-xl rotate-12 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/6 right-1/8 w-14 h-14 bg-gradient-to-br from-green-300/25 to-green-500/25 rounded-xl -rotate-12 animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-1/6 left-1/2 w-18 h-18 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl rotate-45 animate-pulse" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute bottom-1/2 right-1/6 w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl -rotate-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            {/* Small circles */}
            <div className="absolute top-1/5 left-1/3 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/5 right-1/4 w-6 h-6 bg-gradient-to-r from-green-400/30 to-green-600/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 left-1/5 w-7 h-7 bg-gradient-to-r from-blue-500/25 to-blue-700/25 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-1/3 right-1/5 w-5 h-5 bg-gradient-to-r from-green-500/25 to-green-700/25 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-8 p-16">
              {[...Array(96)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${1.5 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 via-transparent to-green-100/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 text-gray-800">
          <div className="text-center max-w-6xl mx-auto space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md rounded-full px-8 py-4 border border-gray-200 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse"></div>
              <Building size={20} className="text-green-600" />
              <span className="text-sm font-semibold tracking-wider text-gray-700">PREMIUM BUSINESS GROUP</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  Ahamad
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                  Groups
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Excellence in <span className="text-green-600 font-semibold">Construction</span> & 
                <span className="text-blue-600 font-semibold"> Agricultural</span> Solutions
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto">
              Two specialized companies delivering <span className="text-gray-800 font-semibold">premium solutions</span> across 
              construction materials and agricultural tools. Authorized distributors of 
              <span className="text-green-600 font-semibold"> Tata Steel</span> and 
              <span className="text-blue-600 font-semibold"> Tata Agrico</span> products.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="group text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl font-black text-green-600 mb-2">556+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Premium Products</div>
              </div>
              <div className="group text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl font-black text-blue-600 mb-2">2</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Specialized Companies</div>
              </div>
              <div className="group text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl font-black text-emerald-600 mb-2">15+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Years Excellence</div>
              </div>
              <div className="group text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl font-black text-cyan-600 mb-2">100%</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Quality Assured</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link 
                href="/ahamad-co" 
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 hover:-translate-y-1 flex items-center space-x-3"
              >
                <Building size={24} />
                <span>Construction Materials</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/ahamed-agencies" 
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1 flex items-center space-x-3"
              >
                <Sprout size={24} />
                <span>Agricultural Tools</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Modern Scroll Indicator */}
          <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '-85px' }}>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mt-2 animate-bounce"></div>
              </div>
              <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">Scroll to Explore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-6 py-3 mb-8">
              <Building size={20} />
              <span className="text-sm font-semibold">Our Specialized Companies</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Two Companies,
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                One Vision
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Industry-leading companies under the Ahamad Groups umbrella, each serving distinct markets with specialized expertise and premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Ahamad & Co Detailed */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100 transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Ahamad & Co</h3>
                  <p className="text-gray-600 text-lg">Premium Construction Materials</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Authorized distributor of Tata Steel products and Palram polycarbonate solutions. 
                We provide comprehensive roofing, walling, and construction solutions for residential, 
                commercial, and industrial projects.
              </p>

              {/* Enhanced Products Grid */}
              <div className="grid grid-cols-5 gap-4 mb-8">
                {[
                  { name: "Tata Shaktee", logo: "/images/products/tata-shaktee-logo.png", desc: "GC Sheets" },
                  { name: "Durashine", logo: "/images/products/durashine-logo.png", desc: "Color Coated" },
                  { name: "Tata Kosh", logo: "/images/products/tata-kosh-logo.png", desc: "GP Sheets" },
                  { name: "Tata Wama", logo: "/images/products/tata-wama-logo.png", desc: "Walling" },
                  { name: "Palram", logo: "/images/products/palram-logo.png", desc: "Polycarbonate" }
                ].map((product, index) => (
                  <div key={index} className="text-center group/product">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 mb-2 mx-auto group-hover/product:bg-blue-50 transition-colors duration-300">
                      <Image
                        src={product.logo}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain group-hover/product:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.desc}</p>
                  </div>
                ))}
              </div>

              <Link 
                href="/ahamad-co" 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
              >
                <span>Explore Construction Materials</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* AHAMED Agencies Detailed */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100 transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sprout size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">AHAMED Agencies</h3>
                  <p className="text-gray-600 text-lg">Agricultural & Construction Tools</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Comprehensive partner for agricultural and construction tools. We offer 51+ premium products 
                across 6 categories including hand tools, garden tools, industrial hardware, and professional equipment 
                from trusted Tata Agrico brands.
              </p>

              {/* Enhanced Tool Categories Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Wrench, name: "Agri & Construction", desc: "Chaff Cutters, Tillers" },
                  { icon: Hammer, name: "DIY Tools", desc: "Screwdrivers, Kits" },
                  { icon: FileText, name: "Filing Tools", desc: "TATA AGRICO Files" },
                  { icon: Flower2, name: "Garden Tools", desc: "Cultivators, Shears" },
                  { icon: Settings, name: "Industrial Hardware", desc: "Nails, Electrodes" },
                  { icon: Shield, name: "Trade Hand Tools", desc: "Spanners, Pliers" }
                ].map((category, index) => (
                  <div key={index} className="text-center group/category">
                    <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-2 mx-auto group-hover/category:bg-green-100 transition-colors duration-300">
                      <category.icon size={28} className="text-green-600 group-hover/category:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-xs text-gray-600 font-medium">{category.name}</p>
                    <p className="text-xs text-gray-500">{category.desc}</p>
                  </div>
                ))}
              </div>

              <Link 
                href="/ahamed-agencies" 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
              >
                <span>Explore Tools & Equipment</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 rounded-full px-6 py-3 mb-8">
              <Star size={20} />
              <span className="text-sm font-semibold">Featured Products</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Our Premium
              <span className="block bg-gradient-to-r from-orange-600 to-purple-500 bg-clip-text text-transparent">
                Product Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium products from both companies, 
              carefully selected to meet the highest standards of quality and performance.
            </p>
          </div>

          {/* Construction Materials Showcase */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Construction Materials</h3>
              <p className="text-lg text-gray-600">Premium Tata Steel & Palram Solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: "Tata Shaktee", 
                  logo: "/images/products/tata-shaktee-logo.png", 
                  desc: "Galvanized Corrugated Sheets",
                  features: ["Virgin steel construction", "Uniform zinc coating", "Weather resistant"],
                  url: "/ahamad-co/tata-shaktee"
                },
                { 
                  name: "Durashine", 
                  logo: "/images/products/durashine-logo.png", 
                  desc: "Color Coated Profile Sheets",
                  features: ["Roof & wall solutions", "Award-winning quality", "Structural products"],
                  url: "/ahamad-co/durashine"
                },
                { 
                  name: "Tata Kosh", 
                  logo: "/images/products/tata-kosh-logo.png", 
                  desc: "GP Sheets with Spangles",
                  features: ["Storage equipment", "Utility applications", "Rural & urban solutions"],
                  url: "/ahamad-co/tata-kosh"
                },
                { 
                  name: "Tata Wama", 
                  logo: "/images/products/tata-wama-logo.png", 
                  desc: "Walling & Fencing Solutions",
                  features: ["Vertical applications", "Construction site use", "Temporary structures"],
                  url: "/ahamad-co/tata-wama"
                },
                { 
                  name: "Palram Products", 
                  logo: "/images/products/palram-logo.png", 
                  desc: "Polycarbonate Solutions",
                  features: ["SUNTUF sheets", "PALSUN flat sheets", "Architectural applications"],
                  url: "/ahamad-co/palram-products"
                }
              ].map((product, index) => (
                <Link key={index} href={product.url} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl p-3 mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                        <Image
                          src={product.logo}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                      <p className="text-gray-600">{product.desc}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Agricultural Tools Showcase */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Agricultural & Construction Tools</h3>
              <p className="text-lg text-gray-600">Professional Tata Agrico Equipment</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: "Agri & Construction Tools", 
                  icon: Wrench, 
                  desc: "Chaff Cutters, Tillers, Rotator Blades",
                  features: ["Chaff Cutter & Thresher", "Tiller Shoe", "Total Rotator Blade"],
                  url: "/ahamed-agencies/agri-construction-tools",
                  color: "from-green-500 to-emerald-600"
                },
                { 
                  name: "DIY Tools", 
                  icon: Hammer, 
                  desc: "Screwdriver Sets & Tool Kits",
                  features: ["Combination Sets", "Standard Sets", "Hand Tool Kits"],
                  url: "/ahamed-agencies/diy-tools",
                  color: "from-blue-500 to-cyan-600"
                },
                { 
                  name: "Filing Tools", 
                  icon: FileText, 
                  desc: "TATA AGRICO Filing Equipment",
                  features: ["Slim Taper Files", "Heavy Taper Files", "Flat Bastard Files"],
                  url: "/ahamed-agencies/filing-tools",
                  color: "from-purple-500 to-violet-600"
                },
                { 
                  name: "Garden Tools", 
                  icon: Flower2, 
                  desc: "Landscaping & Cultivation Tools",
                  features: ["Hand Cultivator", "Lopper", "Chopper", "Forks"],
                  url: "/ahamed-agencies/garden-tools",
                  color: "from-emerald-500 to-green-600"
                },
                { 
                  name: "Industrial Hardware", 
                  icon: Settings, 
                  desc: "Heavy Duty Industrial Equipment",
                  features: ["Concrete Nails", "Flap Disc", "Electrodes", "Grinding Wheels"],
                  url: "/ahamed-agencies/industrial-hardware",
                  color: "from-gray-500 to-slate-600"
                },
                { 
                  name: "Trade Hand Tools", 
                  icon: Shield, 
                  desc: "Professional Grade Hand Tools",
                  features: ["Allen Keys", "Grease Guns", "Pliers & Cutters", "Spanners"],
                  url: "/ahamed-agencies/trade-hand-tools",
                  color: "from-orange-500 to-red-600"
                }
              ].map((category, index) => (
                <Link key={index} href={category.url} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon size={32} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h4>
                      <p className="text-gray-600">{category.desc}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700">
                      <span>Explore Products</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ahamad Groups */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-6 py-3 mb-8">
              <Award size={20} />
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Excellence, Trust, and
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Quality Assured
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence across all business verticals ensures you get the best products and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'All products meet the highest industry standards with comprehensive warranties and quality assurance from Tata Steel and leading brands.' },
              { icon: Users, title: 'Expert Support', desc: 'Our specialized teams provide technical guidance and support for both construction and agricultural needs with personalized service.' },
              { icon: Globe, title: 'Authorized Distributor', desc: 'Official partnerships with Tata Steel, Tata Agrico, and Palram ensure authentic products and competitive pricing.' },
              { icon: Truck, title: 'Reliable Service', desc: 'Timely delivery, excellent customer service, and long-standing relationships built on trust and reliability for over 15 years.' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
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
