import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import UserTable from './UserTable'
import axios from 'axios'
import Popup from './Popup'


const AllUser = () => {
  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  const [data, setdata] = useState([])
  const [userCredit, setuserCredit] = useState([])
  const [reFetch, setreFetch] = useState(false)
  const [showPopup, setshowPopup] = useState(false)
  useEffect(() => {
    axios.get(`/api/v1/user`)
    .then((res)=>{
      setdata(res.data)
    })
    axios.get(`/api/v1/credit/user/all`)
    .then((res)=>{
      setuserCredit(res.data)
    })
  }, [reFetch,showPopup])
  
  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar}  showLeftSideBar={showLeftSideBar} component={<UserTable popup={<Popup setshowPopup={setshowPopup}/>} setshowPopup={setshowPopup} showPopup={showPopup} userCredit={userCredit} data={data} setreFetch={setreFetch} reFetch={reFetch} setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default AllUser
