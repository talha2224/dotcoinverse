import React from "react"
import Navbar from "../../../components/LandingPage/Navbar";
import ProjectHero from '../../../components/LandingPage/ProjectHero'
import ProjectDetails from '../../../components/LandingPage/ProjectDetails'
import Footer from '../../../components/LandingPage/Footer'

const Page = () => {
    return (
        <div>
            <Navbar />
            <ProjectHero />
            <ProjectDetails />
            <Footer />
        </div>
    )
}

export default Page