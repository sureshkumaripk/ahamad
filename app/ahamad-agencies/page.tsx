'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Sprout, Tractor, Beaker, Shield, Wrench, Wheat, Leaf, Carrot, Flower2, GraduationCap, Microscope, TrendingUp, Truck, Award, Users, Users2, Globe, ArrowRight, Check, X, Hammer, FileText, Scissors, Settings, Zap, Grip, Droplets, HardHat, Cog, LucideIcon } from 'lucide-react'

interface Product {
  name: string
  code: string
  weight: string
}

interface ProductCategory {
  category: string
  icon: LucideIcon
  description: string
  products: Product[]
}

export default function AhamadAgencies() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (category: ProductCategory) => {
    setSelectedCategory(category)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCategory(null)
  }

  return (
    <main className="min-h-screen">
      <Navbar 
        companyName="AHAMAD Agencies"
        companyLogo="AHAMAD Agencies"
        logoColor="text-green-800"
        hoverColor="hover:text-green-600"
      />
      
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
                  <div className="text-2xl font-bold text-white">32</div>
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
                <div className="bg-gradient-to-br from-green-300/20 to-green-400/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-200/30 hover:bg-green-300/30 transition-all duration-300 group cursor-pointer" onClick={() => openModal({ category: 'Hoes', icon: Wrench, description: 'Professional agricultural hoes', products: [] })}>
                  <Wrench size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Agricultural Tools</h4>
                  <p className="text-xs text-green-100">Hoes, Mamooties</p>
                </div>
                <div className="bg-gradient-to-br from-green-400/20 to-green-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-300/30 hover:bg-green-400/30 transition-all duration-300 group cursor-pointer" onClick={() => openModal({ category: 'Engineering Files', icon: FileText, description: 'Professional engineering files', products: [] })}>
                  <FileText size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Engineering Tools</h4>
                  <p className="text-xs text-green-100">Files, Spanners</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 group cursor-pointer" onClick={() => openModal({ category: 'Welding Electrodes', icon: Zap, description: 'Professional welding electrodes', products: [] })}>
                  <Zap size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Welding Solutions</h4>
                  <p className="text-xs text-green-100">Electrodes</p>
                </div>
                <div className="bg-gradient-to-br from-green-300/20 to-green-400/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-200/30 hover:bg-green-300/30 transition-all duration-300 group cursor-pointer" onClick={() => openModal({ category: 'Garden Tools', icon: Flower2, description: 'Professional garden tools', products: [] })}>
                  <Flower2 size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Garden Tools</h4>
                  <p className="text-xs text-green-100">Landscaping</p>
                </div>
                <div className="bg-gradient-to-br from-green-400/20 to-green-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-300/30 hover:bg-green-400/30 transition-all duration-300 group cursor-pointer" onClick={() => openModal({ category: 'Hammers & Axes', icon: Hammer, description: 'Professional hammers and axes', products: [] })}>
                  <Hammer size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Hammers & Axes</h4>
                  <p className="text-xs text-green-100">Construction</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 group cursor-pointer" onClick={() => openModal({ category: 'Abrasive Wheels', icon: Scissors, description: 'Professional abrasive wheels', products: [] })}>
                  <Scissors size={32} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-sm mb-1">Abrasive Tools</h4>
                  <p className="text-xs text-green-100">Cutting & Grinding</p>
                </div>
              </div>
              
              {/* Category Count Badge */}
              <div className="absolute -top-2 -right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                <span className="text-xs font-semibold">32 Categories</span>
              </div>
              
              {/* Geometric Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 animate-bounce rotate-12" style={{animationDuration: '3s', animationDelay: '0.5s'}}>
                <Settings size={18} className="animate-spin" style={{animationDuration: '4s'}} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 animate-pulse" style={{animationDuration: '2s', animationDelay: '1s'}}>
                <Grip size={16} className="animate-pulse" />
              </div>
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white/10 backdrop-blur-sm" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}>
                <div className="w-full h-full flex items-center justify-center animate-ping" style={{animationDuration: '4s', animationDelay: '2s'}}>
                  <Droplets size={18} className="animate-bounce" style={{animationDuration: '2s'}} />
                </div>
              </div>
              
              {/* Additional Geometric Icons */}
              <div className="absolute top-1/4 -right-8 w-8 h-8 bg-white/15 backdrop-blur-sm rotate-45 flex items-center justify-center border border-white/25 animate-pulse" style={{animationDuration: '3s', animationDelay: '1.5s'}}>
                <Hammer size={14} className="animate-spin rotate-45" style={{animationDuration: '6s'}} />
              </div>
              <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.8s'}}>
                <Scissors size={12} className="animate-pulse" />
              </div>
              <div className="absolute top-3/4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 animate-ping rotate-12" style={{animationDuration: '5s', animationDelay: '3s'}}>
                <Wrench size={16} className="animate-bounce" style={{animationDuration: '3s'}} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
        
        {/* Modern Geometric Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating Hexagons */}
          <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-white/8 rotate-12 animate-pulse" style={{animationDuration: '6s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}></div>
          <div className="absolute top-3/4 right-1/6 w-8 h-8 bg-white/6 rotate-45 animate-pulse" style={{animationDuration: '8s', animationDelay: '2s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-white/10 rotate-90 animate-pulse" style={{animationDuration: '10s', animationDelay: '1s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}></div>
          
          {/* Floating Circles */}
          <div className="absolute top-1/6 right-1/3 w-16 h-16 border border-white/15 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/6 left-1/3 w-12 h-12 border border-white/12 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-8 h-8 border border-white/18 rounded-full animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          
          {/* Geometric Lines */}
          <div className="absolute top-1/3 left-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-1/3 right-0 w-20 h-0.5 bg-gradient-to-l from-transparent via-white/15 to-transparent animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse" style={{animationDuration: '7s', animationDelay: '1s'}}></div>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-br-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-2xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-2xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-2xl animate-pulse" style={{animationDuration: '14s', animationDelay: '6s'}}></div>
          
          {/* Floating Dots */}
          <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-white/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-2/5 right-1/5 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/5 left-2/5 w-2.5 h-2.5 bg-white/15 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-2/5 right-2/5 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/18 rounded-full animate-pulse" style={{animationDuration: '6s', animationDelay: '3s'}}></div>
        </div>
      </section>


      {/* Our Products Section */}
      <section id="products-section" className="py-20 bg-gradient-to-br from-accent-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 rounded-full px-4 py-2 mb-6">
              <Wrench size={20} />
              <span className="text-sm font-medium">Premium Quality Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-accent-800 mb-6">
              Our Products
            </h2>
            <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium quality tools and equipment, 
              manufactured through advanced BF-BOF-LF-CC process for superior durability and performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-accent-200">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-accent-700">500+ Products</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-accent-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-accent-700">32 Categories</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-accent-200">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-accent-700">Premium Quality</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                category: 'Hoes',
                icon: Wrench,
                description: 'Professional agricultural hoes for efficient soil preparation and cultivation',
                products: [
                  { name: 'Fork Powrah 1.6', code: 'HOE001', weight: '1.6 kg' },
                  { name: 'Agri 3', code: 'HOE002', weight: '1.05 kg' },
                  { name: 'Agri 4', code: 'HOE003', weight: '1.4 kg' },
                  { name: 'Agri 5', code: 'HOE004', weight: '1.6 kg' },
                  { name: 'Agri 6', code: 'HOE005', weight: '1.8 kg' },
                  { name: 'Nepal Agri', code: 'HOE040', weight: '1.6 kg' }
                ]
              },
              {
                category: 'Regional Hoes',
                icon: Globe,
                description: 'Specialized hoes designed for different regional farming practices',
                products: [
                  { name: 'East India', code: 'HOE006', weight: '1.8 kg' },
                  { name: 'West India', code: 'HOE043', weight: '1.25 kg' },
                  { name: 'West India', code: 'HOE007', weight: '1.6 kg' },
                  { name: 'Bombay 5', code: 'HOE077', weight: '0.83 kg' },
                  { name: 'Bombay 7', code: 'HOE009', weight: '1.2 kg' },
                  { name: 'Bombay 8', code: 'HOE010', weight: '1.4 kg' }
                ]
              },
              {
                category: 'Mamooties',
                icon: Hammer,
                description: 'Heavy-duty digging tools for deep soil cultivation and excavation',
                products: [
                  { name: 'Mysore Mamooty (Orange)', code: 'HOE055', weight: '1.4 kg' },
                  { name: 'Mysore Mamooty (Gold)', code: 'HOE035', weight: '1.4 kg' },
                  { name: 'Swan Neck Mamooty', code: 'HOE013', weight: '1.45 kg' },
                  { name: 'Swan Neck Mamooty', code: 'HOE014', weight: '1.4 kg' },
                  { name: 'Tanged Mamooty 1.4', code: 'HOE024', weight: '1.4 kg' },
                  { name: 'Tanged Mamooty 1.6', code: 'HOE015', weight: '1.6 kg' },
                  { name: 'Button Head Mamooty', code: 'HOE016', weight: '1.8 kg' },
                  { name: 'Kundali 1.8', code: 'HOE041', weight: '1.8 kg' }
                ]
              },
              {
                category: 'Specialized Hoes',
                icon: Scissors,
                description: 'Specialized hoes designed for specific agricultural tasks and crop types',
                products: [
                  { name: 'Potato Hoe', code: 'HOE060', weight: '0.85 kg' },
                  { name: 'Potato Hoe', code: 'HOE056', weight: '1.0 kg' },
                  { name: 'TP 4', code: 'HOE020', weight: '1.3 kg' },
                  { name: 'TP 5 Gold', code: 'HOE031', weight: '1.4 kg' },
                  { name: 'TP 11', code: 'HOE027', weight: '1.4 kg' },
                  { name: 'TP 6 Larg', code: 'HOE051', weight: '1.6 kg' },
                  { name: 'TP 3', code: 'HOE019', weight: '1.65 kg' },
                  { name: 'TP 5', code: 'HOE021', weight: '1.45 kg' },
                  { name: 'TP 6', code: 'HOE047', weight: '1.3 kg' },
                  { name: 'TP - GDN', code: 'HOE064', weight: '1.2 kg' }
                ]
              },
              {
                category: 'Integrated Hoes',
                icon: Cog,
                description: 'Advanced integrated hoes with enhanced features for modern farming',
                products: [
                  { name: 'Powrah - Integrated AG 3', code: 'HOE068', weight: '1.76 kg' },
                  { name: 'Powrah - Integrated AG 4', code: 'HOE074', weight: '2.11 kg' },
                  { name: 'Powrah - Integrated AG6', code: 'HOE069', weight: '2.51 kg' },
                  { name: 'Powrah - Integrated Nepal AG 6', code: 'HOE072', weight: '2.31 kg' },
                  { name: 'Powrah - Integrated East India 1.6', code: 'HOE075', weight: '2.31 kg' },
                  { name: 'Powrah - Integrated West India 3', code: 'HOE076', weight: '2.31 kg' },
                  { name: 'Powrah - Integrated Agrilite 4', code: 'HOE081', weight: '1.76 kg' },
                  { name: 'Powrah - Integrated SNM 1.45', code: 'HOE082', weight: '2.0 kg' },
                  { name: 'Powrah - Integrated West India 4', code: 'HOE083', weight: '2.62 kg' },
                  { name: 'Powrah - Integrated AG3 Burmese', code: 'HOE084', weight: '1.56 kg' },
                  { name: 'Powrah - Integrated Potato Hoe (0.85kg)-3', code: 'HOE085', weight: '1.56 kg' },
                  { name: 'Powrah - Integrated Potato Hoe (0.85kg)-4', code: 'HOE086', weight: '1.87 kg' },
                  { name: 'Powrah - Integrated Agrilite New 3', code: 'HOE088', weight: '1.67 kg' }
                ]
              },
              {
                category: 'Handles & Chisels',
                icon: Grip,
                description: 'Professional handles and chisels for various construction and agricultural applications',
                products: [
                  { name: 'Powrah-PVC Handle 29"', code: 'HOE044', weight: '0.58 kg' },
                  { name: 'Powrah-PVC Handle 30.5"', code: 'HOE045', weight: '0.76 kg' },
                  { name: 'Powrah-PVC Handle 35"', code: 'HOE059', weight: '0.95 kg' },
                  { name: 'Chisel 22 x 325 mm', code: 'CHE001', weight: '0.46 kg' },
                  { name: 'Chisel 25 x 325 mm', code: 'CHE002', weight: '0.46 kg' },
                  { name: 'Chisel 29 x 325 mm', code: 'CHE003', weight: '0.46 kg' },
                  { name: 'Chisel 32 x 225 mm', code: 'CHE004', weight: '0.46 kg' },
                  { name: 'Chisel 22mm with point end tip', code: 'CHE005', weight: '0.46 kg' },
                  { name: 'Chisel 22 x 152 mm', code: 'CHE007', weight: '0.46 kg' },
                  { name: 'Chisel 22 x 228 mm', code: 'CHE008', weight: '0.69 kg' },
                  { name: 'Chisel 25 x 152 mm', code: 'CHE009', weight: '0.60 kg' },
                  { name: 'Chisel 25 x 228 mm', code: 'CHE010', weight: '0.90 kg' },
                  { name: 'Chisel 29 x 152 mm', code: 'CHE011', weight: '0.80 kg' },
                  { name: 'Chisel 29 x 228 mm', code: 'CHE012', weight: '1.17 kg' },
                  { name: 'Chisel 32 x 152mm', code: 'CHE013', weight: '0.95 kg' }
                ]
              },
              {
                category: 'Agricultural Consumables',
                icon: Beaker,
                description: 'Essential consumables for farming operations including tiller shoes and blades',
                products: [
                  { name: 'Tiller Shoe TLS001', code: 'TLS001', weight: '0.65 kg' },
                  { name: 'Tiller Shoe TLS002 (3 hole)', code: 'TLS002', weight: '0.85 kg' },
                  { name: 'Tiller Shoe TLS006', code: 'TLS006', weight: '1.4 kg' },
                  { name: 'Tiller Shoe TLS007 (4 hole)', code: 'TLS007', weight: '1.4 kg' },
                  { name: 'Tiller Shoe TLS003 (2 hole)', code: 'TLS003', weight: '0.7 kg' },
                  { name: 'Tiller Shoe TLS009 (3 hole)', code: 'TLS009', weight: '0.85 kg' },
                  { name: 'RT Blade RVB002', code: 'RVB002', weight: '0.9 kg' },
                  { name: 'RT Blade RVB006', code: 'RVB006', weight: '0.9 kg' },
                  { name: 'RT Blade RVB003', code: 'RVB003', weight: '0.9 kg' },
                  { name: 'Chaff Cutter CFC001', code: 'CFC001', weight: '0.9 kg' },
                  { name: 'Chaff Cutter CFC002', code: 'CFC002', weight: '1.0 kg' },
                  { name: 'Chaff Cutter CFC003', code: 'CFC003', weight: '0.9 kg' }
                ]
              },
              {
                category: 'Shovels',
                icon: Wrench,
                description: 'Professional shovels for construction, agriculture, and general purpose use',
                products: [
                  { name: 'SQ 4 Integrated Steel - Matt', code: 'SVL030', weight: '2.45 kg' },
                  { name: 'SQ 4 Integrated Steel Bend - Matt', code: 'SVL031', weight: '2.45 kg' },
                  { name: 'SQ 4 Light Wt - Wooden Handle', code: 'SVL022', weight: '2.23 kg' },
                  { name: 'SQ 4 Light Wt - Steel Handle', code: 'SVL023', weight: '2.16 kg' },
                  { name: 'RD 2 Light Wt - Steel Handle', code: 'SVL026', weight: '1.71 kg' },
                  { name: 'RD 4 Light Wt - Steel Handle', code: 'SVL025', weight: '2.04 kg' },
                  { name: 'RD 2 Steel Handle', code: 'SVL011', weight: '2.0 kg' },
                  { name: 'RD 2 Wooden Handle', code: 'SVL001', weight: '2.1 kg' },
                  { name: 'RD 4 Steel Handle', code: 'SVL012', weight: '2.35 kg' },
                  { name: 'RD 4 Wooden Handle', code: 'SVL002', weight: '2.45 kg' },
                  { name: 'SQ 4 Without Handle', code: 'SVL016', weight: '1.8 kg' },
                  { name: 'SQ 4 Wooden Handle', code: 'SVL004', weight: '2.65 kg' },
                  { name: 'SQ 4 Steel Handle', code: 'SVL008', weight: '2.55 kg' },
                  { name: 'SQ 4 Bend Shoulder', code: 'SVL013', weight: '2.65 kg' },
                  { name: 'SQ 4 Bend Shoulder with Steel Handle', code: 'SVL018', weight: '2.55 kg' },
                  { name: 'SQ 6 Wooden Handle', code: 'SVL005', weight: '2.85 kg' },
                  { name: 'SQ 6 Steel Handle', code: 'SVL009', weight: '2.75 kg' },
                  { name: 'SQ 6 Bend Shoulder - PVC Handle', code: 'SVL019', weight: '2.96 kg' }
                ]
              },
              {
                category: 'Sickles',
                icon: Scissors,
                description: 'Professional sickles for harvesting and cutting applications in agriculture',
                products: [
                  { name: 'Sickle-102 BT (Wooden Handle)', code: 'SIC002', weight: '0.22 kg' },
                  { name: 'Sickle-104 BT (Wooden Handle)', code: 'SIC004', weight: '0.22 kg' },
                  { name: 'Sickle-105 BT (Wooden Handle)', code: 'SIC005', weight: '0.19 kg' },
                  { name: 'Sickle-105 TT (Wooden Handle)', code: 'SIC006', weight: '0.19 kg' },
                  { name: 'Sickle-107 BT (Wooden Handle)', code: 'SIC007', weight: '0.21 kg' },
                  { name: 'Sickle-108 BT (Wooden Handle)', code: 'SIC008', weight: '0.21 kg' },
                  { name: 'SIC-108 TT (Wooden Handle)', code: 'SIC010', weight: '0.21 kg' },
                  { name: 'Sickle-102 BT (Plastic Handle)', code: 'SIC021', weight: '0.23 kg' },
                  { name: 'Sickle-104 BT (Plastic Handle)', code: 'SIC022', weight: '0.23 kg' },
                  { name: 'Sickle-105 BT (Plastic Handle)', code: 'SIC023', weight: '0.21 kg' },
                  { name: 'Sickle-105 TT (Plastic Handle)', code: 'SIC024', weight: '0.21 kg' },
                  { name: 'Sickle-107 BT (Plastic Handle)', code: 'SIC025', weight: '0.22 kg' },
                  { name: 'Sickle-108 BT (Plastic Handle)', code: 'SIC026', weight: '0.22 kg' },
                  { name: 'Sickle-108 TT (Plastic Handle)', code: 'SIC028', weight: '0.22 kg' }
                ]
              },
              {
                category: 'Crowbars & Tools',
                icon: Hammer,
                description: 'Heavy-duty crowbars and tools for construction and demolition work',
                products: [
                  { name: 'Scoop Crowbar 25mm', code: 'CWB027', weight: '3.6 kg' },
                  { name: 'Crowbar 22mm - 5.5\'', code: 'CWB001', weight: '5.1 kg' },
                  { name: 'Crowbar 22mm - 5.5\'', code: 'CWB002', weight: '6.7 kg' },
                  { name: 'Crowbar 29mm - 5.5\'', code: 'CWB003', weight: '8.5 kg' },
                  { name: 'Crowbar 32mm - 5.5\'', code: 'CWB004', weight: '10.5 kg' },
                  { name: 'Crowbar 25mm long chisel end', code: 'CWB028', weight: '6.7 kg' },
                  { name: 'Crowbar 22mm - 4\'', code: 'CWB014', weight: '3.7 kg' },
                  { name: 'Crowbar 25mm - 4\'', code: 'CWB015', weight: '4.9 kg' },
                  { name: 'Crowbar 29mm - 4\'', code: 'CWB016', weight: '6.2 kg' },
                  { name: 'Crowbar 32mm - 4\'', code: 'CWB018', weight: '7.6 kg' },
                  { name: 'Crowbar 22mm - 33"', code: 'CWB022', weight: '2.55 kg' },
                  { name: 'Crowbar 25mm - 33"', code: 'CWB023', weight: '3.35 kg' },
                  { name: 'Crowbar 29mm - 33"', code: 'CWB024', weight: '4.25 kg' },
                  { name: 'Crowbar 32mm - 33"', code: 'CWB025', weight: '5.22 kg' }
                ]
              },
              {
                category: 'Hammers & Axes',
                icon: Hammer,
                description: 'Professional hammers and axes for construction, woodworking, and general use',
                products: [
                  { name: 'SB-1 Stone Breaking Hammer', code: 'HMR014', weight: '0.45 kg' },
                  { name: 'SP-1.5-Round Hole', code: 'HMR026', weight: '0.68 kg' },
                  { name: 'SP-2-Round Hole', code: 'HMR027', weight: '0.91 kg' },
                  { name: 'SP-8-Oval Hole', code: 'HMR019', weight: '3.63 kg' },
                  { name: 'SP-8-Round Hole', code: 'HMR028', weight: '3.63 kg' },
                  { name: 'SP-10-Oval Hole', code: 'HMR018', weight: '4.54 kg' },
                  { name: 'SP-10-Round Hole', code: 'HMR022', weight: '4.54 kg' },
                  { name: 'SP-12-Oval Hole', code: 'HMR029', weight: '5.44 kg' },
                  { name: 'SP-12-Round Hole', code: 'HMR023', weight: '5.44 kg' },
                  { name: 'SP-14-Oval Hole', code: 'HMR030', weight: '6.35 kg' },
                  { name: 'SP-14-Round Hole', code: 'HMR024', weight: '6.35 kg' },
                  { name: 'SP-16-Oval Hole', code: 'HMR031', weight: '7.26 kg' },
                  { name: 'SP-16-Round Hole', code: 'HMR025', weight: '7.27 kg' },
                  { name: 'SP-18-Round Hole', code: 'HMR040', weight: '8.17 kg' },
                  { name: 'SP-20-Round Hole', code: 'HMR041', weight: '9.08 kg' },
                  { name: 'DFS-1 Double Face Sledge', code: 'HMR013', weight: '0.45 kg' },
                  { name: 'DFS-1.5 Double Face Sledge', code: 'HMR012', weight: '0.68 kg' },
                  { name: 'DFS-2 Double Face Sledge', code: 'HMR011', weight: '0.91 kg' },
                  { name: 'DFS-2.5 Double Face Sledge', code: 'HMR010', weight: '1.13 kg' },
                  { name: 'DFS-3 Double Face Sledge', code: 'HMR009', weight: '1.36 kg' },
                  { name: 'DFS-4 Double Face Sledge', code: 'HMR008', weight: '1.81 kg' },
                  { name: 'DFS-5 Double Face Sledge', code: 'HMR007', weight: '2.27 kg' },
                  { name: 'DFS-6 Double Face Sledge', code: 'HMR006', weight: '2.72 kg' },
                  { name: 'DFS-8 Double Face Sledge', code: 'HMR005', weight: '3.63 kg' },
                  { name: 'DFS-10 Double Face Sledge', code: 'HMR004', weight: '4.54 kg' },
                  { name: 'DFS-12 Double Face Sledge', code: 'HMR003', weight: '5.44 kg' },
                  { name: 'DFS-14 Double Face Sledge', code: 'HMR002', weight: '6.35 kg' },
                  { name: 'DFS-16 Double Face Sledge', code: 'HMR001', weight: '7.26 kg' },
                  { name: 'DFS-18 Double Face Sledge', code: 'HMR020', weight: '8.17 kg' },
                  { name: 'DFS-20 Double Face Sledge', code: 'HMR021', weight: '9.08 kg' },
                  { name: 'AXE', code: 'AXE001', weight: '0.9 kg' },
                  { name: 'AXE', code: 'AXE003', weight: '1.4 kg' },
                  { name: 'AXE', code: 'AXE006', weight: '0.5 kg' }
                ]
              },
              {
                category: 'Pick Axes',
                icon: Hammer,
                description: 'Heavy-duty pick axes for excavation, mining, and construction work',
                products: [
                  { name: '8DP Pick Axe', code: 'PKX006', weight: '1.4 kg' },
                  { name: '10DP Pick Axe', code: 'PKX008', weight: '1.8 kg' },
                  { name: '11DP Pick Axe', code: 'PKX001', weight: '2.2 kg' },
                  { name: '12DP Pick Axe', code: 'PKX002', weight: '2.5 kg' },
                  { name: '14DP Pick Axe', code: 'PKX004', weight: '3.0 kg' },
                  { name: 'Pick Axe - 9CP', code: 'PKX018', weight: '1.6 kg' },
                  { name: 'Pick Axe - 10CP', code: 'PKX003', weight: '1.8 kg' },
                  { name: 'Pick Axe - 11CP', code: 'PKX005', weight: '2.2 kg' },
                  { name: 'Pick Axe - 12CP', code: 'PKX007', weight: '2.5 kg' },
                  { name: 'Pick Axe - 14CP', code: 'PKX009', weight: '3.0 kg' },
                  { name: 'Pick Axe - 14CP SUPER', code: 'PKX0016', weight: '3.2 kg' },
                  { name: 'Pick Axe - 16CP', code: 'PKX0013', weight: '4.0 kg' },
                  { name: 'Pick Mattock - 4Lbs', code: 'PKX022', weight: '1.80 kg' },
                  { name: 'Pickaxe PVC Handle 30.5"', code: 'PKX015', weight: '0.79 kg' },
                  { name: 'Steel Pickaxe Handle (35")', code: 'PKX019', weight: '1.0 kg' }
                ]
              },
              {
                category: 'Engineering Files',
                icon: FileText,
                description: 'Precision engineering files for metalworking and finishing applications',
                products: [
                  { name: 'Heavy Taper 150mm', code: 'FIL012', weight: '6 inch Triangle' },
                  { name: 'Heavy Taper 200mm', code: 'FIL013', weight: '8 inch Triangle' },
                  { name: 'Pit Saw 110mm', code: 'FIL054', weight: '4-1/2 inch Half Round' },
                  { name: 'Feather Edge 125mm', code: 'FIL055', weight: '5 inch Rhombus' },
                  { name: 'Feather Edge 150mm', code: 'FIL056', weight: '6 inch Rhombus' },
                  { name: 'Files With Handle 100mm', code: 'FIL058', weight: '4 inch Slim Taper' },
                  { name: 'Flat Rough 300mm', code: 'FIL065', weight: 'Rectangle 13-14 Cut' },
                  { name: 'Flat Bastard 150mm', code: 'FIL018', weight: '6 inch Flat Bastard' },
                  { name: 'Flat Bastard 250mm', code: 'FIL021', weight: '8 inch Flat Smooth' },
                  { name: 'Half Round Bastard 150mm', code: 'FIL026', weight: '6 inch Half Round' },
                  { name: 'Half Round Bastard 250mm', code: 'FIL031', weight: '10 inch Half Round' },
                  { name: 'Half Round Bastard 300mm', code: 'FIL032', weight: '12 inch Rectangle' },
                  { name: 'Half Round Bastard 350mm', code: 'FIL033', weight: '12 inch Half Round' },
                  { name: 'Round Bastard 150mm', code: 'FIL034', weight: '6 inch Round' },
                  { name: 'Round Bastard 250mm', code: 'FIL038', weight: '10 inch Round' },
                  { name: 'Round Bastard 300mm', code: 'FIL059', weight: '12 inch Round' },
                  { name: 'Round Bastard 350mm', code: 'FIL060', weight: '14 inch Round' },
                  { name: 'Square Bastard 150mm', code: 'FIL061', weight: '6 inch Square' },
                  { name: 'Square Bastard 250mm', code: 'FIL044', weight: '10 inch Square' },
                  { name: 'Square Bastard 300mm', code: 'FIL045', weight: '12 inch Square' },
                  { name: 'Flat 2nd Cut 250mm', code: 'FIL062', weight: '10 inch Rectangle' }
                ]
              },
              {
                category: 'Garden Tools',
                icon: Flower2,
                description: 'Professional garden and horticulture tools for landscaping and cultivation',
                products: [
                  { name: 'Khurpi 1" PVC Handle', code: 'GTS0014', weight: '0.5 kg' },
                  { name: 'Khurpi 2" PVC Handle', code: 'GTS0015', weight: '0.5 kg' },
                  { name: 'Khurpi 3" PVC Handle', code: 'GTS0016', weight: '0.5 kg' },
                  { name: 'Khurpi 5" Wooden Handle', code: 'GTS0017', weight: '0.5 kg' },
                  { name: 'Fork Powrah FP-1.0', code: 'GTS061', weight: '1.0 kg' },
                  { name: 'Lopper', code: 'GTS100', weight: '1.5 kg' },
                  { name: 'Hoe Trowel 12" Handle', code: 'GTS101', weight: '0.61 kg' },
                  { name: 'Hoe Fork 12" Handle', code: 'GTS102', weight: '0.58 kg' },
                  { name: 'Pruning Secateur', code: 'GTS002', weight: '0.35 kg' },
                  { name: 'Roll Secateur', code: 'GTS003', weight: '0.37 kg' },
                  { name: 'Hedge Shear', code: 'GTS007', weight: '1.28 kg' },
                  { name: 'Garden Rake 12 Teeth', code: 'GTS009', weight: '1.5 kg' },
                  { name: 'Bill Hook', code: 'GTS0010', weight: '0.7 kg' },
                  { name: 'Cane Chopper 13.5 inch', code: 'GTS0011', weight: '0.6 kg' },
                  { name: 'Small Cane Chopper 10 inch', code: 'GTS0108', weight: '0.6 kg' },
                  { name: 'Bonsai Kit', code: 'GTS104', weight: '0.22 kg' },
                  { name: 'Digging Trowel', code: 'GTS075', weight: '0.2 kg' },
                  { name: 'Hedge Shear 10" Plastic Handle', code: 'GTS071', weight: '0.85 kg' },
                  { name: 'Hand Cultivator', code: 'GTS077', weight: '0.18 kg' },
                  { name: 'Garden Tools 4 Pcs Set', code: 'GTS092', weight: '1.1 kg' },
                  { name: 'Digging Transplanter', code: 'GTS074', weight: '0.225 kg' },
                  { name: 'Weeding Fork', code: 'GTS076', weight: '0.2 kg' }
                ]
              },
              {
                category: 'Spanners & Wrenches',
                icon: Settings,
                description: 'Professional-grade spanners and wrenches for mechanical and construction work',
                products: [
                  { name: 'D.O.E Spanner 6x7', code: 'SPD001', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 8x9', code: 'SPD002', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 10x11', code: 'SPD003', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 12x13', code: 'SPD004', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 14x15', code: 'SPD005', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 16x17', code: 'SPD006', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 18x19', code: 'SPD007', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 20x22', code: 'SPD008', weight: '50 pcs' },
                  { name: 'D.O.E Spanner 21x23', code: 'SPD009', weight: '25 pcs' },
                  { name: 'D.O.E Spanner 24x27', code: 'SPD010', weight: '25 pcs' },
                  { name: 'D.O.E Spanner 30x32', code: 'SPD012', weight: '10 pcs' },
                  { name: 'D.O.E Spanner Set of 8', code: 'SPD013', weight: '10 sets' },
                  { name: 'D.O.E Spanner Set of 12', code: 'SPD014', weight: '5 sets' },
                  { name: 'Combination Spanner 6', code: 'SPC001', weight: '50 pcs' },
                  { name: 'Combination Spanner 8', code: 'SPC002', weight: '50 pcs' },
                  { name: 'Combination Spanner 10', code: 'SPC003', weight: '50 pcs' },
                  { name: 'Combination Spanner 12', code: 'SPC004', weight: '50 pcs' },
                  { name: 'Combination Spanner 14', code: 'SPC005', weight: '50 pcs' },
                  { name: 'Combination Spanner 16', code: 'SPC006', weight: '25 pcs' },
                  { name: 'Combination Spanner 18', code: 'SPC007', weight: '25 pcs' },
                  { name: 'Combination Spanner 20', code: 'SPC008', weight: '25 pcs' },
                  { name: 'Combination Spanner 22', code: 'SPC009', weight: '20 pcs' },
                  { name: 'Combination Spanner 24', code: 'SPC010', weight: '15 pcs' },
                  { name: 'Combination Spanner 30', code: 'SPC012', weight: '10 pcs' },
                  { name: 'Combination Spanner Set of 8', code: 'SPC013', weight: '5 sets' },
                  { name: 'Combination Spanner Set of 12', code: 'SPC014', weight: '1 set' },
                  { name: 'Ring Spanner 6x7', code: 'SPR001', weight: '50 pcs' },
                  { name: 'Ring Spanner 8x9', code: 'SPR002', weight: '50 pcs' },
                  { name: 'Ring Spanner 10x11', code: 'SPR003', weight: '50 pcs' },
                  { name: 'Ring Spanner 12x13', code: 'SPR004', weight: '50 pcs' },
                  { name: 'Ring Spanner 14x15', code: 'SPR005', weight: '50 pcs' },
                  { name: 'Ring Spanner 16x17', code: 'SPR006', weight: '25 pcs' },
                  { name: 'Ring Spanner 18x19', code: 'SPR007', weight: '25 pcs' },
                  { name: 'Ring Spanner 20x22', code: 'SPR008', weight: '15 pcs' },
                  { name: 'Ring Spanner 24x27', code: 'SPR010', weight: '10 pcs' },
                  { name: 'Ring Spanner 30x32', code: 'SPR012', weight: '10 pcs' },
                  { name: 'Ring Spanner Set of 8', code: 'SPR013', weight: '5 sets' },
                  { name: 'Ring Spanner Set of 12', code: 'SPR014', weight: '2 sets' },
                  { name: 'Stillson Pipe Wrench 8"', code: 'WRS001', weight: '10 pcs' },
                  { name: 'Stillson Pipe Wrench 10"', code: 'WRS002', weight: '6 pcs' },
                  { name: 'Stillson Pipe Wrench 12"', code: 'WRS003', weight: '6 pcs' },
                  { name: 'Stillson Pipe Wrench 14"', code: 'WRS004', weight: '6 pcs' },
                  { name: 'Stillson Pipe Wrench 18"', code: 'WRS005', weight: '5 pcs' },
                  { name: 'Stillson Pipe Wrench 24"', code: 'WRS006', weight: '1 pc' },
                  { name: 'Adjustable Wrench 8"', code: 'WRA001', weight: '6 pcs' },
                  { name: 'Adjustable Wrench 10"', code: 'WRA002', weight: '6 pcs' },
                  { name: 'Adjustable Wrench 12"', code: 'WRA003', weight: '6 pcs' },
                  { name: 'Adjustable Wrench C.P 8"', code: 'WRC001', weight: '6 pcs' },
                  { name: 'Adjustable Wrench C.P 10"', code: 'WRC002', weight: '6 pcs' },
                  { name: 'Adjustable Wrench C.P 12"', code: 'WRC003', weight: '6 pcs' },
                  { name: 'Adjustable Wrench C.P 15"', code: 'WRC004', weight: '4 pcs' },
                  { name: 'Adjustable Wrench C.P 18"', code: 'WRC005', weight: '2 pcs' },
                  { name: 'Adjustable Wrench C.P 24"', code: 'WRC006', weight: '2 pcs' },
                  { name: 'T-Socket Spanner 7mm', code: 'TSP007', weight: '60 pcs' },
                  { name: 'T-Socket Spanner 8mm', code: 'TSP008', weight: '60 pcs' },
                  { name: 'T-Socket Spanner 9mm', code: 'TSP009', weight: '60 pcs' },
                  { name: 'T-Socket Spanner 10mm', code: 'TSP010', weight: '60 pcs' },
                  { name: 'T-Socket Spanner 11mm', code: 'TSP011', weight: '60 pcs' },
                  { name: 'T-Socket Spanner 12mm', code: 'TSP012', weight: '60 pcs' },
                  { name: 'T-Socket Spanner 13mm', code: 'TSP013', weight: '60 pcs' },
                  { name: 'T-Socket Spanner 14mm', code: 'TSP014', weight: '60 pcs' },
                  { name: 'Cross Wheel Steel Spanner 14x14mm', code: 'SPA006', weight: '1 pc' },
                  { name: 'Cross Wheel Steel Spanner 14x16mm', code: 'SPA007', weight: '1 pc' },
                  { name: 'L-Socket Handle 8"', code: 'LSH008', weight: '60 pcs' },
                  { name: 'L-Socket Handle 10"', code: 'LSH010', weight: '60 pcs' },
                  { name: 'L-Socket Handle 12"', code: 'LSH012', weight: '48 pcs' },
                  { name: 'L-Socket Handle 18"', code: 'LSH018', weight: '24 pcs' },
                  { name: 'L-Spanner 16 Dia Rod 17', code: 'SPA010', weight: '6 pcs' },
                  { name: 'L-Spanner 16 Dia Rod 18', code: 'SPA011', weight: '6 pcs' },
                  { name: 'L-Spanner 16 Dia Rod 19', code: 'SPA012', weight: '6 pcs' },
                  { name: 'L-Spanner 16 Dia Rod 21', code: 'SPA013', weight: '6 pcs' },
                  { name: 'Wheel Spanner 24x27', code: 'SPA001', weight: '1 pc' },
                  { name: 'Wheel Spanner 27x30', code: 'SPA002', weight: '1 pc' },
                  { name: 'Wheel Spanner 30x32', code: 'SPA003', weight: '1 pc' },
                  { name: 'Wheel Spanner 32x33', code: 'SPA004', weight: '1 pc' },
                  { name: 'Wheel Spanner 27x27', code: 'SPA014', weight: '1 pc' },
                  { name: 'Wheel Spanner 30x30', code: 'SPA015', weight: '1 pc' },
                  { name: 'Wheel Spanner 32x32', code: 'SPA016', weight: '1 pc' },
                  { name: 'Wheel Spanner 33x33', code: 'SPA017', weight: '1 pc' },
                  { name: 'Heavy Duty Spanner 19', code: 'SPA018', weight: '6 pcs' },
                  { name: 'Heavy Duty Spanner 21', code: 'SPA019', weight: '6 pcs' },
                  { name: 'Matt Spanner DOE 6x7', code: 'SMD501', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 8x9', code: 'SMD502', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 10x11', code: 'SMD503', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 12x13', code: 'SMD504', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 14x15', code: 'SMD505', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 16x17', code: 'SMD506', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 18x19', code: 'SMD507', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 20x22', code: 'SMD508', weight: '50 pcs' },
                  { name: 'Matt Spanner DOE 21x23', code: 'SMD509', weight: '25 pcs' },
                  { name: 'Matt Spanner DOE 24x27', code: 'SMD510', weight: '25 pcs' },
                  { name: 'Matt Spanner DOE 30x32', code: 'SMD512', weight: '10 pcs' },
                  { name: 'Matt Spanner DOE Set of 8', code: 'SMD513', weight: '10 sets' },
                  { name: 'Matt Spanner DOE Set of 12', code: 'SMD514', weight: '5 sets' },
                  { name: 'Matt Spanner Ring 6x7', code: 'SMR501', weight: '50 pcs' },
                  { name: 'Matt Spanner Ring 8x9', code: 'SMR502', weight: '50 pcs' },
                  { name: 'Matt Spanner Ring 10x11', code: 'SMR503', weight: '50 pcs' },
                  { name: 'Matt Spanner Ring 12x13', code: 'SMR504', weight: '50 pcs' },
                  { name: 'Matt Spanner Ring 14x15', code: 'SMR505', weight: '50 pcs' },
                  { name: 'Matt Spanner Ring 16x17', code: 'SMR506', weight: '25 pcs' },
                  { name: 'Matt Spanner Ring 18x19', code: 'SMR507', weight: '25 pcs' },
                  { name: 'Matt Spanner Ring 20x22', code: 'SMR508', weight: '15 pcs' },
                  { name: 'Matt Spanner Ring 21x23', code: 'SMR509', weight: '10 pcs' },
                  { name: 'Matt Spanner Ring 24x27', code: 'SMR510', weight: '10 pcs' },
                  { name: 'Matt Spanner Ring 30x32', code: 'SMR512', weight: '10 pcs' },
                  { name: 'Matt Spanner Ring Set of 8', code: 'SMR513', weight: '5 sets' },
                  { name: 'Matt Spanner Ring Set of 12', code: 'SMR514', weight: '2 sets' }
                ]
              },
              {
                category: 'Screwdrivers & Electrical Tools',
                icon: Wrench,
                description: 'Professional screwdrivers and electrical tools for construction and maintenance',
                products: [
                  { name: 'Screw Driver Set of 8', code: 'SDK002', weight: '5 sets' },
                  { name: 'Screw Driver Set of 5 with Neon', code: 'SDK003', weight: '10 sets' },
                  { name: 'Screw Driver Two-In-One 6.0x150', code: 'SDT001', weight: '20 pcs' },
                  { name: 'Screw Driver Two-In-One 6.0x100', code: 'SDT002', weight: '20 pcs' },
                  { name: 'Screw Driver Two-In-One 6.0x250', code: 'SDT003', weight: '20 pcs' },
                  { name: 'Screw Driver Two-In-One 5.0x200', code: 'SDT004', weight: '10 pcs' },
                  { name: 'Screw Driver Two-In-One 8.0x200', code: 'SDT005', weight: '10 pcs' },
                  { name: 'Screw Driver Two-In-One 6x30', code: 'SDY001', weight: '10 pcs' },
                  { name: 'Screw Driver Two-In-One 6x50', code: 'SDY002', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip 2.5x50', code: 'SDF015', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 2.5x75', code: 'SDF016', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 2.5x100', code: 'SDF017', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 3.25x75', code: 'SDF018', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 4.5x75', code: 'SDF019', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 6x100', code: 'SDF020', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 6x150', code: 'SDF021', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 6x200', code: 'SDF022', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip 8x175', code: 'SDF023', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip 8x200', code: 'SDF024', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip 8x250', code: 'SDF025', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip 8x300', code: 'SDF026', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip 10x200', code: 'SDF027', weight: '6 pcs' },
                  { name: 'Screw Driver Flat Tip 10x250', code: 'SDF028', weight: '6 pcs' },
                  { name: 'Screw Driver Flat Tip 10x300', code: 'SDF029', weight: '6 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 6x200', code: 'SFS001', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 8x200', code: 'SFS002', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 8x250', code: 'SFS003', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 8x300', code: 'SFS004', weight: '10 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 10x200', code: 'SFS005', weight: '6 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 10x300', code: 'SFS006', weight: '6 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 8x250 Phillip', code: 'SFS007', weight: '10 pcs' },
                  { name: 'Screw Driver Neon Bulb Tester 125mm', code: 'SDN001', weight: '20 pcs' },
                  { name: 'Screw Driver Neon Bulb Tester 200mm', code: 'SDN002', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 3.25x150', code: 'SF1001', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 3.25x200', code: 'SF1002', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 4.5x100', code: 'SF1003', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 4.5x150', code: 'SF1004', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 5x100', code: 'SF1005', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 5x150', code: 'SF1006', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 5x200', code: 'SF1007', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 6x150', code: 'SF1008', weight: '20 pcs' },
                  { name: 'Screw Driver Flat Tip Striking 8x200', code: 'SF1009', weight: '10 pcs' },
                  { name: 'Screw Driver PHILLIPS 2.5x50', code: 'SDP011', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 3.0x60', code: 'SDP012', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 3.0x150', code: 'SDP013', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 4.5x100', code: 'SDP014', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 5.0x200', code: 'SDP015', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 5.0x250', code: 'SDP016', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 6.0x150', code: 'SDP017', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 6.0x200', code: 'SDP018', weight: '20 pcs' },
                  { name: 'Screw Driver PHILLIPS 8.0x200', code: 'SDP019', weight: '10 pcs' },
                  { name: 'Screw Driver PHILLIPS 8.0x250', code: 'SDP020', weight: '10 pcs' },
                  { name: 'Wire Stripper 5" Insulated', code: 'PWS005', weight: '10 pcs' },
                  { name: 'T Handle Allen Key Set', code: 'TAK001', weight: 'Set of 9' },
                  { name: 'Allen Key Set', code: 'AAK001', weight: 'Set of 9' },
                  { name: 'Tin Cutter 10" With Spring', code: 'TCS010', weight: '4 pcs' },
                  { name: 'Tin Cutter 12" With Spring', code: 'TCS012', weight: '4 pcs' }
                ]
              },
              {
                category: 'Pliers & Specialized Tools',
                icon: Grip,
                description: 'Professional pliers and specialized tools for electrical and mechanical work',
                products: [
                  { name: 'Tower Pincer 9"', code: 'PLP001', weight: '6 pcs' },
                  { name: 'Tower Pincer 10"', code: 'PLP002', weight: '6 pcs' },
                  { name: 'Tower Pincer 12"', code: 'PLP003', weight: '6 pcs' },
                  { name: 'Tower Pincer 14"', code: 'PLP004', weight: '6 pcs' },
                  { name: 'Fencing Plier 10.5"', code: 'PLF001', weight: '6 pcs' },
                  { name: 'Circlip Plier 7" External Straight', code: 'PLC011', weight: '6 pcs' },
                  { name: 'Circlip Plier 7" External Bent', code: 'PLC012', weight: '6 pcs' },
                  { name: 'Circlip Plier 7" Internal Straight', code: 'PLC013', weight: '6 pcs' },
                  { name: 'Circlip Plier 7" Internal Bent', code: 'PLC014', weight: '6 pcs' },
                  { name: 'Water Pump Plier 7"', code: 'PLW001', weight: '6 pcs' },
                  { name: 'Water Pump Plier 10"', code: 'PLW002', weight: '6 pcs' },
                  { name: 'Water Pump Plier 12"', code: 'PLW003', weight: '6 pcs' },
                  { name: 'Water Pump Plier 16"', code: 'PLW004', weight: '5 pcs' },
                  { name: 'Long Nose Plier 6"', code: 'PLN001', weight: '6 pcs' },
                  { name: 'Long Nose Plier 8"', code: 'PLN002', weight: '6 pcs' },
                  { name: 'Combination Plier 6"', code: 'PLC001', weight: '6 pcs' },
                  { name: 'Combination Plier 7"', code: 'PLC002', weight: '6 pcs' },
                  { name: 'Combination Plier 8" PVC', code: 'PLC003', weight: '6 pcs' },
                  { name: 'Combination Plier 8" TPR', code: 'PLC004', weight: '6 pcs' },
                  { name: 'Combination Plier 8" ACETATE', code: 'PLC005', weight: '6 pcs' },
                  { name: 'Combination Plier 7" OFFSET', code: 'PLC006', weight: '6 pcs' },
                  { name: 'Bent Nose Plier 6"', code: 'PLN003', weight: '6 pcs' },
                  { name: 'Bent Nose Plier 8"', code: 'PLN004', weight: '6 pcs' },
                  { name: 'MIG Welding Plier 8"/200mm', code: 'PWS008', weight: '40 pcs' },
                  { name: 'Lock Grip Pliers 10"', code: 'LGP001', weight: '6 pcs' }
                ]
              },
              {
                category: 'Professional Hammers',
                icon: Hammer,
                description: 'Professional-grade hammers for construction and industrial applications',
                products: [
                  { name: 'Ball Point Hammer 200gms', code: 'HMC001', weight: '6 pcs' },
                  { name: 'Ball Point Hammer 300gms', code: 'HMC002', weight: '6 pcs' },
                  { name: 'Ball Point Hammer 500gms', code: 'HMC003', weight: '4 pcs' },
                  { name: 'Ball Point Hammer 800gms', code: 'HMC004', weight: '2 pcs' },
                  { name: 'Claw Hammer 350gms', code: 'HMC005', weight: '4 pcs' },
                  { name: 'Claw Hammer 450gms', code: 'HMC006', weight: '4 pcs' },
                  { name: 'Cross Pein Hammer 200gms', code: 'HMC007', weight: '4 pcs' },
                  { name: 'Cross Pein Hammer 300gms', code: 'HMC008', weight: '4 pcs' },
                  { name: 'Cross Pein Hammer 500gms', code: 'HMC009', weight: '4 pcs' }
                ]
              },
              {
                category: 'Socket Sets & Accessories',
                icon: Settings,
                description: 'Professional socket sets and accessories for mechanical and automotive work',
                products: [
                  { name: 'Socket Set 24', code: 'SCS001', weight: '1 set' },
                  { name: 'Socket Set 1/4" SD 46 Pcs', code: 'SCS002', weight: '1 set' },
                  { name: 'Socket 8mm', code: 'SCH008', weight: '10 pcs' },
                  { name: 'Socket 9mm', code: 'SCH009', weight: '10 pcs' },
                  { name: 'Socket 10mm', code: 'SCH010', weight: '10 pcs' },
                  { name: 'Socket 11mm', code: 'SCH011', weight: '10 pcs' },
                  { name: 'Socket 12mm', code: 'SCH012', weight: '10 pcs' },
                  { name: 'Socket 13mm', code: 'SCH013', weight: '10 pcs' },
                  { name: 'Socket 14mm', code: 'SCH014', weight: '10 pcs' },
                  { name: 'Socket 15mm', code: 'SCH015', weight: '10 pcs' },
                  { name: 'Socket 16mm', code: 'SCH016', weight: '10 pcs' },
                  { name: 'Socket 17mm', code: 'SCH017', weight: '10 pcs' },
                  { name: 'Socket 18mm', code: 'SCH018', weight: '10 pcs' },
                  { name: 'Socket 19mm', code: 'SCH019', weight: '10 pcs' },
                  { name: 'Socket 20mm', code: 'SCH020', weight: '10 pcs' },
                  { name: 'Socket 21mm', code: 'SCH021', weight: '10 pcs' },
                  { name: 'Socket 22mm', code: 'SCH022', weight: '10 pcs' },
                  { name: 'Socket 23mm', code: 'SCH023', weight: '10 pcs' },
                  { name: 'Socket 24mm', code: 'SCH024', weight: '10 pcs' },
                  { name: 'Socket 25mm', code: 'SCH025', weight: '10 pcs' },
                  { name: 'Socket 26mm', code: 'SCH026', weight: '10 pcs' },
                  { name: 'Socket 27mm', code: 'SCH027', weight: '5 pcs' },
                  { name: 'Socket 28mm', code: 'SCH028', weight: '5 pcs' },
                  { name: 'Socket 29mm', code: 'SCH029', weight: '5 pcs' },
                  { name: 'Socket 30mm', code: 'SCH030', weight: '5 pcs' },
                  { name: 'Socket 32mm', code: 'SCH032', weight: '5 pcs' },
                  { name: 'Extension Bar 125mm', code: 'SCE002', weight: '5 pcs' },
                  { name: 'Extension Bar 250mm', code: 'SCE003', weight: '5 pcs' },
                  { name: 'Spark Plug Socket 21mm', code: 'SCP021', weight: '10 pcs' },
                  { name: 'Ratchet Handle 1/2" Dr 72T', code: 'SHR001', weight: '5 pcs' },
                  { name: 'Sliding T Bar 250mm', code: 'SHT001', weight: '5 pcs' },
                  { name: 'Universal Joint 75mm', code: 'SUJ001', weight: '10 pcs' }
                ]
              },
              {
                category: 'Grease Guns & Buckets',
                icon: Droplets,
                description: 'Professional grease guns and buckets for lubrication and maintenance',
                products: [
                  { name: 'Grease Gun 500gms Lever Rigid Extension', code: 'GGN004', weight: '1 pc' },
                  { name: 'Grease Gun 500gms Lever Flexible Extension', code: 'GGN005', weight: '1 pc' },
                  { name: 'Grease Gun 500gms Lever Rigid + Flexible', code: 'GGN006', weight: '1 pc' },
                  { name: 'Grease Gun Duel Piston 500cc Rigid', code: 'GGN016', weight: '1 pc' },
                  { name: 'Grease Gun Duel Piston 650cc Rigid', code: 'GGN017', weight: '1 pc' },
                  { name: 'Grease Bucket 3kg without wheel', code: 'GGN019', weight: '1 pc' },
                  { name: 'Grease Bucket 6kg without wheel', code: 'GGN010', weight: '1 pc' },
                  { name: 'Grease Bucket 10kg without wheel', code: 'GGN011', weight: '1 pc' },
                  { name: 'Grease Bucket 6kg with wheel', code: 'GGN012', weight: '1 pc' },
                  { name: 'Grease Bucket 10kg with wheel', code: 'GGN013', weight: '1 pc' }
                ]
              },
              {
                category: 'Dry Wall Screws',
                icon: Hammer,
                description: 'Professional dry wall screws for construction and interior work',
                products: [
                  { name: 'DWS 6x13 (17 TPI)', code: 'ADW613', weight: '1000 pcs/box' },
                  { name: 'DWS 6x16 (17 TPI)', code: 'ADW616', weight: '1000 pcs/box' },
                  { name: 'DWS 6x19 (17 TPI)', code: 'ADW619', weight: '1000 pcs/box' },
                  { name: 'DWS 6x25 (17 TPI)', code: 'ADW625', weight: '1000 pcs/box' },
                  { name: 'DWS 6x32 (17 TPI)', code: 'ADW632', weight: '1000 pcs/box' },
                  { name: 'DWS 6x38 (17 TPI)', code: 'ADW638', weight: '1000 pcs/box' },
                  { name: 'DWS 6x45 (17 TPI)', code: 'ADW645', weight: '1000 pcs/box' },
                  { name: 'DWS 6x50 (17 TPI)', code: 'ADW650', weight: '500 pcs/box' },
                  { name: 'DWS 6x60 (17 TPI)', code: 'ADW660', weight: '500 pcs/box' },
                  { name: 'DWS 6x75 (17 TPI)', code: 'ADW675', weight: '250 pcs/box' }
                ]
              },
              {
                category: 'Carpentry Nails',
                icon: Hammer,
                description: 'Professional carpentry nails for construction and woodworking applications',
                products: [
                  { name: 'TATA-AG-NAIL-BOX-4030-2KG', code: 'TN0306', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0406-2KG', code: 'TN0406', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0506-2KG', code: 'TN0506', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0606-2KG', code: 'TN0606', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-1508-2KG', code: 'TN1508', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0208-2KG', code: 'TN0208', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-2508-2KG', code: 'TN2508', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0308-2KG', code: 'TN0308', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0408-2KG', code: 'TN0408', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-1509-2KG', code: 'TN1509', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0209-2KG', code: 'TN0209', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-2509-2KG', code: 'TN2509', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0309-2KG', code: 'TN0309', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-1510-2KG', code: 'TN1510', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0210-2KG', code: 'TN0210', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-2510-2KG', code: 'TN2510', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0310-2KG', code: 'TN0310', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-1511-2KG', code: 'TN1511', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0211-2KG', code: 'TN0211', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-2511-2KG', code: 'TN2511', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0311-2KG', code: 'TN0311', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-1512-2KG', code: 'TN1512', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0212-2KG', code: 'TN0212', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-2512-2KG', code: 'TN2512', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-BOX-0312-2KG', code: 'TN0312', weight: '12 boxes' },
                  { name: 'TATA-AG-NAIL-0113-2KG (Finer Size)', code: 'TN0113', weight: '20 boxes' },
                  { name: 'TATA-AG-NAIL-1513-2KG (Finer Size)', code: 'TN1513', weight: '20 boxes' },
                  { name: 'TATA-AG-NAIL-1713-2KG (Finer Size)', code: 'TN1713', weight: '20 boxes' },
                  { name: 'TATA-AG-NAIL-0114-2KG (Finer Size)', code: 'TN0114', weight: '20 boxes' },
                  { name: 'TATA-AG-NAIL-1514-2KG (Finer Size)', code: 'TN1514', weight: '20 boxes' },
                  { name: 'TATA-AG-NAIL-0214-2KG (Finer Size)', code: 'TN0214', weight: '20 boxes' },
                  { name: 'TATA-AG-NAIL-2514-2KG (Finer Size)', code: 'TN2514', weight: '20 boxes' },
                  { name: 'TATA-AG-NAIL-0314-2KG (Finer Size)', code: 'TN0314', weight: '20 boxes' }
                ]
              },
              {
                category: 'Concrete Nails',
                icon: HardHat,
                description: 'Heavy-duty concrete nails for construction and masonry work',
                products: [
                  { name: 'AGRICO-CON-NAIL-3.5X1"(25mm)', code: 'CNB103', weight: '20 pcs' },
                  { name: 'AGRICO-CON-NAIL-4.0X1.5"(38mm)', code: 'CNB154', weight: '20 pcs' },
                  { name: 'AGRICO-CON-NAIL-4.25X2"(50mm)', code: 'CNB204', weight: '20 pcs' },
                  { name: 'AGRICO-CON-NAIL-4.25X2.5"(63mm)', code: 'CNB254', weight: '20 pcs' },
                  { name: 'AGRICO-CON-NAIL-5X3.0"(75mm)', code: 'CNB305', weight: '20 pcs' }
                ]
              },
              {
                category: 'Welding Electrodes - Mild Steel',
                icon: Zap,
                description: 'High-quality mild steel welding electrodes for various welding applications',
                products: [
                  { name: 'Tata NS E6013 2.50X350mm', code: 'MNS001', weight: '100 pcs' },
                  { name: 'Tata NS E6013 2.90X350mm', code: 'MNS002', weight: '90 pcs' },
                  { name: 'Tata NS E6013 2.90X450mm', code: 'MNS003', weight: '90 pcs' },
                  { name: 'Tata NS E6013 3.75X450mm', code: 'MNS004', weight: '60 pcs' },
                  { name: 'TATA NS-E6013 2.70X350MM', code: 'MNS005', weight: '90 pcs' },
                  { name: 'TATA NS-E6013 2.70X450mm', code: 'MNS006', weight: '90 pcs' },
                  { name: 'TATA NS-E6013 2.90X350mm', code: 'MNS007', weight: '90 pcs' },
                  { name: 'TATA NS-E6013 3.75X450mm', code: 'MNS008', weight: '60 pcs' },
                  { name: 'TATA NS-E6013 2.50X350mm', code: 'MNS009', weight: '100 pcs' },
                  { name: 'TATA NS-E6013 2.90X450mm', code: 'MNS010', weight: '90 pcs' },
                  { name: 'Tata E6013 2.50X350mm (ISI)', code: 'MSE011', weight: '125 pcs' },
                  { name: 'Tata E6013 3.15X350mm (ISI)', code: 'MSE012', weight: '90 pcs' },
                  { name: 'Tata E6013 3.15X450mm (ISI)', code: 'MSE014', weight: '90 pcs' },
                  { name: 'Tata E6013 4.00X450mm (ISI)', code: 'MSE015', weight: '60 pcs' },
                  { name: 'Tata E6013 5.00X450mm (ISI)', code: 'MSE016', weight: '40 pcs' },
                  { name: 'Tata-E6013NP 3.20X350mm', code: 'MSE013', weight: '155 pcs' },
                  { name: 'Tata-E6013NP 2.50X350mm', code: 'MSE027', weight: '265 pcs' },
                  { name: 'Tata-E6013NP 4.00X450mm', code: 'MSE028', weight: '85 pcs' },
                  { name: 'Tata E6013 2.50X350mm', code: 'MSE017', weight: '125 pcs' },
                  { name: 'Tata E6013 3.15X350mm', code: 'MSE018', weight: '90 pcs' },
                  { name: 'Tata E6013 3.15X450mm', code: 'MSE019', weight: '90 pcs' },
                  { name: 'Tata E6013 4.00X450mm', code: 'MSE020', weight: '60 pcs' },
                  { name: 'Tata E6013 5.00X450mm', code: 'MSE021', weight: '40 pcs' },
                  { name: 'Tata-E6013JK 3.15X350mm', code: 'MSE022', weight: '85 pcs' },
                  { name: 'Tata E6013JK 4.00X450mm', code: 'MSE026', weight: '55 pcs' },
                  { name: 'Tata E6013 Bluebond 2.50X350mm', code: 'MSE023', weight: '100 pcs' },
                  { name: 'Tata E6013 Bluebond 3.15X450mm', code: 'MSE024', weight: '90 pcs' },
                  { name: 'Tata E6013 Bluebond 4.00X450mm', code: 'MSE025', weight: '60 pcs' },
                  { name: 'TATA-E6013 JK 3.15X350', code: 'MSE029', weight: '85 pcs' },
                  { name: 'TATA-E6013 JK 4.00X450', code: 'MSE030', weight: '55 pcs' }
                ]
              },
              {
                category: 'Welding Electrodes - Low Hydrogen',
                icon: Zap,
                description: 'High-quality low hydrogen welding electrodes for critical welding applications',
                products: [
                  { name: 'Tata E7018 2.50X350mm', code: 'LHE001', weight: '168 pcs' },
                  { name: 'Tata E7018 3.15X450mm', code: 'LHE002', weight: '115 pcs' },
                  { name: 'Tata E7018 4.00X450mm', code: 'LHE003', weight: '75 pcs' },
                  { name: 'Tata E7018 5.00X450mm', code: 'LHE004', weight: '50 pcs' }
                ]
              },
              {
                category: 'Welding Electrodes - Stainless Steel',
                icon: Zap,
                description: 'Professional stainless steel welding electrodes for corrosion-resistant applications',
                products: [
                  { name: 'Tata SS308L 2.50X350mm', code: 'SSE001', weight: '84 pcs' },
                  { name: 'Tata SS308L 3.15X450mm', code: 'SSE002', weight: '56 pcs' },
                  { name: 'Tata SS308L 4.00X350mm', code: 'SSE003', weight: '38 pcs' }
                ]
              },
              {
                category: 'Self Drilling Screws',
                icon: Wrench,
                description: 'Professional self-drilling screws for construction and roofing applications',
                products: [
                  { name: 'SDS-SC-10-16X19mm', code: 'DSS001', weight: '700 pcs' },
                  { name: 'SDS-SC-12-14X25mm', code: 'DSS002', weight: '500 pcs' },
                  { name: 'SDS-SC-12-14X35mm', code: 'DSS003', weight: '500 pcs' },
                  { name: 'SDS-SC-12-14X45mm', code: 'DSS004', weight: '400 pcs' },
                  { name: 'SDS-SC-12-14X55mm', code: 'DSS005', weight: '250 pcs' },
                  { name: 'SDS-SC-12-14X65mm', code: 'DSS006', weight: '200 pcs' },
                  { name: 'SDS-SC-DT-12-14X45mm (Double Thread)', code: 'DSDT04', weight: '400 pcs' },
                  { name: 'SDS-SC-DT-12-14X55mm (Double Thread)', code: 'DSDT05', weight: '250 pcs' },
                  { name: 'SDS-SC-DT-12-14X65mm (Double Thread)', code: 'DSDT06', weight: '200 pcs' },
                  { name: 'SDS-SC-10-16X19MM-PT', code: 'DSST01', weight: '1 pc' },
                  { name: 'SDS-SC-10-16X19MM-W14', code: 'DSSW01', weight: '400 pcs' }
                ]
              },
              {
                category: 'Abrasive Wheels - Cutting',
                icon: Scissors,
                description: 'Professional cutting wheels for metalworking and construction applications',
                products: [
                  { name: 'Cutting Wheel 4" x 1mm', code: 'ACW401', weight: '0.03 kg/pc' },
                  { name: 'Cutting Wheel 5" x 1.2mm', code: 'ACW501', weight: '0.03 kg/pc' },
                  { name: 'Cutting Wheel 7" x 3mm', code: 'ACW703', weight: '0.19 kg/pc' },
                  { name: 'Cutting Wheel 14" x 3mm', code: 'ACW143', weight: '0.63 kg/pc' }
                ]
              },
              {
                category: 'Abrasive Wheels - Grinding',
                icon: Settings,
                description: 'Professional grinding wheels for metal finishing and surface preparation',
                products: [
                  { name: 'Grinding Wheel 4" x 4mm', code: 'AGW404', weight: '0.09 kg/pc' },
                  { name: 'Grinding Wheel 4" x 6mm', code: 'AGW406', weight: '0.11 kg/pc' },
                  { name: 'Grinding Wheel 5" x 6mm', code: 'AGW506', weight: '0.18 kg/pc' },
                  { name: 'Grinding Wheel 7" x 6.5mm', code: 'AGW707', weight: '0.39 kg/pc' },
                  { name: 'Grinding Wheel 9"', code: 'AGW907', weight: '1 pc' }
                ]
              },
              {
                category: 'Flap Discs - Grinding & Polishing',
                icon: Settings,
                description: 'Professional flap discs for surface finishing and polishing applications',
                products: [
                  { name: 'Flap Disc 100MM Grits-36', code: 'AFD436', weight: '10 pcs' },
                  { name: 'Flap Disc 100MM Grits-60', code: 'AFD460', weight: '10 pcs' },
                  { name: 'Flap Disc 100MM Grits-80', code: 'AFD480', weight: '10 pcs' },
                  { name: 'Flap Disc 100MM Grits-120', code: 'AFD412', weight: '10 pcs' }
                ]
              },
              {
                category: 'Diamond Saw Blades',
                icon: Scissors,
                description: 'Professional diamond saw blades for cutting hard materials and masonry',
                products: [
                  { name: 'Diamond Saw Blade 4" SEG', code: 'DBS400', weight: '10 pcs' },
                  { name: 'Diamond Saw Blade 4" CON RIM', code: 'DSC400', weight: '10 pcs' },
                  { name: 'Diamond Saw Blade 4" Turbo', code: 'DST400', weight: '10 pcs' },
                  { name: 'Diamond Saw Blade 5" SEG', code: 'DBS500', weight: '10 pcs' },
                  { name: 'Diamond Saw Blade 5" CON RIM', code: 'DSC500', weight: '10 pcs' }
                ]
              },
              {
                category: 'TCT Blades - Wood Ply Cut',
                icon: Scissors,
                description: 'Professional TCT blades for wood and plywood cutting applications',
                products: [
                  { name: 'TCT Blade 4" 30 Teeth', code: 'TCT430', weight: '10 pcs' },
                  { name: 'TCT Blade 4" 40 Teeth', code: 'TCT440', weight: '10 pcs' },
                  { name: 'TCT Blade 5" 30 Teeth', code: 'TCT530', weight: '10 pcs' },
                  { name: 'TCT Blade 5" 40 Teeth', code: 'TCT540', weight: '10 pcs' }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-100 hover:border-secondary-200 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Category Title */}
                    <h3 className="text-xl font-bold text-accent-800 mb-4 group-hover:text-secondary-700 transition-colors duration-300">
                      {category.category}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-accent-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {category.description}
                    </p>
                    
                    {/* Product Count Badge */}
                    <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 rounded-full px-3 py-1 mb-4 text-xs font-medium">
                      <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></div>
                      <span>{category.products.length} Products</span>
                    </div>
                    
                    {/* Action Button */}
                    <button 
                      onClick={() => openModal(category)}
                      className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>Explore Products</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-secondary-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-secondary-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-full"></div>
                <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-white rounded-full"></div>
                <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <Award size={20} />
                    <span className="text-sm font-medium">Why Choose Our Products?</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Premium Quality Standards
                  </h3>
                  <p className="text-xl text-secondary-100 max-w-2xl mx-auto">
                    Every product is manufactured to the highest standards with advanced processes and quality control.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Beaker size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Advanced Manufacturing</h4>
                    <p className="text-secondary-100 text-sm">BF-BOF-LF-CC process for superior quality</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Settings size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Precision Engineering</h4>
                    <p className="text-secondary-100 text-sm">Maximum efficiency and durability</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-secondary-100 text-sm">Weight tolerance always on positive side</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Wrench size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Optimized Design</h4>
                    <p className="text-secondary-100 text-sm">Blade profile for maximum material shifting</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Long-lasting Finish</h4>
                    <p className="text-secondary-100 text-sm">Superior painted surface for extended life</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Tata Standards</h4>
                    <p className="text-secondary-100 text-sm">Trusted brand quality and reliability</p>
                  </div>
                </div>
              </div>
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
      <section id="contact-section" className="section-padding bg-accent-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-accent-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-accent-700 leading-relaxed">
                  Ready to improve your agricultural productivity? Contact us for expert advice and product information.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sprout size={20} className="text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-800 mb-1">Phone</h4>
                    <p className="text-accent-600">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-800 mb-1">Email</h4>
                    <p className="text-accent-600">info@ahamadagencies.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-accent-800 mb-6">Request Information</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select Product Category</option>
                    <option value="hand-tools">Tata Steel Agrico Hand Tools</option>
                    <option value="consumables">Agricultural Consumables</option>
                    <option value="shovels">Shovels</option>
                    <option value="sickles">Sickles</option>
                    <option value="crowbars">Crowbars & Tools</option>
                    <option value="hammers">Hammers & Axes</option>
                    <option value="pick-axes">Pick Axes</option>
                    <option value="engineering-files">Engineering Files</option>
                    <option value="garden-tools">Garden Tools</option>
                    <option value="spanners-wrenches">Spanners & Wrenches</option>
                    <option value="screwdrivers">Screwdrivers & Electrical Tools</option>
                    <option value="pliers">Pliers & Specialized Tools</option>
                    <option value="professional-hammers">Professional Hammers</option>
                    <option value="socket-sets">Socket Sets & Accessories</option>
                    <option value="grease-guns">Grease Guns & Buckets</option>
                    <option value="drywall-screws">Dry Wall Screws</option>
                    <option value="carpentry-nails">Carpentry Nails</option>
                    <option value="concrete-nails">Concrete Nails</option>
                    <option value="welding-electrodes-mild">Welding Electrodes - Mild Steel</option>
                    <option value="welding-electrodes-hydrogen">Welding Electrodes - Low Hydrogen</option>
                    <option value="welding-electrodes-stainless">Welding Electrodes - Stainless Steel</option>
                    <option value="self-drilling-screws">Self Drilling Screws</option>
                    <option value="abrasive-cutting">Abrasive Wheels - Cutting</option>
                    <option value="abrasive-grinding">Abrasive Wheels - Grinding</option>
                    <option value="flap-discs">Flap Discs - Grinding & Polishing</option>
                    <option value="diamond-saw-blades">Diamond Saw Blades</option>
                    <option value="tct-blades">TCT Blades - Wood Ply Cut</option>
                    <option value="seeds">Tata Agrigo Seeds</option>
                    <option value="fertilizers">Tata Agrigo Fertilizers</option>
                    <option value="crop-protection">Crop Protection</option>
                    <option value="equipment">Agricultural Equipment</option>
                    <option value="all">All Products</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your farming needs and crop types"
                    rows={4}
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  Request Information
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-accent-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                  <selectedCategory.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-accent-800">{selectedCategory.category}</h2>
                  <p className="text-accent-600">{selectedCategory.description}</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-accent-100 hover:bg-accent-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-accent-600" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedCategory.products.map((product, index) => (
                  <div key={index} className="bg-accent-50 rounded-lg p-4 border border-accent-200">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-accent-800 text-sm">{product.name}</h3>
                      <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full">
                        {product.weight}
                      </span>
                    </div>
                    <p className="text-xs text-accent-600 font-mono">{product.code}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t border-accent-200 bg-accent-50">
              <div className="flex justify-between items-center">
                <p className="text-accent-600">
                  Total Products: <span className="font-semibold text-accent-800">{selectedCategory.products.length}</span>
                </p>
                <button 
                  onClick={closeModal}
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
