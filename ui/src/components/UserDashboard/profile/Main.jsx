import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import Profile from './Profile'
import axios from 'axios'
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'
import UpdatePopup from './UpdatePopup'
import ChangePasswordPopup from './ChangePasswordPopup'

const Main = () => {
  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  const [showPopup, setshowPopup] = useState(false)
  const [PasswordPopup, setPasswordPopup] = useState(false)
  const [accountId] = useState(jwtDecodeFunction()._id)
  const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get(`/api/v1/user/${accountId}`)
    .then((res)=>{
      setdata(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[showPopup])

  console.log(data)

  return (

    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar}component={<Profile 
      popup={<UpdatePopup setshowPopup={setshowPopup} userdata={data}/>}
      popupPassword ={<ChangePasswordPopup setPasswordPopup={setPasswordPopup}/>} 
      setshowPopup={setshowPopup} setPasswordPopup={setPasswordPopup} PasswordPopup={PasswordPopup} showPopup={showPopup} data={data} setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar}/>}/>
    </div>

  )
}

export default Main
