const {AdminAccountModel } = require("../../models");
const { ErrorHandler, asyncErrorHandler, } = require("../../middlewares/Error/Error");
const { SendEmail } = require('../../configurations/nodemailerConfig');
const { HashPassword, MatchPassword } = require('../../utils/bcrypt')
const { generateOtp } = require("../../utils/randomkey");
const { generateToken } = require("../../utils/jwt");
const { uploadSingleFile } = require("../../configurations/firebaseConfig");


const RegisterAdmin = asyncErrorHandler(async (req, res) => {
    let { firstname, lastname, email, password } = req.body;
    let AdminExits = await AdminAccountModel.find({});
    if (AdminExits.length>0){
        throw new ErrorHandler("Admin Already Exits", 403)
    }
    else {
        let securePassword = await HashPassword(password); // FOR SECURING PASSWORD
        let AdminAccount = await AdminAccountModel.create({ firstname, lastname, email, password: securePassword });
        if(AdminAccount){
            let token = await generateToken({...AdminAccount})
            res.status(200).json({ msg:token })
        }
    }
});

const VerifyOtp = asyncErrorHandler(async (req, res) => {
    let { email, otp } = req.body
    let FindAdmin = await AdminAccountModel.findOne({ email, email })
    if (!FindAdmin) throw new ErrorHandler("Invalid Email", 404)

    else {
        let otpMatched = FindAdmin.otp === otp
        if (!otpMatched) throw new ErrorHandler("Invalid Otp", 401)
        else {
            let otpExpired = FindAdmin.validTill > Date.now();
            if (!otpExpired) {
                await AdminAccountModel.findOneAndUpdate({ email: email }, { $set: { otp: null, validTill: null } }, { new: true })
                throw new ErrorHandler("Otp Time Out", 410)
            }
            await AdminAccountModel.findOneAndUpdate({ email: email }, { $set: { otp: null, validTill: null, otpVerified: true } }, { new: true })
            
            res.status(200).json({msg: "Otp Verified" })
        }
    }
});

const RegenerateOtp = asyncErrorHandler(async (req, res) => {
    let { email } = req.body;
    let UserExits = await UserAccountModel.findOne({ email: email });
    if (!UserExits) { throw new ErrorHandler("Invalid Email", 404) }
    else {
        let otp = generateOtp() // FOR GENERATING FOUR DIGIT OTP
        let otpExpiredIn = new Date(new Date().setMinutes(new Date().getMinutes() + 5)); // OTP EXPIRED TIME
        SendEmail(email, "Dot Coinverse Account Verification", "Verify Your Account", `Your otp is ${otp}`) // FOR SENDING EMAIL
        await UserAccountModel.findOneAndUpdate({ email: email }, { $set: { otp: otp, validTill: otpExpiredIn } }, { new: true })
        res.status(200).json({ msg: "Otp Has Sent To Your Gmail", email: email })
    }

});

const LoginAdmin= asyncErrorHandler(async (req, res) => {
    let { email, password } = req.body
    let FindAdmin = await AdminAccountModel.findOne({ email, email })
    if (!FindAdmin) throw new ErrorHandler("Invalid Email", 404)
    else {
        let passwordMatched = await MatchPassword(password, FindAdmin.password)
        if (!passwordMatched) throw new ErrorHandler("Invalid Credentials", 401)
        else {
            let { password, otp, validTill, createdAt, updatedAt, ...info } = FindAdmin._doc
            let token = await generateToken(info) // JWT TOKEN GENERATOR 
            res.status(200).json({ token: token, msg: "Login Sucessfull" })
        }
    }
});


const GetAdmin= asyncErrorHandler(async (req, res) => {
    let getAdmin = await AdminAccountModel.findById(req.params.id)
    if (!getAdmin) throw new ErrorHandler("No Admin Found", 404)
    else { res.status(200).json(getAdmin) }
});


const UpdateProfile = asyncErrorHandler(async(req,res)=>{
    let { firstname, lastname, email } = req.body;
    let id = req.params.id
    let image = req.file
    
    if (image){
        let imageUrl = await uploadSingleFile(image)
        let updateAdmin = await AdminAccountModel.findByIdAndUpdate(id,{$set:{firstname,lastname,email,image:imageUrl}},{new:true})
        if(updateAdmin){
            res.status(200).json({msg:"ADMIN PROFILE UPDATED"})
        }
    }
    else{
        let updateAdmin = await AdminAccountModel.findByIdAndUpdate(id,{$set:{firstname,lastname,email}},{new:true})
        if(updateAdmin){
            res.status(200).json({msg:"ADMIN PROFILE UPDATED"})
        }
    }

})

const ChangePassword = asyncErrorHandler(async(req,res)=>{
    let {oldpassword,newpassword } = req.body;
    let id = req.params.id
    let FindAdmin = await AdminAccountModel.findById(id)
    let comparedPassword = await MatchPassword(oldpassword, FindAdmin.password)
    if(!comparedPassword){throw new ErrorHandler("Invalid Credentials", 401)}
    else{
        let securePassword = await HashPassword(newpassword)
        let updateAdminPassword = await AdminAccountModel.findByIdAndUpdate(id,{$set:{password:securePassword}},{new:true})
        if(updateAdminPassword) res.status(200).json({msg:"PASSWORD CHANGED"})
    }
})

const ResetPassword = asyncErrorHandler(async(req,res)=>{
    let FindAdmin = await AdminAccountModel.findOne({email:req.body.email})
    if(!FindAdmin.otpVerified){
        throw new ErrorHandler("OTP NOT VERIFIED",404)  
    }
    else{
        let securePassword = await HashPassword(req.body.password)
        let changePassword = await AdminAccountModel.findOneAndUpdate({email:req.body.email,password:securePassword})
        res.status(200).json({msg:"Password Changed"})
    }
})


module.exports = { RegisterAdmin, VerifyOtp, RegenerateOtp, LoginAdmin, GetAdmin,UpdateProfile,ChangePassword,ResetPassword};