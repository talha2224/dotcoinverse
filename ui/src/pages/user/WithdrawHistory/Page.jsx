import React, { useEffect } from 'react'
import WithDrawHistory from "../../../components/UserDashboard/history/WithDrawHistory"
import { useNavigate } from 'react-router-dom'

const Page = () => {

  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("token") && nav("/")
  },[])

  return (
    <div>
      <WithDrawHistory/>
    </div>
  )
}

export default Page