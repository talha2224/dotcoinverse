const AllRoutes = require('express').Router()
const UserAccountRoute = require('./User/AccountRoute')
const DepositHistoryRoute = require('./User/DepositRoute')
const WithDrawHistoryRoute = require('./User/WithdrawRoute')
const TransactionHistoryRoute = require('./User/TransactionRoute')
const UserCreditRoute = require('./User/CreditRoute')
const UserLevelRoute = require('./User/LevelRoute')
const AdminAccountRoute = require('./Admin/AccountRoute')

AllRoutes.use("/api/v1",UserAccountRoute)
AllRoutes.use("/api/v1",DepositHistoryRoute)
AllRoutes.use("/api/v1",WithDrawHistoryRoute)
AllRoutes.use("/api/v1",TransactionHistoryRoute)
AllRoutes.use("/api/v1",UserCreditRoute)
AllRoutes.use("/api/v1",AdminAccountRoute)
AllRoutes.use("/api/v1",UserLevelRoute)


module.exports = AllRoutes


