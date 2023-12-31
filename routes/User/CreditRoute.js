const { getAllUserCredit, getByUser, newReward } = require('../../services/User/CreditService');

const router = require('express').Router();

router.get("/credit/user/all",getAllUserCredit)
router.get("/user/credit/:userId",getByUser)
router.post("/user/credit/reward",newReward)

module.exports = router