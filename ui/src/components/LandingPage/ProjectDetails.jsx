import React from 'react'
import Logo from '../../assets/logo.svg'
import Projects from '../../assets/projects.png'
import { Link } from 'react-router-dom'


const ProjectDetails = () => {

    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div className={`font-roboto relative pl-10 pr-10 pt-5 pb-5 mt-10`}>

            {/* PROJECT HEADING AND OVERVIEW  */}
            <div data-aos='fade-right'>
                <div className='flex gap-x-5 items-center'>
                    <img src={Logo} alt='logo' />
                    <h1 className='text-xl text-white font-bold tracking-wider'>Our Projects</h1>
                </div>

                <div className='mt-5'>
                    <p className='text-white text-lg tracking-wider font-bold leading-8'>We at Innovation Factory have cultivated a dedicated and skilled team with a passion for blockchain technology. Our team aims to build the most revolutionary technology for everyday users. We value dedication in the workplace and are proud to say that we have one of the most dedicated teams in the industry.Innovation Factory is led by its founder, Mr. Omer Khan (OK), co-founder H.H. Sheikh Marwan Bin Mohammad Bin Rashid Al Maktoum, and partner Mr. Sameel Chaudhry. Together, this group of world-class businessmen forms a strong foundation for one of the crypto industry's most thriving teams.</p>
                </div>
            </div>

            {/* Projects  */}

            <div data-aos='zoom-in' className='flex gap-x-5 justify-center items-center mt-[3rem] flex-wrap'>
                {
                    arr?.map((item, index) => {
                        return (
                            <div key={item+index} className='p-5 mb-5 bg-[#2120269E] rounded-md w-[20rem]'>

                                <div className='flex justify-center items-center'>
                                    <img src={Projects} alt='face' className='h-[6rem]' />
                                </div>
                                <div className='text-center text-black text-xl mt-6 font-extrabold tracking-wider'>
                                    <h1 className={`font-cursive bg-gradient-to-tr from-[#ec1183] to-[#7e257f] text-transparent bg-clip-text`}>Virtual Meet</h1>
                                </div>
                                <div>
                                    <p className='mt-6 text-[#FFFFFF4F]'>Virtual Meet, powered by BFIC, is a video conference platform that has been designed to facilitate crypto investors and network marketers for conducting meetups.</p>
                                </div>

                                <Link to={"/projects"} className='mt-6 flex justify-center items-center'>
                                    <button style={{ border: "2px solid #ffff" }} className='w-[8rem] font-bold tracking-wider text-sm h-[2.3rem] rounded-[29px] hover:text-white hover:bg-transparent transition-all ease-in bg-white'>Explore</button>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default ProjectDetails
