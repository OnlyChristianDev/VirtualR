import React from 'react'
import Navbar from './Components/Navbar'
import HerSection from './Components/HerSection'
import FeatureSection from './Components/FeatureSection'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'
import Pricing from './Components/Pricing'
import Workflow from './Components/Workflow'

const App = () => {
  return (
    <div>
       <Navbar />
       <div className="max-w-7xl mx-auto pt-20 px-6">
       <HerSection />
       <FeatureSection />
       <Workflow />
       <Pricing/>
       <Testimonials />
       <Footer />
       </div>
    </div>
  )
}

export default App
