const mongoose = require('mongoose');


const depositHistorySchema = mongoose.Schema({
    amount:{type:Number,required:true},
    depositBy:{type:mongoose.Schema.Types.ObjectId,ref:"UserAccount"},
    depositDate:{type:Date,required:true},
    approved:{type:Boolean,default:false},
    image:{type:String},
    decline:{type:Boolean,default:false}
},{timestamps:true})

const DepositHistory = mongoose.model("DepositHistory",depositHistorySchema,"DepositHistory")

module.exports = DepositHistory