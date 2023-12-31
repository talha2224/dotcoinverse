import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AllUser from '../../../components/AdminDashboard/users/AllUser'

const Page = () => {
  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("admintoken") && nav("/")
  },[])
  return (
    <div>
      <AllUser/>
    </div>
  )
}

export default Page
