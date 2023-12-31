import React, { useState } from 'react'
import Dashboard from '../DashboardLayout'
import Support from './Support'

const Main = () => {
  const [showLeftSideBar, setshowLeftSideBar] = useState(false)

  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar}component={<Support setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar}/>}/>
    </div>
  )
}

export default Main

