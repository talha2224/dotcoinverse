import React from 'react'
import FooterDog from '../../assets/footerDog.png'
import DotLine from '../../assets/dotline.svg'
import { FaFacebookF,FaInstagram,FaTwitter,FaDiscord,FaGithub} from "react-icons/fa6";

const Footer = () => {
  return (
    <div data-aos='zoom-in' id='contact' className={`font-roboto flex justify-center items-center pl-12 pr-12 mt-[9rem] md:mt-10 pb-10`}>

      <div className="relative rounded-md flex justify-between items-center flex-col md:flex-row gap-x-4 p-8 bg-gradient-to-r from-[#ffffff00] to-[#ffffff1f] filter backdrop-blur-8 w-[100%] lg:w-[80%] h-[10rem] md:h-[20rem]">

        <div className='flex-1 md:mb-0 mb-4 absolute md:static  top-[-6.5rem]'>
          <img src={FooterDog} alt='Footer-Dog' className='sm:w-[20rem] sm:h-[22rem] w-[17rem] h-[19rem]' />
        </div>

        {/* DOT DECORATOR LINE  */}

        <div className=' absolute top-2 right-[40%] -z-50'>
          <img src={DotLine} alt='dot-line' className='w-[20rem] h-[10rem]'/>
        </div>

        <div className='h-[16rem] flex-1 md:block flex justify-center items-center flex-col md:mt-0 mt-[16rem]'>

          <div className=''>
            <h1 className={`font-cursive text-4xl font-medium text-white`}>Contact Us</h1>
            <div className='w-[3.5rem] ml-[8.5rem] h-[4px] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] mt-2'></div>
          </div>

          <div className=' sm:w-[100%] w-[80vw]'>
            <p className='text-[#91949A] mt-3 w-[100%]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div className='flex gap-x-3 mt-4 pb-7'>
            <div className='w-[2rem] h-[2rem] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] rounded-full flex justify-center items-center'>
              <FaFacebookF className='text-[#ffff] text-lg cursor-pointer'/>
            </div>
            <div className='w-[2rem] h-[2rem] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] rounded-full flex justify-center items-center'>
              <FaInstagram className='text-[#ffff] text-lg cursor-pointer'/>
            </div>
            <div className='w-[2rem] h-[2rem] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] rounded-full flex justify-center items-center'>
              <FaTwitter className='text-[#ffff] text-lg cursor-pointer'/>
            </div>
            <div className='w-[2rem] h-[2rem] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] rounded-full flex justify-center items-center'>
              <FaGithub className='text-[#ffff] text-lg cursor-pointer'/>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer