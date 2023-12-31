import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import PDFIMAGE from '../../../assets/resume.jpg'


const Coinverse = ({ showLeftSideBar, setshowLeftSideBar }) => {
    return (
        <div className={`font-roboto w-[100%] h-[100%] p-5 overflow-y-auto `}>

            <div className='flex justify-between items-center'>

                {/* TITLE  */}
                <div>
                    <h1 className={`font-cursive text-4xl font-medium`}>Coinverse Pdf</h1>
                </div>

                {/* RESPONSIVE HAMBURGER  */}
                <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
                    <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
                </div>
            </div>

            {/* MAIN ABOUT US SECTION  */}

            <div className='mt-[4rem] flex justify-center items-center'>
                <div className=' bg-slate-100 p-2 rounded-md'>
                    <img src={PDFIMAGE} className='w-[19rem] rounded-md' alt='Pdf '/>
                </div>
            </div>

        </div>
    )
}

export default Coinverse
