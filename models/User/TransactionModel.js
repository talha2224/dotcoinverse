const mongoose = require('mongoose');

const TransactionHistorySchema = mongoose.Schema({
    withdrawId:{type:mongoose.Schema.Types.ObjectId,ref:"WithdrawHistory",default:null},
    depositId:{type:mongoose.Schema.Types.ObjectId,ref:"DepositHistory",default:null},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"UserAccount",required:true}
})

const TransactionHistory = mongoose.model("TransactionHistory",TransactionHistorySchema,"TransactionHistory")

module.exports = TransactionHistory