import axios from 'axios';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Table = ({ title, showLeftSideBar, setshowLeftSideBar, th, data }) => {

    // SEARCH CODE
    const [searchValue, setSearchValue] = useState("")
    // PAGINATION CODE 
    const [currentPage, setcurrentPage] = useState(1)
    const perPageRecord = 6
    const lastIndex = currentPage * perPageRecord;
    const firstIndex = lastIndex - perPageRecord;
    const records = data?.slice(firstIndex, lastIndex);
    const numberOfPage = Math.ceil(data?.length / perPageRecord);
    const number = Array.from({ length: numberOfPage }, (_, index) => index + 1);
    const previousPage = () => {
        if (currentPage !== 1) {
            setcurrentPage(currentPage - 1)
        }
        else {
            setcurrentPage(numberOfPage)
        }
    }
    const nextPage = () => {
        if (currentPage !== numberOfPage) {
            setcurrentPage(currentPage + 1)
        }
        else {
            setcurrentPage(1)
        }
    }
    const changePage = (n) => {
        setcurrentPage(n)
    }

    console.log(data)

    return (
        <div className={`font-roboto w-[100%] h-[100%] flex flex-col p-5 overflow-y-auto`}>

            <div className='flex justify-between items-center'>

                {/* TITLE  */}
                <div>
                    <h1 className='text-xl tracking-[1.2px]'>{title}</h1>
                </div>

                {/* RESPONSIVE HAMBURGER AND ADD BUTTON  */}
                <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
                    <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
                </div>
            </div>

            {/* SEARCH BAR  */}

            <div>
                <input onChange={(e) => setSearchValue(e.target.value)} style={{ border: "0.1px solid lightgray" }} type="text" placeholder='Search By Coin' className='w-[100%] placeholder:text-sm h-[2.5rem] rounded-md pl-4 pr-4 mt-3 outline-none ' />
            </div>


            {/* TABLE  */}
            <div className='w-full overflow-x-scroll md:overflow-x-auto bg-white mt-[2rem]'>
                {
                    data && data.length > 0 ?
                        <table className='w-full'>

                            <thead>
                                <tr className=''>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>Coin</th>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>Rank</th>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>Price</th>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>High</th>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>Low</th>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>Vol</th>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>24h Change</th>
                                    <th className={`pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>Market Cap</th>
                                </tr>
                            </thead>
                            

                            <tbody className='h-[3rem]'>
                                {
                                    records.filter((item)=>{
                                        return searchValue ? item.name.toLowerCase().includes(searchValue.toLowerCase()) :true
                                    })
                                    .map((item, index) => {
                                        return (
                                            <tr key={item.id} className='cursor-pointer'>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>
                                                    <img src={item?.image} alt="" className='w-[1.2rem] h-[1.2rem] inline mr-3'/>
                                                    <p className='inline'>{item?.name}</p>
                                                </td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.market_cap_rank}</td>

                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.current_price}</td>

                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>$ {item?.high_24h}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>$ {item?.low_24h}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.total_volume}</td>

                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>$ {item?.price_change_24h}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.market_cap}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>

                        : <h1 className='text-xl text-center font-cursive font-medium '>No Data Found</h1>

                }
            </div>

            {/* PAGINATION NUMBERS  */}
            {
                data && data.length > 0 && (
                    <div className='flex justify-center items-center gap-5 mt-4 overflow-y-hidden '>
                        <div className='w-[2rem] h-[2rem] flex justify-center items-center rounded-[2px] bg-[#FFF] border-solid border-2 border-[#D9D9D9]'>
                            <MdOutlineKeyboardArrowLeft className='cursor-pointer text-[#D9D9D9]' onClick={previousPage} />
                        </div>
                        {
                            number?.map((item, index) => {
                                return (
                                    <div key={index} className='flex gap-3 cursor-pointer'>
                                        <div className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-[2px] bg-[#FFF] border-solid border-2 ${currentPage === item ? "border-[#1971F5]" : "border-[#D9D9D9]"}`} onClick={() => changePage(item)}>
                                            <p style={{ color: currentPage === item ? '#1971F5' : 'black' }} className='text-xs' onClick={() => changePage(item)}>{item}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='w-[2rem] h-[2rem] flex justify-center items-center rounded-[2px] bg-[#FFF] border-solid border-2 border-[#D9D9D9]'>
                            <MdOutlineKeyboardArrowRight className='cursor-pointer text-[#D9D9D9]' onClick={nextPage} />
                        </div>
                    </div>
                )
            }
        </div>


    )
}

export default Table
