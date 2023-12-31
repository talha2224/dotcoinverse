import React, { useEffect, useState } from 'react'
import Dashboard from '../DashboardLayout'
import Table from './Table'
import { jwtDecodeFunction } from '../../../helpers/jwtDecode'
import axios from 'axios'

const Main = () => {
    const [showLeftSideBar, setshowLeftSideBar] = useState(false)
    const [accountId] = useState(jwtDecodeFunction()._id)
    const [data, setdata] = useState([])
    useEffect(()=>{
      axios.get(`/api/v1/user/level/${accountId}`)
      .then((res)=>{
        setdata(res.data)
      })
      .catch((e)=>{
        console.log(e)
      })
    },[])
  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Table data={data} setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default Main
