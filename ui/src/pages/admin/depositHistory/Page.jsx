import React, { useEffect } from 'react'
import DepositHistory from "../../../components/AdminDashboard/history/DepositHistory"
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("admintoken") && nav("/")
  },[])
  return (
    <div>
      <DepositHistory/>
    </div>
  )
}

export default Page
