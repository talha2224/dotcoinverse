import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import Graph from '../../assets/graph.svg'
import Graph2 from '../../assets/graph2.svg'
import Bone from '../../assets/bone.svg'

const About = () => {
    return (

        <div data-aos='fade-right' id='about' className={`font-roboto  relative pl-10 pr-10 pt-5 pb-5 mt-10 flex gap-x-[4rem] items-center justify-between lg:flex-row flex-col`}>

            <div className='flex-1 lg:block mb-[2rem] relative'>
                <h1 className={`font-cursive text-4xl font-medium text-white`}>ABOUT US</h1>
                <p className='text-[#FFFFFF4F] leading-6 text-sm w-[100%] sm:w-[70%] mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                <img src={Bone} alt='Bone' className=' absolute top-0 right-0 sm:right-[40%] lg:right-0 w-[3rem] h-[3rem]'/>
            </div>

            <div className='flex-1 h-fit relative mb-10'>

                <div className='w-[20rem] h-[8rem] bg-[#2120269E] rounded-md shadow-cardShadow2 p-3 relative'>
                    <p className='text-[#505050] text-sm font-bold tracking-wider'>Status</p>
                    {/* TEXT AND ARROW ICON  */}
                    <div className='flex gap-x-3 items-center mt-3'>
                        <p className='text-white font-bold tracking-wider text-lg'>SHIB 37.729</p>
                        <FaLocationArrow className='text-white' />
                    </div>
                    {/* GRAPH ICON  */}
                    <div className=' absolute top-1 right-4'>
                        <img src={Graph} alt='Graph' className='h-[8rem] w-[8rem]' />
                    </div>
                </div>

                <div className='absolute bottom-[-3rem] left-[2rem] sm:left-[-6rem] w-[16rem] h-[5rem] bg-[#2120269E] rounded-md shadow-cardShadow2 p-3'>

                    {/* TEXT AND ARROW ICON  */}
                    <div className='flex gap-x-3 items-center mt-3 relative'>
                        <p className='text-white font-bold tracking-wider text-lg'>25 %</p>
                        <FaLocationArrow className='text-white' />
                        <div className='absolute left-5 w-[2rem] h-[2rem] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] rounded-full -z-50'></div>
                    </div>
                    {/* GRAPH LINE  CURVER */}
                    <div className=' absolute top-[-1rem] right-6'>
                        <img src={Graph2} alt='Graph' className='h-[7rem] w-[7rem]' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
