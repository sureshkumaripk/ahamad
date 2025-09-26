'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Building, Sprout, Phone, Wrench, Hammer, Zap, Settings, Flower2, Shield, ChevronDown } from 'lucide-react';

export default function AhamadAgenciesNavbar() {
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
    { name: 'Contact', href: '/ahamad-agencies#contact', icon: Phone },
    { name: 'Ahamad & Co', href: '/ahamad-co', icon: Building },
  ];

  const products = [
    { name: 'Agri & Construction', href: '/ahamad-agencies/agri-construction-tools', icon: Wrench },
    { name: 'DIY Tools', href: '/ahamad-agencies/diy-tools', icon: Hammer },
    { name: 'Filing Tools', href: '/ahamad-agencies/filing-tools', icon: Zap },
    { name: 'Garden Tools', href: '/ahamad-agencies/garden-tools', icon: Flower2 },
    { name: 'Industrial & Hardware', href: '/ahamad-agencies/industrial-hardware', icon: Settings },
    { name: 'Trade Hand Tools', href: '/ahamad-agencies/trade-hand-tools', icon: Shield },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-green-200' 
        : 'bg-white/95 backdrop-blur-sm border-b border-green-100'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/ahamad-agencies" className="flex items-center">
            <div className="relative w-40 h-24">
              <Image
                src="/images/ahamad-agencies-logo-new.png"
                alt="AHAMED Agencies"
                width={160}
                height={96}
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
                      ? 'bg-green-100 text-green-700 font-semibold'
                      : 'text-accent-600 hover:text-green-800 hover:bg-green-50'
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
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-accent-600 hover:text-green-800 hover:bg-green-50 transition-all duration-300"
              >
                <Sprout className="w-5 h-5" />
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-green-200 py-2 z-50">
                  {products.map((product) => {
                    const Icon = product.icon;
                    return (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => setIsProductsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-accent-600 hover:text-green-800 hover:bg-green-50 transition-all duration-300"
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
            className="lg:hidden p-2 rounded-lg text-accent-600 hover:text-green-800 hover:bg-green-50 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-green-200">
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
                        ? 'bg-green-100 text-green-700 font-semibold'
                        : 'text-accent-600 hover:text-green-800 hover:bg-green-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Products Section */}
              <div className="pt-4 border-t border-green-200">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center space-x-3 px-4 py-3 w-full text-left text-accent-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  <Sprout className="w-5 h-5" />
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
                          className="flex items-center space-x-3 px-4 py-2 text-accent-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all duration-300"
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
