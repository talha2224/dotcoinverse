import React, {useState } from 'react'
import axios from 'axios';
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'
import { ImCross } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WithdrawPopup = ({ setshowPopup }) => {

    const [accountId] = useState(jwtDecodeFunction()._id)
    const [data, setData] = useState({ amount: 0, withdrawBy: accountId, accountNumber: "" })
    const [loading, setloading] = useState(false)

    const onChangeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setloading(true)
        if (!data.accountNumber || !data.amount || !data.withdrawBy) {
            setloading(false)
            toast.error("All Fields Are Required")
        }
        else {
            axios.post(`/api/v1/user/withdraw`, data)
                .then((res) => {
                    if (res.status == 200) {
                        setloading(false)
                        toast.success("Withdraw Request Send To Admin")
                        setTimeout(() => {
                            setshowPopup(false)
                        }, 3000);
                    }
                })
                .catch((e) => {
                    if(e.response?.status===400){
                        setloading(false)
                        toast.error("Minimum Withdraw Is 10$")
                    }
                    else if(e?.response?.status===403){
                        setloading(false)
                        toast.error("You Donot Have Enough Credit")
                    }
                    else{
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
                <h1 className='text-lg'>Withdraw Amount</h1>
                <ImCross onClick={() => setshowPopup(false)} className='cursor-pointer ' />
            </div>

            <div style={{ border: "1px solid #e9ecef" }} className='mt-2 mb-2 p-2 rounded-md'>
                <p className='font-roboto text-sm text-[#8f9191]'>5% Tax Will Be Deducted</p>
            </div>
            
            {/* ENTER AMOUNT INPUT  */}
            <input onChange={onChangeInput} name='amount' style={{ border: "1px solid #e9ecef" }} type="number" placeholder='Enter Amount in $' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2 mb-3' />

            {/* ENTER ACCOUNT NUMBER  */}
            <input onChange={onChangeInput} name='accountNumber' style={{ border: "1px solid #e9ecef" }} type="text" placeholder='Enter Account Number' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2' />


            {/* SUBMIT BUTTON  */}
            <div className=' w-[100%] mt-3' onClick={onSubmit}>
                <button className=' w-[100%] h-[2.3rem] font-cursive text-sm text-white bg-blue-950 rounded-md'>{loading ? "Loading ..." : "Withdraw Amount"}</button>
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

export default WithdrawPopup
