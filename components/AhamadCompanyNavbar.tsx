'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Building, Sprout, Phone, Hammer, Wrench, Zap, Settings, ChevronDown } from 'lucide-react';

export default function AhamadCompanyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProductsOpen) {
        const target = event.target as Element;
        if (!target.closest('.products-dropdown')) {
          setIsProductsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProductsOpen]);

  const isActive = (path: string) => pathname === path;

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Contact', href: '/ahamad-co#contact', icon: Phone },
    { name: 'AHAMED Agencies', href: '/ahamed-agencies', icon: Sprout },
  ];

  const products = [
    { name: 'TATA Shaktee', href: '/ahamad-co/tata-shaktee', icon: Building },
    { name: 'Durashine', href: '/ahamad-co/durashine', icon: Wrench },
    { name: 'TATA Kosh', href: '/ahamad-co/tata-kosh', icon: Hammer },
    { name: 'TATA Wama', href: '/ahamad-co/tata-wama', icon: Zap },
    { name: 'Palram Products', href: '/ahamad-co/palram-products', icon: Settings },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-blue-200' 
        : 'bg-white/95 backdrop-blur-sm border-b border-blue-100'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/ahamad-co" className="flex items-center">
            <div className="relative w-32 h-20">
              <Image
                src="/images/ahamad-company-logo-new.png"
                alt="Ahamad & Co"
                width={128}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-accent-600 hover:text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            
            {/* Products Dropdown */}
            <div className="relative products-dropdown">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-accent-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300"
              >
                <Building className="w-5 h-5" />
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-blue-200 py-2 z-50">
                  {products.map((product) => {
                    const Icon = product.icon;
                    return (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => setIsProductsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-accent-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{product.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-accent-600 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-blue-200">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-blue-100 text-blue-700 font-semibold'
                        : 'text-accent-600 hover:text-blue-800 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Products Section */}
              <div className="pt-4 border-t border-blue-200">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center space-x-3 px-4 py-3 w-full text-left text-accent-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
                >
                  <Building className="w-5 h-5" />
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Products Dropdown */}
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {products.map((product) => {
                      const Icon = product.icon;
                      return (
                        <Link
                          key={product.name}
                          href={product.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsProductsOpen(false);
                          }}
                          className="flex items-center space-x-3 px-4 py-2 text-accent-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{product.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
