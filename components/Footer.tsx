import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-accent-800 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ahamad Groups</h3>
              <p className="text-accent-300 leading-relaxed">
                Leading the way in construction and agricultural solutions with trusted Tata products.
              </p>
            </div>

            {/* Companies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Companies</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/ahamad-co" className="text-accent-300 hover:text-white transition-colors">
                    Ahamad & Co
                  </Link>
                </li>
                <li>
                  <Link href="/ahamed-agencies" className="text-accent-300 hover:text-white transition-colors">
                    AHAMED Agencies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-accent-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#companies" className="text-accent-300 hover:text-white transition-colors">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-accent-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-accent-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-700 py-6">
          <div className="text-center text-accent-300">
            <p>&copy; 2024 Ahamad & Co Groups. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
