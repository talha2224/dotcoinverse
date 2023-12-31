import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserTable = ({ showLeftSideBar, setshowLeftSideBar, data, setreFetch, reFetch, userCredit, popup, showPopup, setshowPopup }) => {

    const [block, setBlock] = useState(false)
    const [SearchValue, setSearchValue] = useState('')
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


    const UpdateFunction = (id) => {
        axios.put(`/api/v1/user/block/${id}`, { block })
            .then((res) => {
                if (res.status == 200) {
                    toast.success("Operation Sucesfull")
                    setTimeout(() => {
                        setreFetch(!reFetch)
                    }, 3000);
                }
            })
            .catch((e) => {
                toast.error("Backend Not Running")
            })
    }

    const getEachUserCredit = (userId) => {
        const user = userCredit.find((item) => item.userId === userId);
        if (user) {
            return user.amount;
        } else {
            return 0;
        }
    }

    return (

        <div className={`font-roboto w-[100%] h-[100%] flex flex-col p-5 overflow-y-auto`}>

            <div className='flex justify-between items-center'>

                {/* TITLE  */}
                <div>
                    <h1 className='text-xl tracking-[1.2px]'>All Users</h1>
                </div>

                {/* RESPONSIVE HAMBURGER AND ADD BUTTON  */}
                <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
                    <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
                </div>
            </div>

            <div>
                <button onClick={() => setshowPopup(true)} className='w-[12rem] h-[2.4rem] rounded-md bg-slate-800 text-white mt-4'>Give Today Reward</button>
            </div>

            {/* SEARCH BAR  */}

            <div>
                <input onChange={(e) => setSearchValue(e.target.value)} style={{ border: "0.1px solid lightgray" }} type="text" placeholder='Search' className='w-[18rem] placeholder:text-sm h-[2.5rem] rounded-md pl-4 pr-4 mt-8 outline-none ' />
            </div>

            {/* TABLE  */}
            <div className='w-full overflow-x-scroll md:overflow-x-auto bg-white mt-10'>
                {
                    data && data.length > 0 ?
                        <table className='w-full'>

                            <thead>
                                <tr className=''>
                                    <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>User Id</th>
                                    <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Firstname</th>
                                    <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Lastname</th>
                                    <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Email</th>
                                    <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Total Credit</th>
                                    <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Level</th>
                                    <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Actions</th>
                                </tr>
                            </thead>

                            <tbody className=''>
                                {
                                    records.filter((item)=>{
                                        console.log(item.firstname)
                                        return item.firstname.toLowerCase().includes(SearchValue.toLowerCase()) || item.lastname.toLowerCase().includes(SearchValue.toLowerCase()) || item.email.toLowerCase().includes(SearchValue.toLowerCase()) || getEachUserCredit(item._id)===Number(SearchValue) || item._id.toLowerCase().includes(SearchValue.toLowerCase())
                                    })
                                    .map((item) => {
                                        return (
                                            <tr key={item._id} className='cursor-pointer'>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?._id}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.firstname}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.lastname}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.email}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>$ {getEachUserCredit(item?._id)}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.level}</td>
                                                <td className='p-4 text-sm text-gray-600  whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>
                                                    <button onClick={() => { setBlock(item?.blocked ? false : true), UpdateFunction(item._id) }} className={`text-blue-800`}>{item.blocked ? "Unblock" : "Block"}</button>
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

            {
                showPopup && (

                    <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50'>

                        <div className='flex justify-center items-center w-[100%] h-[100%]'>
                            {popup}
                        </div>

                    </div>
                )
            }

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>


    )
}

export default UserTable
