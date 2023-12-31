const mongoose = require('mongoose')


const AccountSchema = mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,default:null},
    password:{type:String,required:true},
    image:{type:String,default:null},
    otp:{type:String,default:null},
    validTill:{type:Date,default:null},
    otpVerified:{type:Boolean,default:false},  
},{timestamps:true})



const AdminAccount = mongoose.model('AdminAccount',AccountSchema,'AdminAccount')


module.exports = AdminAccount