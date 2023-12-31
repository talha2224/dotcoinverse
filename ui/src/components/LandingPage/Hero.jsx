import React from 'react'
import DogImage from '../../assets/herodog.png'
import HeroRectangle from '../../assets/heroreactangle.png'
import Slice1 from '../../assets/slice1.svg'
import Slice2 from '../../assets/slice2.svg'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (

    <div data-aos='fade-left' className={` font-roboto relative pl-10 pr-10 pt-5 pb-5 mt-10 flex gap-x-[2rem] items-center justify-between lg:flex-row flex-col`}>

      {/* HERO TEXT  */}

      <div>
        <h1 className={`font-cursive sm:text-4xl text-3xl text-white text-start leading-[2.5rem]`}>First wrapped and <br />  2.0 Swap + Launchpad</h1>
        <p className='text-sm text-[#919498] w-[100%] lg:w-[28rem] mt-4 mb-4 text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
        <div className='flex gap-x-4 items-center mt-3 lg:justify-start justify-center'>
          <Link to={"/team"}>
            <button style={{ border: "2px solid #ffff" }} className='w-[8rem] font-bold tracking-wider text-sm h-[2.3rem] rounded-[29px] hover:text-white hover:bg-transparent transition-all ease-in bg-white'>Team</button>
          </Link>
          <Link to={"/projects"}>
            <button className='w-[8rem] font-bold tracking-wider text-sm h-[2.3rem] rounded-[29px] bg-gradient-to-tr from-[#ec1183] to-[#7e257f] text-white'>Projects</button>
          </Link>
        </div>
      </div>

      {/* HERO IMAGE DOG  */}

      <div className='relative w-fit flex flex-1 justify-center items-start lg:mt-0 mt-[5rem] -z-50'>
        <div className='flex flex-1 justify-center items-center'>

          {/* HERO IMAGE DOG  */}
          <div>
            <img src={DogImage} alt='heroDog' className='h-[20rem] w-[20rem]' />
          </div>
          {/* SLICE 1 */}
          <div className='absolute top-[-2rem]'>
            <img src={Slice1} alt='hero-rectangle' className='h-[2rem] w-[2rem]' />
          </div>
          {/* SLICE 1 */}
          <div className='absolute bottom-[-4rem] right-0'>
            <img src={Slice2} alt='hero-rectangle' className='h-[4rem] w-[4rem]' />
          </div>
          {/* RECTANGLE BOX  */}
          <div className='absolute lg:block hidden top-16 right-[6.5rem]'>
            <img src={HeroRectangle} alt='hero-rectangle' className='h-[4rem] w-[16rem] z-50' />
          </div>
          {/* REACTANGLE TEXT  */}
          <div className='absolute lg:block hidden top-[4.2rem] right-[7.5rem]'>
            <p className='w-[14rem] text-sm text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Hero
