import React, { useEffect } from 'react'
import DepositHistory from "../../../components/UserDashboard/history/DepositHistory"
import { useNavigate } from 'react-router-dom'

const Page = () => {

  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("token") && nav("/")
  },[])

  return (
    <div>
      <DepositHistory/>
    </div>
  )
}

export default Page
