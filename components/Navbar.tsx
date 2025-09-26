'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Building, Sprout, Home, Phone } from 'lucide-react'

interface NavbarProps {
  companyName?: string
  companyLogo?: string
  logoColor?: string
  hoverColor?: string
}

export default function Navbar({ 
  companyName = "Ahamad Groups", 
  companyLogo = "Ahamad Groups",
  logoColor = "text-accent-800",
  hoverColor = "hover:text-primary-600"
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent backdrop-blur-none shadow-none'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 transition-all duration-500 hover:scale-105">
            <div className={`w-24 h-24 rounded-xl p-3 transition-all duration-500 ${
              isScrolled 
                ? 'bg-white shadow-xl border-2 border-accent-200' 
                : 'bg-white/25 backdrop-blur-sm border-2 border-white/40'
            }`}>
              <Image
                src="/images/ahamad-groups-logo.png"
                alt="Ahamad Groups Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-3xl font-bold transition-colors duration-500 hidden sm:block ${
              isScrolled 
                ? `${logoColor} ${hoverColor}` 
                : 'text-white hover:text-white/80'
            }`}>
              {companyLogo}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className={`font-medium transition-colors duration-500 relative group px-4 py-2 rounded-lg ${
              isActive('/') 
                ? (isScrolled ? 'text-primary-600 bg-primary-50' : 'text-white bg-white/20')
                : (isScrolled 
                    ? 'text-accent-700 hover:text-primary-600 hover:bg-primary-50' 
                    : 'text-white hover:text-white/80 hover:bg-white/10')
            }`}>
              <div className="flex items-center space-x-2">
                <Home size={18} />
                <span>Home</span>
              </div>
              {isActive('/') && (
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full ${
                  isScrolled ? 'bg-primary-600' : 'bg-white'
                }`}></span>
              )}
            </Link>
            
            <Link href="/ahamad-co" className={`font-medium transition-colors duration-500 relative group px-4 py-2 rounded-lg ${
              isActive('/ahamad-co') 
                ? (isScrolled ? 'text-primary-600 bg-primary-50' : 'text-white bg-white/20')
                : (isScrolled 
                    ? 'text-accent-700 hover:text-primary-600 hover:bg-primary-50' 
                    : 'text-white hover:text-white/80 hover:bg-white/10')
            }`}>
              <div className="flex items-center space-x-2">
                <Building size={18} />
                <span>Ahamad & Co</span>
              </div>
              {isActive('/ahamad-co') && (
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full ${
                  isScrolled ? 'bg-primary-600' : 'bg-white'
                }`}></span>
              )}
            </Link>
            
            <Link href="/ahamad-agencies" className={`font-medium transition-colors duration-500 relative group px-4 py-2 rounded-lg ${
              isActive('/ahamad-agencies') 
                ? (isScrolled ? 'text-secondary-600 bg-secondary-50' : 'text-white bg-white/20')
                : (isScrolled 
                    ? 'text-accent-700 hover:text-secondary-600 hover:bg-secondary-50' 
                    : 'text-white hover:text-white/80 hover:bg-white/10')
            }`}>
              <div className="flex items-center space-x-2">
                <Sprout size={18} />
                <span>AHAMED Agencies</span>
              </div>
              {isActive('/ahamad-agencies') && (
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full ${
                  isScrolled ? 'bg-secondary-600' : 'bg-white'
                }`}></span>
              )}
            </Link>
            
            <Link href="/#contact" className={`font-medium transition-colors duration-500 relative group px-4 py-2 rounded-lg ${
              isScrolled 
                ? 'text-accent-700 hover:text-green-600 hover:bg-green-50' 
                : 'text-white hover:text-white/80 hover:bg-white/10'
            }`}>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>Contact</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${
              isScrolled 
                ? 'text-accent-700 hover:text-primary-600 hover:bg-accent-100' 
                : 'text-white hover:text-white/80 hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden border-t shadow-lg transition-all duration-500 ${
            isScrolled 
              ? 'bg-white border-accent-200' 
              : 'bg-white/95 backdrop-blur-sm border-white/20'
          }`}>
            <div className="px-4 py-6 space-y-2">
              <Link 
                href="/" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                    : 'text-accent-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
              
              <Link 
                href="/ahamad-co" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/ahamad-co') 
                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                    : 'text-accent-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Building size={20} />
                <div>
                  <div>Ahamad & Co</div>
                  <div className="text-xs text-accent-500">Construction Materials</div>
                </div>
              </Link>
              
              <Link 
                href="/ahamad-agencies" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/ahamad-agencies') 
                    ? 'text-secondary-600 bg-secondary-50 border-l-4 border-secondary-600' 
                    : 'text-accent-700 hover:text-secondary-600 hover:bg-secondary-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Sprout size={20} />
                <div>
                  <div>AHAMED Agencies</div>
                  <div className="text-xs text-accent-500">Agricultural Tools</div>
                </div>
              </Link>
              
              <Link 
                href="/#contact" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-accent-700 hover:text-green-600 hover:bg-green-50"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
