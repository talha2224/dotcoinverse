import React from 'react'
import HeroImage from "../../assets/team.png"

const TeamHero = () => {
  return (

    <div data-aos='fade-left' className={`font-roboto relative pl-10 pr-10 pt-5 pb-5 mt-10 flex gap-x-[2rem] justify-center flex-col md:flex-row md:justify-between`}>

      <div className='p-5 md:mb-0 mb-[1rem]'>
        <h1 className={`font-cursive text-4xl sm:text-6xl text-white font-bold tracking-wider`}>Team &</h1>
        <div className='w-fit text-black text-4xl sm:text-6xl mt-3 font-bold tracking-wider'>
          <h1 className={`font-cursive bg-gradient-to-tr from-[#ec1183] to-[#7e257f] text-transparent bg-clip-text`}>Associates</h1>
        </div>
        <p className='mt-4 text-[#FFFFFF4F] text-lg font-bold w-[100%] md:w-[70%] tracking-widest'>An exceptional set of dedicated team members and world-class associates to help achieve our vision.</p>
      </div>

      <div className='md:block flex justify-center items-center'>
        <img src={HeroImage} alt='hero image' className='w-[10rem] h-[15rem] lg:w-[15rem] lg:h-[25rem]' />
      </div>

    </div>

  )
}

export default TeamHero
