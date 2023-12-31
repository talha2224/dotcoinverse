import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage/home/Page'
import ProjectsPage from '../pages/landingPage/projects/Page'
import TeamPage from '../pages/landingPage/team/Page'
// ACCOUNT 
import LoginPage from '../pages/account/login/Page'
import RegisterPage from '../pages/account/register/Page'
import OtpPage from '../pages/account/otp/Page'

// USER DASHBOARD 
import TransactionPage from '../pages/user/TransactionHistory/Page'
import DepositPage from '../pages/user/depositHistory/Page'
import WithDrawPage from '../pages/user/WithdrawHistory/Page'
import AboutPage from '../pages/user/about/Page'
import CoinversePage from '../pages/user/coinverse/Page'
import ProfilePage from '../pages/user/profile/Page'
import EarningPage from '../pages/user/earning/Page'
import RoadmapPage from '../pages/user/roadmap/Page'
import SupportPage from '../pages/user/support/Page'
import CoinPageUser from '../pages/user/coin/Page'
import LevelPageUser from '../pages/user/Level/Page'
// ADMIN DASHBOARD 
import AdminLoginPage from '../pages/admin/account/LoginPage'
import AdminRegisterPage from '../pages/admin/account/RegisterPage'

import DepositPageAdmin from '../pages/admin/depositHistory/Page'
import WithDrawPageAdmin from '../pages/admin/WithdrawHistory/Page'
import AboutPageAdmin from '../pages/admin/about/Page'
import CoinversePageAdmin from '../pages/admin/coinverse/Page'
import ProfilePageAdmin from '../pages/admin/profile/Page'
import AllUserAdminPage from '../pages/admin/User/Page'
import RoadmapPageAdmin from '../pages/admin/roadmap/Page'
import CoinPageAdmin from '../pages/admin/coin/Page'

const AllRoutes = () => {
  return (
    <Routes>

      {/* LANDING PAGE  */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/team' element={<TeamPage />} />

      {/* ACCOUNTS PAGE  */}
      <Route path='/account/login' element={<LoginPage />} />
      <Route path='/account/register' element={<RegisterPage />} />
      <Route path='/account/otp' element={<OtpPage />} />

      {/* USER DASHBOARD ROUTE  */}
      <Route path='/user/history' element={<TransactionPage />} />
      <Route path='/user/history/deposit' element={<DepositPage />} />
      <Route path='/user/history/withdraw' element={<WithDrawPage />} />

      <Route path='/user/about' element={<AboutPage />} />
      <Route path='/user/coinverse' element={<CoinversePage />} />
      <Route path='/user/profile' element={<ProfilePage />} />
      <Route path='/user/earning' element={<EarningPage />} />
      <Route path='/user/roadmap' element={<RoadmapPage />} />
      <Route path='/user/support' element={<SupportPage />} />
      <Route path='/user/coin' element={<CoinPageUser />} />
      <Route path='/user/level/history' element={<LevelPageUser />} />


      {/* Admin DASHBOARD ROUTE  */}
      <Route path='/admin/account/login' element={<AdminLoginPage />} />
      <Route path='/admin/account/register' element={<AdminRegisterPage />} />

      <Route path='/admin/history/deposit' element={<DepositPageAdmin />} />
      <Route path='/admin/history/withdraw' element={<WithDrawPageAdmin />} />
      <Route path='/admin/about' element={<AboutPageAdmin />} />
      <Route path='/admin/coinverse' element={<CoinversePageAdmin />} />
      <Route path='/admin/profile' element={<ProfilePageAdmin />} />
      <Route path='/admin/user' element={<AllUserAdminPage />} />
      <Route path='/admin/roadmap' element={<RoadmapPageAdmin />} />
      <Route path='/admin/coin' element={<CoinPageAdmin />} />

    </Routes>
  )
}

export default AllRoutes
