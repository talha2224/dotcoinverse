import OtpInput from 'react-otp-input';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Otp = () => {

  const [otp, setOtp] = useState('');
  const [loading, setloading] = useState(false)
  const router = useNavigate()

  const SubmitForm = async(e) => {
    e.preventDefault()
    setloading(true)
    if (!otp.length>0) {
      setloading(false)
      toast.error("Enter Otp")
    }
    else {
      axios.post(`/api/v1/user/verify/otp`,{otp:otp,email:localStorage.getItem('email')})
      .then((res)=>{
        if (res.status===200){
          setloading(false)
          localStorage.removeItem("email")
          toast.success("Login To Your Account")
          setTimeout(() => {
            router("/account/login")
          }, 3000);
        }
      })
      .catch((e)=>{
        if(e?.response?.status===401){
          setloading(false)
          toast.error("Invalid Otp"),
          setOtp("")
        }
        else if(e?.response?.status===410){
          setloading(false)
          toast.error("Otp Timeout"),
          setOtp("")
        }
        else{
          setloading(false)
          toast.error("Backend Is Not Running")
        }
      })
    }
  }

  const resendOtp = (e)=>{
    e.preventDefault()
    setloading(true)
    axios.post(`/api/v1/user/regenerate/otp`,{email:localStorage.getItem('email')})
    .then((res)=>{
      if (res?.status===200){
        setloading(false)
        setOtp("")
        toast.success("New Otp Has Been Sent")
      }
    })
    .catch((e)=>{
      console.log(e)
      if(e?.response.status===404){
        setloading(false)
        toast.error("Invalid Email")
        setTimeout(() => {
          router("/account/login")
        }, 3000);
      }
      else{
        setloading(false)
        toast.error("Backend Is Not Running")
      }
    })
  }

  // CHECK IF EMAIL IS PRESENT ON LOCALSTORAGE 
  useEffect(()=>{
    if (!localStorage.getItem("email")){
      router("/account/login")
    }
  },[])

  
  return (

    <div data-aos='zoom-in' className={`font-roboto w-[100%] h-[78vh] md:h-[80vh]  pl-10 pr-10 `}>

      <div className='flex justify-center items-center h-[100%]'>

        <div className='pt-4 pb-4 pl-8 pr-8 bg-[#0e1734] shadow-formShadow rounded-md'>
          <h1 className='text-xl text-white mb-1 font-bold tracking-[1.3px] text-center'>OTP</h1>
          <p className='text-[#919498] mb-4 text-sm tracking-[1.3px]'>Otp has sent to your email</p>
          <OtpInput value={otp} onChange={setOtp} numInputs={4} renderInput={(props) => <input {...props} />} inputStyle={{ width: "4rem", height: "4rem", backgroundColor: "#F0EFFF", marginRight: "10px", color: "#756dfd", marginBottom: "1rem", outline: "none", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", fontWeight: "bolder", fontSize: "1.5rem" }} />
          <p onClick={resendOtp} className='text-[#919498] mb-4 mr-3 text-sm tracking-[1.3px] cursor-pointer text-right'>Resend Otp</p>
          <div className='' onClick={SubmitForm}>
            <button style={{background:"linear-gradient(97deg,#5f00ff 0%,#cd00ff 50%)"}} className="h-[2.5rem] w-[100%] text-white text-lg font-extrabold tracking-widest rounded-md outline-none border-none">{loading?"Loading ..." : "Verify Otp"}</button>
          </div>
        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
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

export default Otp
