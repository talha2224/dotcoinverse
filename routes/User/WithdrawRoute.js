const { withDrawAmount, getAllWithdrawAmount, getByUser, getSingle, updateSingle, deleteWithDraw } = require('../../services/User/WithdrawService');

const router = require('express').Router();

router.post("/user/withdraw",withDrawAmount)
router.get("/user/withdraw/get/all",getAllWithdrawAmount)
router.get("/user/single/withdraw/:withdrawBy",getByUser)
router.get("/user/withdraw/:id",getSingle)
router.put("/user/withdraw/:id",updateSingle)
router.delete("/user/withdraw/:id",deleteWithDraw)

module.exports= router