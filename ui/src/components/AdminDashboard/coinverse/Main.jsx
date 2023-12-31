import React, { useState } from 'react'
import Dashboard from '../DashboardLayout'
import Coinverse from './Coinverse'

const Main = () => {
  const [showLeftSideBar, setshowLeftSideBar] = useState(false)

  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<Coinverse setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default Main
