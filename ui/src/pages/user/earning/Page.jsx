import React, { useEffect } from 'react'
import TotalEarning from '../../../components/UserDashboard/earning/TotalEarning'
import { useNavigate } from 'react-router-dom'

const Page = () => {

  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("token") && nav("/")
  },[])

  return (
    <div>
      <TotalEarning/>
    </div>
  )
}

export default Page
