const { WithDrawModel,TransactionModel,UserCreditModel } = require("../../models");
const {ErrorHandler,asyncErrorHandler,} = require("../../middlewares/Error/Error");


const withDrawAmount = asyncErrorHandler(async(req,res)=>{
    let {amount,withdrawBy,accountNumber} = req.body
    let currentAmount = await UserCreditModel.findOne({ userId:withdrawBy})
    if (amount<10)throw new ErrorHandler("Minimum withdraw amount is 10$",400)
    else if (currentAmount.amount<amount){
        throw new ErrorHandler("You Don't Have Enough Credit",403)
    }
    else{
        const remainingAmount = amount - (5 / 100) * amount;
        let withdrawData = await WithDrawModel.create({deductAmount:remainingAmount,amount:amount,withdrawBy,withdrawDate:Date.now(),accountNumber})
        await TransactionModel.create({withdrawId:withdrawData._id,userId:withdrawBy})
        res.status(200).json({msg:"Deposit Has Been Send For Admin Approval"})
    }
})

const getAllWithdrawAmount = asyncErrorHandler(async(req,res)=>{
    const FindAll = await WithDrawModel.find({}).populate("withdrawBy")
    if (!FindAll.length>0){throw new ErrorHandler("No Data Found",404)}
    else{
        res.status(200).json(FindAll)
    }
})

const getByUser = asyncErrorHandler(async(req,res)=>{
    const FindByUser = await WithDrawModel.find({withdrawBy:req.params.withdrawBy}).populate("withdrawBy")
    if (!FindByUser.length>0)throw new ErrorHandler("No Data Found",404)
    else{
        res.status(200).json(FindByUser)
    }
})

const getSingle = asyncErrorHandler(async(req,res)=>{
    const FindSingle= await WithDrawModel.findById(req.params.id).populate("withdrawBy")
    if (!FindSingle)throw new ErrorHandler("No Data Found",404)
    else{
        res.status(200).json(FindSingle)
    }
})

const updateSingle = asyncErrorHandler(async(req,res)=>{
    let {approved} = req.body
    let {id} = req.params
    let userId = await WithDrawModel.findById(id)
    if(approved){
        await  WithDrawModel.findByIdAndUpdate(id,{$set:{approved:approved}},{new:true})
        let currentAmount = await UserCreditModel.findOne({ userId:userId.withdrawBy })
        await UserCreditModel.findOneAndUpdate({ userId: userId.withdrawBy }, { $set: { amount: currentAmount.amount - userId.amount } }, { new: true })
        res.status(200).json({msg:"APPROVED"})

    }
    else{
        let updateDepositAmount = await WithDrawModel.findByIdAndUpdate(id,{$set:{approved:approved,decline:true}},{new:true})
        res.status(200).json(updateDepositAmount)
    }
})

const deleteWithDraw = asyncErrorHandler(async(req,res)=>{
    let {id} = req.params
    let deleteWithDrawAmount = WithDrawModel.findByIdAndDelete(id)
    if (!deleteWithDrawAmount) throw new ErrorHandler("Invalid Id",404)
    else {res.status(200).json({msg:"Deleted"})}
})


module.exports = {withDrawAmount,getAllWithdrawAmount,getByUser,getSingle,updateSingle,deleteWithDraw}