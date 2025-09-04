import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Companies from '@/components/Companies'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar 
        companyName="Ahamad Groups"
        companyLogo="Ahamad Groups"
        logoColor="text-accent-800"
        hoverColor="hover:text-primary-600"
      />
      <Hero />
      <Companies />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
