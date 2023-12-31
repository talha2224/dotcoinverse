import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import Table from "./WithdrawTable"
import { withdrawData } from '../../../constants/tableData'
import WithdrawPopup from './WithdrawPopup'
import axios from 'axios'
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'
const WithDrawHistory = () => {

  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  const [showPopup, setshowPopup] = useState(false)
  const [accountId] = useState(jwtDecodeFunction()._id)
  const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get(`/api/v1/user/single/withdraw/${accountId}`)
    .then((res)=>{
      setdata(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[showPopup])
  return (
    <div>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Table data={data} setshowPopup={setshowPopup} showPopup={showPopup} popup={<WithdrawPopup setshowPopup={setshowPopup}/>} th={withdrawData} title={"Withdraw History"} btntitle={"Add Withdraw"} setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default WithDrawHistory
