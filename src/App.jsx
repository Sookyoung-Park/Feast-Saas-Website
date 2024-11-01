import Header from "./sections/header"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import JoinUs from "./sections/JoinUs"
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Download from "./sections/Download"
import Footer from "./sections/Footer"


const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero/>
      <Features />
      <JoinUs/>
      <Faq />
      <Testimonials /> 
      <Download />
      <Footer />
    </main>
  )
}

export default App