import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Impact from '@/components/Impact'
import Testimonials from '@/components/Testimonials'
import Evidence from '@/components/Evidence'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <Impact />
      <Testimonials />
      <Evidence />
      <Contact />
      <Footer />
    </main>
  )
} 