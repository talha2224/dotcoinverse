import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Support = ({ showLeftSideBar, setshowLeftSideBar }) => {
    
    return (

        <div className={`font-roboto w-[100%] h-[100%] p-5 overflow-y-auto `}>

            <div className='flex justify-between items-center'>

                {/* TITLE  */}
                <div>
                    <h1 className={`font-cursive text-4xl font-medium`}>Contact Us</h1>
                </div>

                {/* RESPONSIVE HAMBURGER  */}
                <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
                    <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
                </div>
            </div>

            {/* MAIN SECTION  */}

            <div className='mt-[4rem] flex justify-center items-center flex-col'>
                <input type="text" placeholder='Problem Title' className='w-[100%] h-[3rem] outline-none rounded-md bg-slate-100 pt-2 pl-4 pr-4 pb-2 mb-3'/>
                <input type="text" placeholder='Your Email' className='w-[100%] h-[3rem] outline-none rounded-md bg-slate-100 pt-2 pl-4 pr-4 pb-2 mb-3'/>
                <textarea placeholder='Enter Description'  className='w-[100%] h-[15rem] outline-none rounded-md bg-slate-100 pl-4 pt-4 pr-4 pb-4 resize-none mb-4'/>
                <div>
                    <button className='w-[9rem] h-[2.3rem] tracking-widest text-sm rounded-md border-none bg-[#181f3f] text-[#fff]'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Support
