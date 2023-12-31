import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Card = ({ setshowLeftSideBar, showLeftSideBar,remainingCredit,totalDeposit,totalWithdraw,level,table }) => { 


    return (
        <div className='font-roboto w-[100%] h-[100%] flex flex-col p-5 overflow-y-auto'>

            <div className='flex justify-between items-center'>

                {/* TITLE  */}
                <div>
                    <h1 className='text-xl tracking-[1.2px]'>Total Earning</h1>
                </div>

                {/* RESPONSIVE HAMBURGER AND ADD BUTTON  */}
                <div className='flex items-center gap-x-2'>
                    <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
                        <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
                    </div>
                </div>
            </div>

            <div className='w-[100%] h-[4rem] rounded-md pl-5 pr-5 flex items-center mt-5 bg-[#f7b774] shadow-shadow1'>
                <p className='text-lg font-cursive'>Your Level Score: {level}</p>
            </div>

            {/* MAIN CARDS  */}

            <div className='flex mt-10 items-center gap-x-10 overflow-x-auto '>

                <div className='min-w-[20rem] w-[20rem] h-[7rem] bg-[#83c1ff] rounded-md shadow-shadow1'>
                    <p className='pt-5 pl-5 text-start text-lg font-cursive'>Total Deposit</p>
                    <p className='pl-5 mt-2'>$ {totalDeposit}</p>
                </div>

                <div className='min-w-[20rem] w-[20rem] h-[7rem] bg-[#e0aeff] rounded-md shadow-shadow1'>
                    <p className='pt-5 pl-5 text-start text-lg font-cursive'>Total Withdraw</p>
                    <p className='pl-5 mt-2'>$ {totalWithdraw}</p>
                </div>

                <div className='min-w-[20rem] w-[20rem] h-[7rem] bg-[#ffcfba] rounded-md shadow-shadow1'>
                    <p className='pt-5 pl-5 text-start text-lg font-cursive'>Remaning Amount</p>
                    <p className='pl-5 mt-2'>$ {remainingCredit}</p>
                </div>

            </div>

           {/* TRANSACTION TABLE  */}
            <div>
                {table}
            </div>


        </div>


    )
}

export default Card
