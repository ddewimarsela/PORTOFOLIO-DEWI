import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Organizations from './components/Organizations'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#202020] font-sans antialiased selection:bg-[#FF8438]/20 selection:text-[#FF8438]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Organizations />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
