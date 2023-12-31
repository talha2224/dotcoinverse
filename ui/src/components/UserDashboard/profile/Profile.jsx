import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import ProfileImage from '../../../assets/face2.jpg'

const Profile = ({ showLeftSideBar, setshowLeftSideBar, setshowPopup, showPopup, popup, data, PasswordPopup, setPasswordPopup, popupPassword }) => {

  return (
    <div className={`font-roboto w-[100%] h-[100%] p-5 overflow-y-auto `}>

      <div className='flex justify-between items-center'>

        {/* TITLE  */}
        <div>
          <h1 className={`font-cursive text-4xl font-medium`}>Profile</h1>
        </div>

        {/* RESPONSIVE HAMBURGER  */}
        <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
          <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
        </div>
      </div>

      {/* MAIN SECTION  */}

      <div className='mt-[4rem] flex justify-between items-start sm:items-center lg:flex-row flex-col bg-slate-100'>

        <div className='rounded-md p-4'>
          <p className='mb-2'>First Name: {data?.firstname}</p>
          <p className='mb-2'>Last Name: {data?.lastname}</p>
          <p className='mb-2'>Email: {data?.email}</p>
          <p className='mb-2'>Refferal Key: {data?.secretkey}</p>
          <p className='mb-2'>Password: *********</p>
          <div className='block sm:flex gap-x-2 items-center mt-4'>
            <button className='w-[10rem] mb-3 sm:mb-0 block h-[2.5rem] tracking-widest text-sm rounded-md border-none bg-[#181f3f] text-[#fff]' onClick={()=>setPasswordPopup(true)}>Change Password</button>
            <button className='w-[10rem] block h-[2.5rem] tracking-widest text-sm rounded-md border-none bg-[#181f3f] text-[#fff]' onClick={() => setshowPopup(true)}>Update Profile</button>
          </div>
        </div>

        <div className='rounded-md p-4 lg:mt-0 mt-4'>
          <img src={data?.image ? data?.image : ProfileImage} alt='profile' className='lg:w-[15rem] w-[100%] h-[15rem] bg-cover sm:bg-contain rounded-md' />
        </div>

      </div>

      {
        showPopup && (

          <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50'>

            <div className='flex justify-center items-center w-[100%] h-[100%]'>
              {popup}
            </div>

          </div>
        )
      }

      {
        PasswordPopup && (

          <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50'>

            <div className='flex justify-center items-center w-[100%] h-[100%]'>
              {popupPassword}
            </div>

          </div>
        )
      }

    </div>
  )
}

export default Profile
