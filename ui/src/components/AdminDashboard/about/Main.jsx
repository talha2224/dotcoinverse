import React, { useState } from 'react'
import Dashboard from '../DashboardLayout'
import About from './About'

const Main = () => {
  const [showLeftSideBar, setshowLeftSideBar] = useState(false)

  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} component={<About setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar} />} />
    </div>
  )
}

export default Main
