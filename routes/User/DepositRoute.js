const { depositAmount, getAllDepositAmount, getByUser, getSingle, updateSingle, deleteDeposit } = require('../../services/User/DepositService');
const router = require('express').Router();
const multipleupload = require('../../configurations/multerConfig')



router.post("/user/deposit",multipleupload.single('image'),depositAmount)
router.get("/user/deposit/get/all",getAllDepositAmount)
router.get("/user/single/deposit/:depositBy",getByUser)
router.get("/user/deposit/:id",getSingle)
router.put("/user/deposit/:id",updateSingle)
router.delete("/user/deposit/:id",deleteDeposit)

module.exports= router