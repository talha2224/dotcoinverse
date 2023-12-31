import React, { useEffect } from 'react'
import Main from '../../../components/UserDashboard/roadmap/Main'
import { useNavigate } from 'react-router-dom'

const Page = () => {

  const nav = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("token") && nav("/")
  },[])

  return (
    <div>
      <Main/>
    </div>
  )
}

export default Page
