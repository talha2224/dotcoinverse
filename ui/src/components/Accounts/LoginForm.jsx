import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import Gif from '../../assets/form.gif'


const LoginForm = () => {
  
  const [userData, setUserData] = useState({email: "",password: ""})
  const [loading, setloading] = useState(false)
  const router = useNavigate()

  const onChangeInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const SubmitForm = async(e) => {
    e.preventDefault()
    setloading(true)
    if (!userData.email || !userData.password) {
      setloading(false)
      toast.error("All Fields Are Required")
    }
    else {
      axios.post(`/api/v1/user/login`,userData)
      .then((res)=>{
        if(res?.status===200){
          setloading(false)
          localStorage.setItem('token',res.data.token)
          toast.success("Login Sucessfull")
          setTimeout(() => {
            router('/user/history')
          }, 3000);
        }
      })
      .catch((e)=>{
        if(e?.response?.status==404){
          setloading(false)
          toast.error("Email Not Found")
        }
        else if(e?.response?.status==423){
          setloading(false)
          toast.error("Your Account Has Been Blocked")
        }
        else if(e?.response?.status==403){
          setloading(false)
          localStorage.setItem("email",userData.email)
          toast.error("Verify Your Account")
          setTimeout(() => {
            router('/account/otp')
          }, 3000);
        }
        else if(e?.response?.status==401){
          setloading(false)
          toast.error("Invalid Credentials")
        }
        else{
          setloading(false)
          toast.error("Backend Is Not Running")
        }
    })
    }
  }
  
  return (

    <div data-aos='zoom-in' className={` font-roboto w-[100%] h-[78vh] md:h-[75vh]  pl-10 pr-10 `}>

      <div className='flex justify-center items-center h-[100%]'>

        <div className='pt-4 pb-4 pl-8 pr-8 bg-[#0e1734] shadow-formShadow rounded-md'>

          {/* UPPER PART  */}
          <div className='w-[100%] '>
            <div style={{ background: "linear-gradient(97deg,#5f00ff 0%,#cd00ff 50%)" }} className='w-[3rem] h-[5px] rounded-md'></div>
            <div className='w-[100%] flex justify-center '>
              <h1 className='font-semibold text-white text-2xl tracking-widest'>Login</h1>
            </div>
            <div style={{ background: "linear-gradient(97deg,#5f00ff 0%,#cd00ff 50%)" }} className='w-[3rem] h-[5px] rounded-md float-right'></div>
          </div>

          {/* MAIN FORM PART  */}
          <div className='mt-10'>

            {/* EMAIL  */}
            <div>
              <input onChange={onChangeInput} style={{ border: "1.5px solid #888" }} type="text" name="email" placeholder='Example:user1@xyz.com' className='w-[100%] h-[2.5rem] placeholder:tracking-widest outline-none placeholder:text-sm  rounded-md pl-4 pr-4 bg-transparent text-[#888]' />
            </div>

            {/* PASSWORD  */}
            <div className='mt-4'>
              <input onChange={onChangeInput} style={{ border: "1.5px solid #888" }} type="text" name="password" placeholder='Password@1234' className='w-[100%] h-[2.5rem]  outline-none placeholder:text-sm placeholder:tracking-widest rounded-md pl-4 pr-4 bg-transparent text-[#888]' />
            </div>

            {/* FORGET PASSWORD  */}
            {/* <div className='mt-4 flex justify-end'>
              <p className='text-sm text-[#888] cursor-pointer tracking-wider'>Forget Password ?</p>
            </div> */}

            {/* BUTTON  */}

            <div className='mt-4' onClick={SubmitForm}>
              <button style={{ background: "linear-gradient(97deg,#5f00ff 0%,#cd00ff 50%)" }} className="h-[2.5rem] w-[100%] text-white text-lg font-extrabold tracking-widest rounded-md outline-none border-none">{loading ? "Loading ..." : "Login"}</button>
            </div>

            {/* DON'T HAVE AN ACCOUNT  */}
            <div className='mt-10'>
              <p className='text-white text-sm tracking-wider'>Don't have an account? <Link to={"/account/register"} className='text-[#888]'>Register Now</Link></p>
            </div>

          </div>


        </div>

      </div>

      {/* GIF BACKGROUND  */}
      {/* <div style={{backgroundImage:`url(${Gif})`,height:"100%"}} className=' absolute left-0 top-0 bg-slate-600 w-[100vw] h-[50rem] -z-50'></div> */}


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

export default LoginForm
