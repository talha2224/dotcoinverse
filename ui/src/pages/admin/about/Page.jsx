import React, { useEffect } from 'react'
import Main from '../../../components/AdminDashboard/about/Main'
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("admintoken") && nav("/")
  },[])
  
  return (
    <div>
      <Main/>
    </div>
  )
}

export default Page
