const { TransactionModel } = require("../../models");
const {ErrorHandler,asyncErrorHandler,} = require("../../middlewares/Error/Error");


const getAllTransaction = asyncErrorHandler(async(req,res)=>{
    const FindAll = await TransactionModel.find({}).populate('withdrawId').populate('depositId').populate('userId')
    if (!FindAll.length>0)throw new ErrorHandler("No Data Found",404)
    else{
        res.status(200).json(FindAll)
    }
})

const getByUser = asyncErrorHandler(async(req,res)=>{
    const FindByUser = await TransactionModel.find({userId:req.params.userId}).populate('withdrawId').populate('depositId').populate('userId')
    if (!FindByUser.length>0)throw new ErrorHandler("No Data Found",404)
    else{
        res.status(200).json(FindByUser)
    }
})

const getTop10Transaction = asyncErrorHandler(async(req,res)=>{
    const FindTopTen = await TransactionModel.find({}).populate('withdrawId').populate('depositId').populate('userId').limit(10)
    if (!FindTopTen.length>0)throw new ErrorHandler("No Data Found",404)
    else{
        res.status(200).json(FindTopTen)
    }
})



module.exports = {getAllTransaction,getByUser,getTop10Transaction}