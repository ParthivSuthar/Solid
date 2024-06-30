import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"


function App() {
 

  return (
    <>
      <Navbar/>
      <main className="max-w-7xl mx-auto">
        <HeroSection/>
        <Testimonials/>
        <Pricing/>
      </main>
    </>
  )
}

export default App
