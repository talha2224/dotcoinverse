import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import Table from "./DepositTable"
import { DepositData2 } from '../../../constants/tableData'
import DepositPopup from './DepositPopup'
import axios from 'axios'
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'

const DepositHistory = () => {

  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  const [showPopup, setshowPopup] = useState(false)
  const [accountId] = useState(jwtDecodeFunction()._id)
  const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get(`/api/v1/user/single/deposit/${accountId}`)
    .then((res)=>{
      setdata(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[showPopup])
  
  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Table data={data} popup={<DepositPopup setshowPopup={setshowPopup}/>} th={DepositData2} setshowPopup={setshowPopup} showPopup={showPopup} title={"Deposit History"} btntitle={"Add Deposit"} setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default DepositHistory
