import axios from 'axios';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({ title, showLeftSideBar, setshowLeftSideBar, th, data }) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const readAbleDate = (date) => {
        const dateObject = new Date(date);
        const readableDate = dateObject.toLocaleString('en-US', options);
        return readableDate
    }
    // SEARCH CODE
    const [searchValue, setSearchValue] = useState("")
    // PAGINATION CODE 
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

    const approvedPayment = async (id) => {
        axios.put(`/api/v1//user/withdraw/${id}`, { approved: true })
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Payment Approved")
                }
            })
            .catch((e) => {
                console.log(e)
                toast.error("Backend Not Running")
            })
    }

    const declinePayment = async (id) => {
        axios.put(`/api/v1/user/withdraw/${id}`, { approved: false })
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Payment Decline")
                }
            })
            .catch((e) => {
                toast.error("Backend Not Running")
            })
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

            {/* SEARCH BAR  */}

            <div>
                <input onChange={(e) => setSearchValue(e.target.value)} style={{ border: "0.1px solid lightgray" }} type="text" placeholder='Search By Approved' className='w-[18rem] placeholder:text-sm h-[2.5rem] rounded-md pl-4 pr-4 mt-3 outline-none ' />
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
                                                <th key={item.title} className={`pb-2 pt-2 pl-4 pr-4 text-lg ${item.id === 7 ? "text-center" : "text-start"} font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider`}>{item.title}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>

                            <tbody className='h-[3rem]'>
                                {
                                    records.filter((item) => {
                                        return searchValue ? item.amount === Number(searchValue)||item.deductAmount === Number(searchValue) || item._id.includes(searchValue) || item.withdrawBy?.firstname.toLowerCase().includes(searchValue.toLowerCase()) || readAbleDate(item?.withdrawDate).toLowerCase().includes(searchValue.toLowerCase()) || item.decline.toString().toLowerCase().includes(searchValue.toLowerCase())|| item.approved.toString().toLowerCase().includes(searchValue.toLowerCase()) :true
                                    })
                                        .map((item) => {
                                            return (
                                                <tr key={item._id} className='cursor-pointer'>
                                                    <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?._id}</td>
                                                    <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.withdrawBy?.firstname}</td>
                                                    <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>${item?.amount}</td>
                                                    <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>${item?.deductAmount}</td>
                                                    <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{readAbleDate(item?.withdrawDate)}</td>
                                                    {
                                                        item.decline === true ?
                                                            <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{"Decline"}</td> :
                                                            <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.approved === true && item?.decline === false ? "Approved" : "Processing"}</td>
                                                    }

                                                    <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>
                                                        {
                                                            !item?.approved && !item.decline ?
                                                                <div>
                                                                    <button onClick={() => approvedPayment(item._id)} className='w-[5rem] h-[2.3rem] mr-2 rounded-md bg-slate-700 text-white'>Approve</button>
                                                                    <button onClick={() => declinePayment(item._id)} className='w-[5rem] h-[2.3rem] mr-2 rounded-md bg-red-700 text-white'>Decline</button>
                                                                </div> :
                                                                <p className='text-center'>------</p>
                                                        }
                                                    </td>

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