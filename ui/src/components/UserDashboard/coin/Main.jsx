import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Table from './Table'
import Dashboard from '../DashboardLayout'
const Main = () => {

    const [data, setdata] = useState('')
    const [showLeftSideBar, setshowLeftSideBar] = useState(false)
    useEffect(()=>{
      axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
      .then((res)=>{setdata(res.data)})
      .catch((e)=>console.log(e))
    },[])
    // &order=market_cap_desc&per_page=100&page=1&sparkline=false


  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Table data={data} title={"Coins Update"}  setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default Main
