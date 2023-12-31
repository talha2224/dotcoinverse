import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import Table from "./TransactionTable"
import { transactionData } from '../../../constants/tableData'
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'
import axios from 'axios'

const Transaction = () => {

  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  const [accountId] = useState(jwtDecodeFunction()._id)
  const [data, setdata] = useState([])
  useEffect(()=>{
    axios.get(`/api/v1/user/transaction/${accountId}`)
    .then((res)=>{
      setdata(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])

  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Table data={data} th={transactionData} title={"Transactions History"} btntitle={"Add Transaction"} setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default Transaction
