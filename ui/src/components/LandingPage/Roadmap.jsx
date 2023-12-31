import React from 'react'
import { MdArrowLeft, MdPlayArrow } from "react-icons/md";


const Roadmap = () => {

    return (

        <div data-aos='fade-right' id='roadmap' className={`font-roboto pl-12 pr-12 mt-12 pb-10`}>

            {/* Roadmap Now TEXT  */}
            <div className=''>
                <h1 className={`font-cursive text-4xl font-medium text-white`}>Roadmap</h1>
                <div className='w-[4rem] ml-[5.8rem] h-[4px] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] mt-2'></div>
            </div>

            <div className='flex sm:justify-center items-center mt-10'>

                <div className='relative w-[3px] rounded-md h-[51rem] sm:h-[33rem] bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>

                    {/* SINGLE CARD RIGHT 1  */}
                    <div className='absolute top-[1rem] right-[-0.47rem]'>

                        <div className='w-[1rem] h-[1rem] rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f] z-50'></div>

                        <div className='w-[17rem] absolute top-[0.5rem] h-[2px] -z-50 rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>
                            <MdPlayArrow className='text-[#ec1183] text-xl relative right-[-16rem] top-[-0.6rem]' />
                        </div>

                        <div className='absolute flex justify-center items-center p-3 top-[1.4rem] left-[1rem] w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md'>
                            <p className='text-sm text-[#91949A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
                        </div>
                    </div>

                    {/* SINGLE CARD LEFT 1  */}
                    <div className='absolute top-[7rem] right-[-0.47rem] sm:block hidden'>
                        {/* CIRCLE  */}
                        <div className='w-[1rem] h-[1rem] rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f] z-50'></div>
                        {/* ARROW  */}
                        <div className='w-[9rem] sm:min-w-[17rem] sm:w-[17rem] absolute top-[0.5rem] right-[0.5rem] h-[2px] -z-50 rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>
                            <MdArrowLeft className='text-[#ec1183] text-3xl relative left-[-1rem] top-[-0.9rem]  sm:right-[16.5rem]' />
                        </div>
                        {/* DESCRIPTION  */}
                        <div className='absolute flex justify-center items-center p-3 top-[1.4rem] right-[1rem] w-[9rem] sm:min-w-[17rem] sm:w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md'>
                            <p className='text-sm text-[#91949A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
                        </div>
                    </div>

                    {/* RESPONSIVE LEFT TO RIGHT  */}
                    <div className='absolute top-[14rem] right-[-0.47rem] block sm:hidden'>

                        <div className='w-[1rem] h-[1rem] rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f] z-50'></div>

                        <div className='w-[17rem] absolute top-[0.5rem] h-[2px] -z-50 rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>
                            <MdPlayArrow className='text-[#ec1183] text-xl relative right-[-16rem] top-[-0.6rem]' />
                        </div>

                        <div className='w-[17rem]  h-[9rem] bg-[#FFFFFF0D] rounded-md absolute flex justify-center items-center p-3 top-[1.4rem] left-[1rem]'>
                            <p className='text-sm text-[#91949A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
                        </div>
                    </div>

                    {/* SINGLE CARD RIGHT 2  */}

                    <div className='absolute top-[13rem] right-[-0.47rem] sm:block hidden'>
                        <div className='w-[1rem] h-[1rem] rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f] z-50'></div>
                        <div className='w-[9rem] sm:min-w-[17rem] sm:w-[17rem]  absolute top-[0.5rem] h-[2px] -z-50  bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>
                            <MdPlayArrow className='text-[#ec1183] text-xl relative left-[9rem] top-[-0.6rem]  sm:left-[16.5rem]' />
                        </div>
                        <div className='flex justify-center items-center p-3 absolute top-[1.4rem] left-[1rem] w-[9rem] sm:min-w-[17rem] sm:w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md'>
                            <p className='text-sm text-[#91949A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
                        </div>
                    </div>

                    <div className='absolute top-[27rem] right-[-0.47rem] block sm:hidden'>

                        <div className='w-[1rem] h-[1rem] rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f] z-50'></div>

                        <div className='w-[17rem] absolute top-[0.5rem] h-[2px] -z-50 rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>
                            <MdPlayArrow className='text-[#ec1183] text-xl relative right-[-16rem] top-[-0.6rem]' />
                        </div>

                        <div className='w-[17rem]  h-[9rem] bg-[#FFFFFF0D] rounded-md absolute flex justify-center items-center p-3 top-[1.4rem] left-[1rem]'>
                            <p className='text-sm text-[#91949A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
                        </div>
                    </div>



                    {/* SINGLE CARD LEFT 2  */}

                    <div className='absolute top-[21rem] right-[-0.47rem] sm:block hidden'>
                        {/* CIRCLE  */}
                        <div className='w-[1rem] h-[1rem] rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f] z-50'></div>
                        <div className='w-[9rem] sm:min-w-[17rem] sm:w-[17rem]  absolute top-[0.5rem] right-[0.5rem] h-[2px] -z-50 rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>
                            <MdArrowLeft className='text-[#ec1183] text-3xl relative left-[-1rem] top-[-0.9rem]  sm:right-[16.5rem]' />
                        </div>
                        <div className='flex justify-center p-3 items-center absolute top-[1.4rem] right-[1rem] w-[9rem] sm:min-w-[17rem] sm:w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md'>
                            <p className='text-sm text-[#91949A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
                        </div>
                    </div>

                    <div className='absolute top-[40rem] right-[-0.47rem] block sm:hidden'>

                        <div className='w-[1rem] h-[1rem] rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f] z-50'></div>

                        <div className='w-[17rem] absolute top-[0.5rem] h-[2px] -z-50 rounded-full bg-gradient-to-tl from-[#ec1183] to-[#7e257f]'>
                            <MdPlayArrow className='text-[#ec1183] text-xl relative right-[-16rem] top-[-0.6rem]' />
                        </div>

                        <div className='w-[17rem]  h-[9rem] bg-[#FFFFFF0D] rounded-md absolute flex justify-center items-center p-3 top-[1.4rem] left-[1rem]'>
                            <p className='text-sm text-[#91949A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default Roadmap
