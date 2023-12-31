const { getAllTransaction, getByUser, getTop10Transaction } = require('../../services/User/TransactionService');

const router = require('express').Router();

router.get("/user/transaction",getAllTransaction)
router.get("/user/transaction/:userId",getByUser)
router.get("/user/transaction/top/10",getTop10Transaction)




module.exports= router