import React, { useEffect } from 'react'
import WithDrawHistory from "../../../components/AdminDashboard/history/WithDrawHistory"
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("admintoken") && nav("/")
  },[])
  return (
    <div>
      <WithDrawHistory/>
    </div>
  )
}

export default Page