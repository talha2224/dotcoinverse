import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/hamburger.svg'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const router = useNavigate()
    const [openMenu, setopenMenu] = useState(false)

    return (
        <div className={`font-roboto relative w-screen bg-[#15141A] pl-10 pr-10 pt-5 pb-5 flex justify-between items-center  z-50`}>

            {/* LEFT LOGO AND NAV WHITE DECORATOR  */}
            <div>
                {/* LOGO  */}
                <Link to={"/"} className='cursor-pointer'>
                    <div className='flex gap-x-4 items-center'>
                        <img src={Logo} alt='logo' className='w-[4rem]' />
                        <h1 className={`text-white font-medium tracking-wider`}>Dotcoinverse</h1>
                    </div>
                </Link>
            </div>

            {/* RIGHT LINKS AND BUTTONS  */}
            <div className='md:flex items-center gap-x-4 hidden'>

                {/* NAVLINKS  */}
                <div className='flex gap-x-4'>
                    <Link to={"/"}>
                        <p className='text-[#FFFFFF4F] hover:text-white text-sm  cursor-pointer transition-all ease-in'>Home</p>
                    </Link>
                    <a href={"/#about"}>
                        <p className='text-[#FFFFFF4F] hover:text-white text-sm cursor-pointer transition-all ease-in'>About</p>
                    </a>
                    <a href={"/#buy"}>
                        <p className='text-[#FFFFFF4F] hover:text-white text-sm  cursor-pointer transition-all ease-in'>Buy</p>
                    </a>
                    <a href={"/#roadmap"}>
                        <p className='text-[#FFFFFF4F] hover:text-white text-sm cursor-pointer transition-all ease-in'>Roadmap</p>
                    </a>
                    <a href={"/#contact"}>
                        <p className='text-[#FFFFFF4F] hover:text-white text-sm cursor-pointer transition-all ease-in'>Contact</p>
                    </a>
                </div>

                {/* LINE  */}
                <div className='w-[2px] h-[2rem] bg-[#FFFFFF4F]'></div>

                {/* BUTTON  */}
                <div>
                    <button onClick={() => router("/account/login")} className='h-[2.3rem] w-[9rem] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] text-white text-sm font-bold tracking-wider rounded-[20px] outline-none border-none'>Let’s Start 👋</button>
                </div>


            </div>

            {/* HAMBURGER RESPONSIVE MENU  */}
            <div className='block md:hidden z-50'>
                <img onClick={() => setopenMenu(!openMenu)} src={Hamburger} alt='Hamburger' className='text-lg text-white cursor-pointer' />
                {
                    openMenu && (
                        <div className=' absolute top-[4rem] z-50 right-2 bg-slate-900 text-[#91949a] p-3 w-[10rem] rounded-md '>
                            <Link to={"/"}>
                                <p className='text-[#FFFFFF4F] hover:text-white text-sm  cursor-pointer transition-all ease-in'>Home</p>
                            </Link>
                            <a href="/#about">
                                <p className='text-[#FFFFFF4F] hover:text-white text-sm cursor-pointer transition-all ease-in'>About</p>
                            </a>
                            <a href="/#buy">
                                <p className='text-[#FFFFFF4F] hover:text-white text-sm  cursor-pointer transition-all ease-in'>Buy</p>
                            </a>
                            <a href="/#roadmap">
                                <p className='text-[#FFFFFF4F] hover:text-white text-sm cursor-pointer transition-all ease-in'>Roadmap</p>
                            </a>
                            <a href="/#contact">
                                <p className='text-[#FFFFFF4F] hover:text-white text-sm cursor-pointer transition-all ease-in'>Contact</p>
                            </a>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Navbar
