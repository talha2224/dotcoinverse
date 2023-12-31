import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Table = ({ title, showLeftSideBar, setshowLeftSideBar, th, data }) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const [SearchValue, setSearchValue] = useState('')
    const readAbleDate = (date) => {
        const dateObject = new Date(date);
        const readableDate = dateObject.toLocaleString('en-US', options);
        return readableDate
    }

    const [currentPage, setcurrentPage] = useState(1)
    const perPageRecord = 3
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

            <div>
                <input onChange={(e) => setSearchValue(e.target.value)} style={{ border: "0.1px solid lightgray" }} type="text" placeholder='Search' className='w-[18rem] placeholder:text-sm h-[2.5rem] rounded-md pl-4 pr-4 mt-8 outline-none ' />
            </div>

            {/* TABLE  */}
            <div className='w-full overflow-x-scroll md:overflow-x-auto bg-white mt-[3rem]'>
                {
                    data && data.length > 0 ?
                        <table className='w-full'>

                            <thead>
                                <tr className=''>
                                    {
                                        th.map((item, index) => {
                                            return (
                                                <th key={item.title} className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item.title}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>

                            <tbody className=''>
                                {
                                    records?.filter((item) => {
                                        return  SearchValue ? item?._id.includes(SearchValue) || item?.depositId?.amount ===Number(SearchValue) || item?.withdrawId?.amount===Number(SearchValue)|| item?.userId?.firstname.toLowerCase().includes(SearchValue.toLowerCase()) 
                                        || item?.withdrawId?._id.includes(SearchValue) || item?.depositId?._id.includes(SearchValue)
                                        :true

                                    })?.map((item) => {
                                        return (
                                            <tr key={item._id} className='cursor-pointer'>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?._id}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.withdrawId ? item?.withdrawId?._id : "-"}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.depositId ? item?.depositId?._id : "-"}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.userId?.firstname}</td>
                                                <td className='p-4 text-sm text-gray-600  whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>$ {item?.depositId ? item?.depositId?.amount : item?.withdrawId?.amount}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{readAbleDate(item?.withdrawId ? item?.withdrawId?.withdrawDate : item?.depositId?.depositDate)}</td>
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
