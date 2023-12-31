const mongoose = require('mongoose');

const withDrawHistorySchema = mongoose.Schema({
    amount:{type:Number,required:true},
    deductAmount:{type:Number,required:true},
    withdrawBy:{type:mongoose.Schema.Types.ObjectId,ref:"UserAccount"},
    withdrawDate:{type:Date,required:true},
    accountNumber:{type:String,required:true},
    approved:{type:Boolean,default:false},
    decline:{type:Boolean,default:false}
})

const WithdrawHistory = mongoose.model("WithdrawHistory",withDrawHistorySchema,"WithdrawHistory")

module.exports = WithdrawHistory