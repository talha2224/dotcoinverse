import React from "react"
import Navbar from "../../../components/LandingPage/Navbar";
import Hero from '../../../components/LandingPage/Hero'
import About from '../../../components/LandingPage/About'
import Buy from '../../../components/LandingPage/Buy'
import Roadmap from '../../../components/LandingPage/Roadmap'
import Footer from '../../../components/LandingPage/Footer'

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Buy/>
      <Roadmap/>
      <Footer/>
    </div>
  )
}
