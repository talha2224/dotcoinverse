const {RegisterUser,VerifyOtp,RegenerateOtp,LoginUser,GetAllUser,GetSingleUser,GetBlockUser, UpdateProfile, ChangePassword, BlockUser } = require('../../services/User/AccountService');
const router = require('express').Router();
const multipleupload = require('../../configurations/multerConfig')

router.post("/user/register",RegisterUser)
router.post("/user/verify/otp",VerifyOtp)
router.post("/user/regenerate/otp",RegenerateOtp)
router.post("/user/login",LoginUser)
router.get("/user",GetAllUser)
router.get("/user/:id",GetSingleUser)
router.get("/user/blocked",GetBlockUser)

router.put("/user/block/:id",BlockUser)
router.put("/user/update/:id",multipleupload.single('image'),UpdateProfile)
router.put("/user/update/password/:id",ChangePassword)

// user: "talhahaider064@gmail.com",
// pass: "dubqiqclgicczovn",


module.exports= router