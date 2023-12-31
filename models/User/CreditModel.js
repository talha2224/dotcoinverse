const mongoose = require('mongoose')

const UserCreditSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"UserAccount"},
    amount:{type:Number,default:0}
})


const UserCredit = mongoose.model("UserCredit",UserCreditSchema,"UserCredit")

module.exports = UserCredit