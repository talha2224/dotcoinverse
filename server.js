const express = require('express')
require('dotenv').config()
const cors = require('cors')
const databaseConnection = require('./configurations/databaseConfig')
const AllRoutes = require('./routes')
const { ErrorMiddleware, ErrorHandler } = require('./middlewares/Error/Error')

// BASIC SETP 
const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))
const port = process.env.PORT || 5001
const path = require('path')
// DATABASE CONNECTION 
databaseConnection()

// ALL ROUTES
app.use(AllRoutes)

// HOSTED ROUTE
app.use(express.static(path.join(__dirname,"./ui/dist")))
app.get("*",function(_,res){
  res.sendFile(path.join(__dirname,"./ui/dist/index.html")),
  function (err){
    console.log(err)
  }
})
// CUSTOM ERROR MIDDLEWARE 
app.use(ErrorMiddleware)
// app.use('*',()=>{throw new ErrorHandler("Invalid Api Call",404)})

// PORT LISTNING 
app.listen(port,()=>{
    console.log(`server is running on Port ${port}`)
})
