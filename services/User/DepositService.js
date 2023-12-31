const { DepositModel, TransactionModel, UserCreditModel } = require("../../models");
const { ErrorHandler, asyncErrorHandler, } = require("../../middlewares/Error/Error");
const { uploadSingleFile } = require("../../configurations/firebaseConfig");


const depositAmount = asyncErrorHandler(async (req, res) => {
    let { amount, depositBy } = req.body
    let image = req.file
    if (amount < 10) throw new ErrorHandler("Minimum deposit amount is 10$", 400)
    else {
        const imageUrl = await uploadSingleFile(image)
        const remainingAmount = amount - (5 / 100) * amount;
        let amountDeposit = await DepositModel.create({ amount:remainingAmount, depositBy, depositDate: Date.now(),image:imageUrl})
        await TransactionModel.create({depositId:amountDeposit._id,userId:depositBy})
        res.status(200).json({ msg: "Deposit Has Been Send For Admin Approval" })
    }
})

const getAllDepositAmount = asyncErrorHandler(async (req, res) => {
    const FindAll = await DepositModel.find({}).populate("depositBy").sort({createdAt:-1})
    if (!FindAll.length > 0) {throw new ErrorHandler("No Data Found", 404)}
    else {
        res.status(200).json(FindAll)
    }


})


const getByUser = asyncErrorHandler(async (req, res) => {
    let { depositBy } = req.params
    const FindByUser = await DepositModel.find({ depositBy: depositBy }).populate("depositBy").sort({createdAt:-1})
    if (!FindByUser.length > 0) throw new ErrorHandler("No Data Found", 404)
    else {
        res.status(200).json(FindByUser)
    }
})

const getSingle = asyncErrorHandler(async (req, res) => {
    const FindSingle = await DepositModel.findById(req.params.id).populate("depositBy")
    if (!FindSingle) throw new ErrorHandler("No Data Found", 404)
    else {
        res.status(200).json(FindSingle)
    }
})

const updateSingle = asyncErrorHandler(async (req, res) => {
    let { approved } = req.body
    let { id } = req.params
    let findDeposit = await DepositModel.findById(id)
    if(approved===true){
        let updateDepositAmount = await DepositModel.findByIdAndUpdate(id, { $set: { approved: approved } }, { new: true })
        let currentAmount = await UserCreditModel.findOne({ userId: findDeposit.depositBy })
        await UserCreditModel.findOneAndUpdate({ userId: findDeposit.depositBy }, { $set: { amount: currentAmount.amount + findDeposit.amount } }, { new: true })
        res.status(200).json(updateDepositAmount)
    }
    else{
        await DepositModel.findByIdAndUpdate(id, { $set: { approved: approved,decline:true } }, { new: true })
        res.status(200).json({msg:"DECLINE"})
    }

})

const deleteDeposit = asyncErrorHandler(async (req, res) => {
    let { id } = req.params
    let deleteDepositAmount = DepositModel.findByIdAndDelete(id)
    if (!deleteDepositAmount) throw new ErrorHandler("Invalid Id", 404)
    else { res.status(200).json({ msg: "Deleted" }) }
})


module.exports = { depositAmount, getAllDepositAmount, getByUser, getSingle, updateSingle, deleteDeposit }