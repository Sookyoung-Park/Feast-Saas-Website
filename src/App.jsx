import Header from "./sections/header"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import JoinUs from "./sections/JoinUs"
import Testimonials from './sections/Testimonials'
import MessageForm from "./sections/MessageForm"
import Footer from "./sections/Footer"


const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero/>
      <Features />
      <JoinUs/>
      <Testimonials /> 
      <MessageForm/>
      <Footer />
    </main>
  )
}

export default App