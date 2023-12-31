import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import { withdrawData2 } from '../../../constants/tableData'
import WithdrawTable from './WithdrawTable'
import axios from 'axios'
const WithDrawHistory = () => {

  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get(`/api/v1/user/withdraw/get/all`)
    .then((res)=>{
      setdata(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <div>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<WithdrawTable data={data} th={withdrawData2} title={"Withdraw History"}  setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default WithDrawHistory
