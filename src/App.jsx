import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"


function App() {
 

  return (
    <>
      <Navbar/>
      <main className="max-w-7xl mx-auto">
        <HeroSection/>
        <Testimonials/>
      </main>
    </>
  )
}

export default App
