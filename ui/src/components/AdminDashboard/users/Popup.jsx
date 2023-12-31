import React, {useState } from 'react'
import axios from 'axios';
import { ImCross } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Popup = ({setshowPopup}) => {

    const [data, setData] = useState({ profit:0 })
    const [loading, setloading] = useState(false)   

    const onChangeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setloading(true)
        if(!data.profit){
            toast.error("Percentage Is Required")
            setloading(false)
        }
        else{
            axios.post(`/api/v1/user/credit/reward`,{percentage:data.profit})
            .then((res)=>{
                if(res.status===200){
                    setloading(false)
                    toast.success("Reward Send")
                    setTimeout(() => {
                        setshowPopup(false)
                    }, 3000);
                }
            })
            .catch((e)=>{
                setloading(false)
                toast.error("Backend Not Running")
            })
        }
    }
    
    return (
        <div className='sm:w-[25rem] w-[100%] ml-3 mr-3 sm:m-0 bg-white p-4 font-roboto rounded-md'>

            {/* HEADING AND CLOSE ICON  */}
            <div className='flex justify-between mb-3'>
                <h1 className='text-lg'>Send Reward</h1>
                <ImCross onClick={() => setshowPopup(false)} className='cursor-pointer ' />
            </div>

            {/* REWARDS PERCENTAGE */}
            <input onChange={onChangeInput}  name='profit' style={{ border: "1px solid #e9ecef" }} type="number" placeholder='Enter Reward Percentage' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2 mb-3' />

            {/* SUBMIT BUTTON  */}
            <div className=' w-[100%] mt-3' onClick={onSubmit}>
                <button className=' w-[100%] h-[2.3rem] font-cursive text-sm text-white bg-blue-950 rounded-md'>{loading ? "Loading ..." : "Send Reward"}</button>
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

export default Popup
