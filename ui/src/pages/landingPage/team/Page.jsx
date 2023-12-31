import React from "react"
import Navbar from "../../../components/LandingPage/Navbar";
import TeamHero from '../../../components/LandingPage/TeamHero'
import TeamDetails from '../../../components/LandingPage/TeamDetails'
import Footer from '../../../components/LandingPage/Footer'

const Page = () => {
    return (
        <div>
            <Navbar />
            <TeamHero />
            <TeamDetails />
            <Footer />
        </div>
    )
}

export default Page
