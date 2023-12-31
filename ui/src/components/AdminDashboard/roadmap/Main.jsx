import React, { useState } from 'react'
import Dashboard from '../DashboardLayout'
import Roadmap from './Roadmap'

const Main = () => {
    const [showLeftSideBar, setshowLeftSideBar] = useState(false)

  return (
    <div className='h-screen'>
      <Dashboard setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar}component={<Roadmap setshowLeftSideBar={setshowLeftSideBar} showLeftSideBar={showLeftSideBar}/>}/>
    </div>
  )
}

export default Main
