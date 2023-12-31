import React, { useEffect } from 'react'
import Transaction from "../../../components/UserDashboard/history/TransactionHistory"
import { useNavigate } from 'react-router-dom'

const Page = () => {

  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("token") && nav("/")
  },[])

  return (
    <div>
      <Transaction/>
    </div>
  )
}

export default Page
