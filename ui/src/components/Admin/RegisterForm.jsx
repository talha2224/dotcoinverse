import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

  const [userData,setUserData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  })
  const [loading, setloading] = useState(false)
  const router = useNavigate()

  const onChangeInput=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const SubmitForm = async(e) => {
    e.preventDefault()
    setloading(true)
    if (!userData.email || !userData.password || !userData.firstname || !userData.lastname) {
      setloading(false)
      toast.error("All Fields Are Required")
    }
    else {
      axios.post(`/api/v1/admin/register`,userData)
      .then((res)=>{
        console.log(res.data)
        if (res){
          setloading(false)
          toast.success("Account Created")
          localStorage.setItem('admintoken',res.data.token)
          setTimeout(() => {
            router("/admin/history/deposit")
          }, 3000);
        }
      })
      .catch((e)=>{
        if(e?.response?.status===403){
          setloading(false)
          toast.error("Admin Already Exits")
        }
        else{
          setloading(false)
          toast.error("Backend Is Not Running")
        }
      })
    }
  }

  return (


    <div data-aos='zoom-in' className={`font-roboto w-[100%] pl-10 pr-10 h-screen  overflow-y-auto `}>

      <div className='flex justify-center items-center h-[100%] pb-4'>

        <div className='pt-4 pb-4 pl-8 pr-8 h-[28rem] overflow-y-auto bg-[#0e1734] shadow-formShadow rounded-md'>

          {/* UPPER PART  */}
          <div className='w-[100%] '>
            <div style={{ background: "linear-gradient(97deg,#5f00ff 0%,#cd00ff 50%)" }} className='w-[3rem] h-[5px] rounded-md'></div>
            <div className='w-[100%] flex justify-center '>
              <h1 className='font-semibold text-white text-2xl tracking-widest'>Register</h1>
            </div>
            <div style={{ background: "linear-gradient(97deg,#5f00ff 0%,#cd00ff 50%)" }} className='w-[3rem] h-[5px] rounded-md float-right'></div>
          </div>

          {/* MAIN FORM PART  */}
          <div className='mt-10'>

            {/* FIRST NAME  */}
            <div>
              <input onChange={onChangeInput} style={{ border: "1.5px solid #888" }} type="text" name="firstname" placeholder='Wole' className='w-[100%] h-[2.5rem] placeholder:tracking-widest outline-none placeholder:text-sm  rounded-md pl-4 pr-4 bg-transparent text-[#888]' />
            </div>

            {/* LAST NAME  */}
            <div className='mt-3'>
              <input onChange={onChangeInput} style={{ border: "1.5px solid #888" }} type="text" name="lastname" placeholder='Michoel' className='w-[100%] h-[2.5rem]  outline-none placeholder:text-sm placeholder:tracking-widest rounded-md pl-4 pr-4 bg-transparent text-[#888]' />
            </div>

            {/* EMAIL  */}
            <div className='mt-3'>
              <input onChange={onChangeInput} style={{ border: "1.5px solid #888" }} type="text" name="email" placeholder='Example:user1@xyz.com' className='w-[100%] h-[2.5rem] placeholder:tracking-widest outline-none placeholder:text-sm  rounded-md pl-4 pr-4 bg-transparent text-[#888]' />
            </div>

            {/* PASSWORD  */}
            <div className='mt-3'>
              <input onChange={onChangeInput} style={{ border: "1.5px solid #888" }} type="text" name="password" placeholder='Password@1234' className='w-[100%] h-[2.5rem]  outline-none placeholder:text-sm placeholder:tracking-widest rounded-md pl-4 pr-4 bg-transparent text-[#888]' />
            </div>

            {/* BUTTON  */}
            <div className='mt-3' onClick={SubmitForm}>
              <button style={{ background: "linear-gradient(97deg,#5f00ff 0%,#cd00ff 50%)" }} className="h-[2.5rem] w-[100%] text-white text-lg font-extrabold tracking-widest rounded-md outline-none border-none">{loading?"Loading ...":"Register"}</button>
            </div>

            {/* DON'T HAVE AN ACCOUNT  */}
            <div className='mt-10'>
              <p className='text-white text-sm tracking-wider'>Already have an account? <Link to='/admin/account/login' className='text-[#888]'>Login Now</Link></p>
            </div>

          </div>


        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
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

export default RegistrationForm