import React, { useRef, useState } from 'react'
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {jwtDecodeFunction} from '../../../helpers/jwtDecode'
import { ImCross } from 'react-icons/im'
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DepositPopup = ({ setshowPopup }) => {

    const [value] = useState("hsgxsxvsxsxvsxhfccs655")
    const [isCopied, setisCopied] = useState(false)
    const [image, setImage] = useState([])
    const [amount, setamount] = useState(0)
    const [accountId] = useState(jwtDecodeFunction()._id)
    const [loading, setloading] = useState(false)
    const inputRef = useRef(null);
    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    };
    const handleImageClick = () => {
        inputRef.current.click();
    };

    const onSubmit=()=>{
        setloading(true)
        const formData = new FormData()
        formData.append("image",image)
        formData.append("amount",amount)
        formData.append("depositBy",accountId)

        if (!amount || !accountId){
            setloading(false)
            toast.error("All Fields Are Required")
        }
        else if (image.length===0){
            setloading(false)
            toast.error("Image is Required")
        }
        else{
            axios.post(`/api/v1/user/deposit`,formData)
            .then((res)=>{
                if(res.status==200){
                    setloading(false)
                    toast.success("Deposit Request Send To Admin")
                    setTimeout(() => {
                        setshowPopup(false)
                    }, 3000);
                }
            })
            .catch((e) => {
                if(e.response?.status===400){
                    setloading(false)
                    toast.error("Minimum Deposit Is 10$")
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
            <div className='flex justify-between'>
                <h1 className='text-lg'>Deposit Amount</h1>
                <ImCross onClick={() => setshowPopup(false)} className='cursor-pointer ' />
            </div>

            {/* COPY TEXT FUNCTIONALITY  */}
            <div style={{ border: "1px solid #e9ecef" }} className='flex justify-between items-center mt-2 mb-2 p-2 rounded-md'>
                <p className='font-cursive font-medium text-sm text-[#8f9191]'>{value}</p>
                <CopyToClipboard text={value} onCopy={()=>setisCopied(true)}>
                    <FaCopy className={`cursor-pointer ${isCopied?"text-[#292474]":"text-[#8f9191]"}`}/>
                </CopyToClipboard>
            </div>

            <div style={{ border: "1px solid #e9ecef" }} className='mt-2 mb-2 p-2 rounded-md'>
                <p className='font-roboto text-sm text-[#8f9191]'>5% Tax Will Be Deducted</p>
            </div>

            {/* ENTER AMOUNT INPUT  */}
            <input onChange={(e)=>setamount(e.target.value)} style={{ border: "1px solid #e9ecef" }} type="number" placeholder='Enter Amount in $' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2' />

            {/* CUSTOM IMAGE UPLOAD BUTTON  */}
            <div style={{ border: "1px solid #e9ecef" }} className={`h-[2.2rem] mt-2 flex justify-center items-center rounded-md`}>
                <label htmlFor="file-input">
                    <button className={`text-sm ${image?.length > 0 ? "text-[#eff3fc]" : "text-[gray]"}`} onClick={handleImageClick}>{image?.length === 0 ? "Upload Picture" : " Image Uploaded"}</button>
                </label>
                <input id="file-input" type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
            </div>

            {/* UPLOAD BUTTON  */}
            <div className=' w-[100%] mt-2' onClick={onSubmit}>
                <button className=' w-[100%] h-[2.3rem] font-cursive text-sm text-white bg-blue-950 rounded-md'>{loading?"Loading ..." :"Deposit Amount"}</button>
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

export default DepositPopup
