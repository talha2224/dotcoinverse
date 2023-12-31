const mongoose = require('mongoose')


const AccountSchema = mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,default:null},
    password:{type:String,required:true},
    image:{type:String,default:null},
    secretkey:{type:String,required:true},
    refferedBy:{type:String,default:null},
    totalReferal:{type:Number,default:0},
    level:{type:Number,default:0},
    otp:{type:String,default:null},
    validTill:{type:Date,default:null},
    accountVerified:{type:Boolean,default:false},
    otpVerified:{type:Boolean,default:false},
    blocked:{type:Boolean,default:false}
    
},{timestamps:true})



const UserAccount = mongoose.model('UserAccount',AccountSchema,'UserAccount')


module.exports = UserAccount