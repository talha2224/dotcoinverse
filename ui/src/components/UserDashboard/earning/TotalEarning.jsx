import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import Card from './Card'
import axios from 'axios'
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'
import { transactionData } from '../../../constants/tableData'
import Table from './Table'

const TotalEarning = () => {
  const [showLeftSideBar, setshowLeftSideBar] = useState(false)
  // /user/credit/:userId
  const [accountId] = useState(jwtDecodeFunction()._id)
  const [remainingCredit, setRemainingCredit] = useState(0)
  const [withDrawAmount, setwithDrawAmount] = useState([])
  const [depositAmount, setDepositAmount] = useState([])
  const [Top10Transaction, setTop10Transaction] = useState([])
  const [userLevel, setuserLevel] = useState(0)


  const [totalWithdraw, settotalWithdraw] = useState(0)
  const [totalDeposit, settotalDeposit] = useState(0)

  const fetchWithdraw = () => {
    axios.get(`/api/v1/user/single/withdraw/${accountId}`)
      .then((res) => {
        setwithDrawAmount(res.data)
        if (res.data) {
          const approvedWithdrawals = res.data.filter((item) => item.approved === true);
          const totalWithdraw = approvedWithdrawals.reduce((acc, item) => acc + item.amount, 0);
          settotalWithdraw(totalWithdraw);
        }
      })
      .catch((e) => {
        console.log(e)
      })

  }
  const fetchDeposit = () => {
    axios.get(`/api/v1/user/single/deposit/${accountId}`)
      .then((res) => {
        setDepositAmount(res.data)
        if (res.data) {
          const approvedDeposits = res.data.filter((item) => item.approved === true);
          const totalDeposit = approvedDeposits.reduce((acc, item) => acc + item.amount, 0);
          settotalDeposit(totalDeposit);
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const fetchTotalCredit = () => {
    axios.get(`/api/v1/user/credit/${accountId}`)
      .then((res) => {
        setRemainingCredit(res.data[0].amount)
      })
      .catch((e) => {
        console.log(e)
      })

  }
  const fetchUserLevel = () => {
    axios.get(`/api/v1/user/${accountId}`)
      .then((res) => {
        setuserLevel(res?.data?.level)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const fetchTop10Transaction = () => {
    axios.get(`/api/v1/user/transaction/top/10`)
      .then((res) => {
        setTop10Transaction(res?.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    fetchDeposit()
    fetchWithdraw()
    fetchTotalCredit()
    fetchUserLevel()
    fetchTop10Transaction()
  }, [])


  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Card table={<Table th={transactionData} data={Top10Transaction} />} Top10Transaction={Top10Transaction} level={userLevel} totalWithdraw={totalWithdraw} totalDeposit={totalDeposit} remainingCredit={remainingCredit} setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default TotalEarning
