const mongoose = require('mongoose')

const UserLevelSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"UserAccount"},
    level:{type:Number,required:true},
    bonusPercentage:{type:Number,required:true},
    bonusAmount:{type:Number,required:true}
},{timestamps:true})

const UserLevel = mongoose.model("UserLevel",UserLevelSchema,"UserLevel")

module.exports = UserLevel