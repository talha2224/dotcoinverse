import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import CoinImage from '../../../assets/coin.png'


const About = ({ showLeftSideBar, setshowLeftSideBar }) => {
    return (
        <div className={` font-roboto w-[100%] h-[100%] p-5 overflow-y-auto `}>

            <div className='flex justify-between items-center'>

                {/* TITLE  */}
                <div>
                    <h1 className={`font-cursive text-4xl font-medium`}>About Us</h1>
                </div>

                {/* RESPONSIVE HAMBURGER  */}
                <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
                    <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
                </div>
            </div>

            {/* MAIN ABOUT US SECTION  */}

            <div className='flex justify-between items-center flex-col lg:flex-row mt-[4rem]'>

                <div className='flex-2 lg:mb-0 mb-4'>
                    <h1 className='mb-2 text-4xl font-bold'>Dot Coinverse: The next</h1>
                    <h1 className='mb-2 text-4xl font-bold'>big Web3 digital</h1>
                    <h1 className='mb-2 text-4xl font-bold'>currency</h1>
                    <p className='mt-2 text-sm text-gray-500 lg:w-[80%] w-[100%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic at, quis beatae quo asperiores dignissimos. Magnam illo voluptas eius placeat necessitatibus. Maxime amet perferendis eligendi excepturi, doloremque voluptatum laboriosam modi nesciunt cumque vero corporis, quas aut minima a consequuntur nemo voluptas culpa ullam id repellat, vitae unde doloribus! Eum minima eveniet inventore saepe doloribus unde, numquam odit consequuntur reprehenderit sit, cumque quas laboriosam vero recusandae facilis sunt ex dignissimos, sapiente totam accusamus architecto aperiam necessitatibus quis impedit. Maiores sed quis fugiat quae aperiam! Animi sint repellendus repellat fugiat, expedita quaerat in nulla temporibus quae autem perspiciatis neque placeat, cum magni?</p>
                </div>
                
                <div className='flex-1'>
                    <img src={CoinImage} alt='Coin' className='w-[25rem] h-[15rem] min-w-[25rem] min-h-[15rem]'/>
                </div>

            </div>

        </div>
    )
}

export default About
