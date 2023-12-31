import React, { useRef, useState } from 'react'
import axios from 'axios';
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'
import { ImCross } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePasswordPopup = ({ setPasswordPopup }) => {

    const [accountId] = useState(jwtDecodeFunction()._id)
    const [data, setData] = useState({ oldpassword: "", newpassword: "" })
    const [loading, setloading] = useState(false)

    const onChangeInput = (e) => { setData({ ...data, [e.target.name]: e.target.value }) }

    const onSubmit = (e) => {
        e.preventDefault()
        setloading(true)
        if (!data.newpassword || !data.oldpassword) {
            setloading(false)
            toast.error("ALL FIELDS ARE REQUIRED")
        }
        else {
            axios.put(`/api/v1/user/update/password/${accountId}`, data)
                .then((res) => {
                    if (res.status === 200) {
                        setloading(false)
                        toast.success("Password Updated")
                        setTimeout(() => {
                            setPasswordPopup(false)
                        }, 3000);
                    }
                })
                .catch((e) => {
                    if (e.response.status === 401) {
                        setloading(false)
                        toast.error("Invalid Password")
                    }
                    else {
                        setloading(false)
                        toast.error("Backend Not Running")
                    }

                })
        }
    }

    return (
        <div className='sm:w-[25rem] w-[100%] ml-3 mr-3 sm:m-0 bg-white p-4 font-roboto rounded-md'>

            {/* HEADING AND CLOSE ICON  */}
            <div className='flex justify-between mb-3'>
                <h1 className='text-lg'>Update Password</h1>
                <ImCross onClick={() => setPasswordPopup(false)} className='cursor-pointer ' />
            </div>

            {/* FIRST NAME LASTNAME EMAIL INPUT  */}
            <input onChange={onChangeInput} name='oldpassword' style={{ border: "1px solid #e9ecef" }} type="text" placeholder='Enter Current Password' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2 mb-3' />
            <input onChange={onChangeInput} name='newpassword' style={{ border: "1px solid #e9ecef" }} type="text" placeholder='Enter New Password' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2 mb-3' />


            {/* SUBMIT BUTTON  */}
            <div className=' w-[100%] mt-3' onClick={onSubmit}>
                <button className=' w-[100%] h-[2.3rem] font-cursive text-sm text-white bg-blue-950 rounded-md'>{loading ? "Loading ..." : "Update Password"}</button>
            </div>



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

export default ChangePasswordPopup
