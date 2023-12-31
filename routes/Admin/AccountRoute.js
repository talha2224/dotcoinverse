const router = require('express').Router()
const multipleupload = require('../../configurations/multerConfig')
const { RegisterAdmin, LoginAdmin, VerifyOtp, RegenerateOtp, GetAdmin, UpdateProfile, ChangePassword, ResetPassword } = require('../../services/Admin/AccountService')

router.post("/admin/register",RegisterAdmin)
router.post("/admin/login",LoginAdmin)
router.post("/admin/verify/otp",VerifyOtp)
router.post("/admin/regenerate/otp",RegenerateOtp)
router.get("/admin/:id",GetAdmin)
router.put("/admin/update/:id",multipleupload.single('image'),UpdateProfile)
router.put("/admin/update/password/:id",ChangePassword)
router.post("/admin/reset/password",ResetPassword)







module.exports = router