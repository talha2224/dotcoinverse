import React from 'react'
import Logo from '../../assets/logo.svg'
import Face from '../../assets/face.png'

const TeamDetails = () => {
    return (
        <div className={`font-roboto relative pl-10 pr-10 pt-5 pb-5 mt-10`}>

            {/* TEAM HEADING AND OVERVIEW  */}
            <div data-aos='fade-right'>
                <div className='flex gap-x-5 items-center'>
                    <img src={Logo} alt='logo' />
                    <h1 className='text-xl text-white font-bold tracking-wider'>Our Team</h1>
                </div>

                <div className='mt-5'>
                    <p className='text-white text-lg tracking-wider font-bold leading-8'>We at Innovation Factory have cultivated a dedicated and skilled team with a passion for blockchain technology. Our team aims to build the most revolutionary technology for everyday users. We value dedication in the workplace and are proud to say that we have one of the most dedicated teams in the industry.Innovation Factory is led by its founder, Mr. Omer Khan (OK), co-founder H.H. Sheikh Marwan Bin Mohammad Bin Rashid Al Maktoum, and partner Mr. Sameel Chaudhry. Together, this group of world-class businessmen forms a strong foundation for one of the crypto industry's most thriving teams.</p>
                </div>
            </div>

            {/* TEAM MEMBERS  */}

            <div data-aos='zoom-in' className='flex gap-x-5 justify-center items-center mt-[3rem] flex-wrap'>

                <div className='pl-3 pr-3 pb-3 mb-5  bg-[#2120269E] rounded-md'>
                    <div className='flex justify-center items-center'>
                        <img src={Face} alt='face' className='w-[13rem] h-[13rem]' />
                    </div>
                    <h1 className='text-lg font-semibold tracking-wider mt-3 mb-3 text-white text-center'>Wole Michoel</h1>
                    <div className='text-center text-black text-lg mt-3 font-extrabold tracking-wider'>
                        <h1 className={`font-cursive bg-gradient-to-tr from-[#ec1183] to-[#7e257f] text-transparent bg-clip-text`}>Chief Technical Officer</h1>
                    </div>
                </div>

                <div className='pl-3 pr-3 pb-3 mb-5  bg-[#2120269E] rounded-md'>
                    <div className='flex justify-center items-center'>
                        <img src={Face} alt='face' className='w-[13rem] h-[13rem]' />
                    </div>
                    <h1 className='text-lg font-semibold tracking-wider mt-3 mb-3 text-white text-center'>Wole Michoel</h1>
                    <div className='text-center text-black text-lg mt-3 font-extrabold tracking-wider'>
                        <h1 className={`font-cursive bg-gradient-to-tr from-[#ec1183] to-[#7e257f] text-transparent bg-clip-text`}>Chief Technical Officer</h1>
                    </div>
                </div>

                <div className='pl-3 pr-3 pb-3 mb-5  bg-[#2120269E] rounded-md'>
                    <div className='flex justify-center items-center'>
                        <img src={Face} alt='face' className='w-[13rem] h-[13rem]' />
                    </div>
                    <h1 className='text-lg font-semibold tracking-wider mt-3 mb-3 text-white text-center'>Wole Michoel</h1>
                    <div className='text-center text-black text-lg mt-3 font-extrabold tracking-wider'>
                        <h1 className={`font-cursive bg-gradient-to-tr from-[#ec1183] to-[#7e257f] text-transparent bg-clip-text`}>Chief Technical Officer</h1>
                    </div>
                </div>

                <div className='pl-3 pr-3 pb-3 mb-5  bg-[#2120269E] rounded-md'>
                    <div className='flex justify-center items-center'>
                        <img src={Face} alt='face' className='w-[13rem] h-[13rem]' />
                    </div>
                    <h1 className='text-lg font-semibold tracking-wider mt-3 mb-3 text-white text-center'>Wole Michoel</h1>
                    <div className='text-center text-black text-lg mt-3 font-extrabold tracking-wider'>
                        <h1 className={`font-cursive  bg-gradient-to-tr from-[#ec1183] to-[#7e257f] text-transparent bg-clip-text`}>Chief Technical Officer</h1>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default TeamDetails
