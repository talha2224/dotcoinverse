import React from 'react'
import { ImCross } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router-dom';
import userLinks from '../../constants/userLink';


const Dashboard = ({ component, setshowLeftSideBar, showLeftSideBar }) => {

  const nav = useNavigate()


  const onNavClick=(id,link)=>{ id===12 ? logoutFunc() : nav(link)}
  const logoutFunc=()=>{
    localStorage.removeItem("token")
    toast.success("Logout Sucessfull")
    setTimeout(() => {
      nav("/")
    }, 3000);
  }


  return (

    <div className={`font-roboto flex items-start w-screen h-screen overflow-y-auto absolute`}>

      {/* LEFT SIDE NAV   */}
      <div className='w-[14rem] hidden md:block h-[100%] bg-[#181f3f] pl-2 pr-2 pt-5 pb-5 overflow-y-auto'>

        {/* LOGO  */}
        <div className='flex justify-center items-center'>
          <h1 className='text-lg text-white tracking-[1.4px] font-bold'>Dot Coinverse</h1>
        </div>

        {/* MAIN LINKS  */}

        <div className='mt-7'>
          {
            userLinks?.map((item, index) => {
              return (
                <div onClick={()=>onNavClick(item.id,item.link)} key={index + item?.id} className='hover:bg-[#5b6aa1] hover:text-white text-[#8e99c1] h-[2rem] mb-3 rounded-sm cursor-pointer flex justify-start gap-3 pl-2 items-center'>
                  <p>{item?.icon}</p>
                  <p className='text-sm cursor-pointer tracking-wide'>{item?.title}</p>
                </div>

              )
            })
          }
        </div>

      </div>

      {/* LEFT SIDE NAV RESPONSIVE */}

      {
        showLeftSideBar && (

          <div className='w-[14rem] absolute top-0 left-0  block md:hidden h-[100%] bg-[#181f3f] pl-2 pr-2 pt-5 pb-5 overflow-y-auto'>

            {/* CLOSE NAV ICON  */}

            <div className=' absolute right-3 top-2'>
              <ImCross className='text-[#8e99c1] cursor-pointer' onClick={() => setshowLeftSideBar(false)} />
            </div>

            {/* LOGO  */}
            <div className='flex justify-center items-center'>
              <h1 className='text-lg text-white tracking-[1.4px] font-bold'>Dot Coinverse</h1>
            </div>

            {/* MAIN LINKS  */}

            <div className='mt-7'>
              {
                userLinks?.map((item, index) => {
                  return (
                    <div onClick={()=>onNavClick(item.id,item.link)} key={index + item?.id} className='hover:bg-[#5b6aa1] hover:text-white text-[#8e99c1] h-[2rem] mb-3 rounded-sm cursor-pointer flex justify-start gap-3 pl-2 items-center'>
                      <p>{item.icon}</p>
                      <p className='text-sm cursor-pointer tracking-wide'>{item?.title}</p>
                    </div>

                  )
                })
              }

            </div>
          </div>
        )
      }

      {/* RIGHT MAIN CONTENT  */}

      <div className='flex-1 h-[100%] overflow-y-auto bg-white'>
        {component}
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

export default Dashboard