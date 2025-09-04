'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold transition-colors duration-500 ${
            isScrolled 
              ? `${logoColor} ${hoverColor}` 
              : 'text-white hover:text-white/80'
          }`}>
            {companyLogo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium transition-colors duration-500 relative group ${
              isScrolled 
                ? 'text-accent-700 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-primary-600' : 'bg-white'
              }`}></span>
            </Link>
            <Link href="/#companies" className={`font-medium transition-colors duration-500 relative group ${
              isScrolled 
                ? 'text-accent-700 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              Companies
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-primary-600' : 'bg-white'
              }`}></span>
            </Link>
            <Link href="/#about" className={`font-medium transition-colors duration-500 relative group ${
              isScrolled 
                ? 'text-accent-700 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-primary-600' : 'bg-white'
              }`}></span>
            </Link>
            <Link href="/#contact" className={`font-medium transition-colors duration-500 relative group ${
              isScrolled 
                ? 'text-accent-700 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              Contact
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-primary-600' : 'bg-white'
              }`}></span>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden border-t shadow-lg transition-all duration-500 ${
            isScrolled 
              ? 'bg-white border-accent-200' 
              : 'bg-white/95 backdrop-blur-sm border-white/20'
          }`}>
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-accent-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/#companies" 
                className="block text-accent-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Companies
              </Link>
              <Link 
                href="/#about" 
                className="block text-accent-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#contact" 
                className="block text-accent-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
