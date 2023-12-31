import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import Table from "../Table"
import { DepositData } from '../../../constants/tableData'
import axios from 'axios'

const DepositHistory = () => {

  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  const [showPopup, setshowPopup] = useState(false)
  const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get(`/api/v1/user/deposit/get/all`)
    .then((res)=>{
      setdata(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[showPopup])
  
  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Table data={data} th={DepositData} title={"Deposit History"}  setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default DepositHistory
