const { UserAccountModel, UserCreditModel, UserLevelModel } = require("../../models");
const { ErrorHandler, asyncErrorHandler, } = require("../../middlewares/Error/Error");
const { SendEmail } = require('../../configurations/nodemailerConfig');
const { HashPassword, MatchPassword } = require('../../utils/bcrypt')
const { randomKey, generateOtp } = require("../../utils/randomkey");
const { generateToken } = require("../../utils/jwt");
const { uploadSingleFile } = require("../../configurations/firebaseConfig");
const { getUserLevel,getBonusPercentage} = require("../../utils/bonusAmount");



const RegisterUser = asyncErrorHandler(async (req, res) => {
    let { firstname, lastname, email, phone, refferedBy, password } = req.body;
    let UserExits = await UserAccountModel.findOne({ email: email });
    if (UserExits) throw new ErrorHandler("User Already Exits", 403);
    else {
        let securePassword = await HashPassword(password); // FOR SECURING PASSWORD
        let secretkey = randomKey() // FOR GENERATING UNIQUE REFFERAL ID
        let otp = generateOtp() // FOR GENERATING FOUR DIGIT OTP
        let otpExpiredIn = new Date(new Date().setMinutes(new Date().getMinutes() + 5));
        SendEmail(email, "Dot Coinverse Account Verification", "Verify Your Account", `Your otp is ${otp}`) // FOR SENDING EMAIL
        await UserAccountModel.create({ firstname, lastname, email, phone, refferedBy, password: securePassword, otp: otp, secretkey, validTill: otpExpiredIn });
        res.status(200).json({ msg: "Account Created Verify Your Otp", email: email })

    }
});


const VerifyOtp = asyncErrorHandler(async (req, res) => {
    let { email, otp } = req.body
    let FindUser = await UserAccountModel.findOne({ email, email })
    let FindRefferal = await UserAccountModel.findOne({ secretkey: FindUser.refferedBy })
    if (!FindUser){ 
        throw new ErrorHandler("Invalid Email", 404)
    }
    else {
        let otpMatched = FindUser.otp === otp
        if (!otpMatched) throw new ErrorHandler("Invalid Otp", 401)
        else {
            let otpExpired = FindUser.validTill > Date.now();
            if (!otpExpired) {
                await UserAccountModel.findOneAndUpdate({ email: email }, { $set: { otp: null, validTill: null } }, { new: true })
                throw new ErrorHandler("Otp Time Out", 410)
            }
            let VerifyAccount = await UserAccountModel.findOneAndUpdate({ email: email }, { $set: { otp: null, validTill: null, accountVerified: true } }, { new: true })
            let registrationbonus = await UserCreditModel.create({ userId: FindUser._id, amount: 5 })
            if(FindRefferal){
                let CurretRefferalCredit = await UserCreditModel.findOne({userId:FindRefferal._id})
                let updatedLevel = FindRefferal && await UserAccountModel.findByIdAndUpdate(FindRefferal._id, { $set: { level: FindRefferal.level + 1, totalReferal: FindRefferal.totalReferal + 1 } }, { new: true })
                let userBonusAmount = getUserLevel(CurretRefferalCredit.amount,updatedLevel.level)
                await UserCreditModel.findByIdAndUpdate(CurretRefferalCredit._id, { $set: { amount: CurretRefferalCredit.amount + userBonusAmount} }, { new: true })
                if(updatedLevel.level<=10){
                    await UserLevelModel.create({userId:FindRefferal._id,level:updatedLevel.level,bonusAmount:userBonusAmount,bonusPercentage:getBonusPercentage(updatedLevel.level)})
                    let { password, otp, validTill, createdAt, updatedAt, ...info } = VerifyAccount._doc
                    let token = await generateToken(info) // JWT TOKEN GENERATOR 
                    res.status(200).json({ token: token, msg: "Account Verified" })
                }
                else{
                    let { password, otp, validTill, createdAt, updatedAt, ...info } = VerifyAccount._doc
                    let token = await generateToken(info) // JWT TOKEN GENERATOR 
                    res.status(200).json({ token: token, msg: "Account Verified" })
                }
            }
            else{
                let { password, otp, validTill, createdAt, updatedAt, ...info } = VerifyAccount._doc
                let token = await generateToken(info) // JWT TOKEN GENERATOR 
                res.status(200).json({ token: token, msg: "Account Verified" })
            }
        }
    }
});



const RegenerateOtp = asyncErrorHandler(async (req, res) => {
    let { email } = req.body;
    console.log(email)
    let UserExits = await UserAccountModel.findOne({ email: email });
    if (!UserExits) { throw new ErrorHandler("Invalid Email", 404) }
    else {
        let otp = generateOtp() // FOR GENERATING FOUR DIGIT OTP
        let otpExpiredIn = new Date(new Date().setMinutes(new Date().getMinutes() + 5)); // OTP EXPIRED TIME
        await UserAccountModel.findOneAndUpdate({ email: email }, { $set: { otp: otp, validTill: otpExpiredIn } }, { new: true })
        SendEmail(email, "Dot Coinverse Account Verification", "Verify Your Account", `Your otp is ${otp}`) // FOR SENDING EMAIL
        res.status(200).json({ msg: "Otp Has Sent To Your Gmail", email: email })
    }

});

const LoginUser = asyncErrorHandler(async (req, res) => {
    let { email, password } = req.body
    let FindUser = await UserAccountModel.findOne({ email, email })
    if (!FindUser) throw new ErrorHandler("Invalid Email", 404)
    else if (FindUser.blocked) {
        throw new ErrorHandler("Your Account Has Been Blocked", 423)
    }
    else if (FindUser.accountVerified === false) {
        let otp = generateOtp() // FOR GENERATING FOUR DIGIT OTP
        let otpExpiredIn = new Date(new Date().setMinutes(new Date().getMinutes() + 5)); // OTP EXPIRED TIME
        SendEmail(email, "Dot Coinverse Account Verification", "Verify Your Account", `Your otp is ${otp}`) // FOR SENDING EMAIL
        await UserAccountModel.findOneAndUpdate({ email: email }, { $set: { otp: otp, validTill: otpExpiredIn } }, { new: true })
        throw new ErrorHandler("Verify Your Account", 403)

    }
    else {
        let passwordMatched = await MatchPassword(password, FindUser.password)
        if (!passwordMatched) throw new ErrorHandler("Invalid Credentials", 401)
        else {
            let { password, otp, validTill, createdAt, updatedAt, ...info } = FindUser._doc
            let token = await generateToken(info) // JWT TOKEN GENERATOR 
            res.status(200).json({ token: token, msg: "Login Sucessfull" })
        }
    }
});

const GetAllUser = asyncErrorHandler(async (req, res) => {
    let AllUser = await UserAccountModel.find({})
    if (!AllUser.length > 0) throw new ErrorHandler("No User Found", 404)
    else { res.status(200).json(AllUser) }
});

const GetSingleUser = asyncErrorHandler(async (req, res) => {
    let SingleUser = await UserAccountModel.findById(req.params.id)
    if (!SingleUser) throw new ErrorHandler("No User Found", 404)
    else { res.status(200).json(SingleUser) }
});

const GetBlockUser = asyncErrorHandler(async (req, res) => {
    let BlockedUser = await UserAccountModel.find({ blocked: true })
    if (!BlockedUser.length > 0) throw new ErrorHandler("No Blocked User", 404)
    else { res.status(200).json(BlockedUser) }
});


const UpdateProfile = asyncErrorHandler(async (req, res) => {
    let { firstname, lastname, email } = req.body;
    let id = req.params.id
    let image = req.file

    if (image) {
        let imageUrl = await uploadSingleFile(image)
        console.log(imageUrl, 'url')
        let updateUser = await UserAccountModel.findByIdAndUpdate(id, { $set: { firstname, lastname, email, image: imageUrl } }, { new: true })
        if (updateUser) {
            res.status(200).json({ msg: "USER PROFILE UPDATED" })
        }
    }
    else {
        console.log('not present')
        let updateUser = await UserAccountModel.findByIdAndUpdate(id, { $set: { firstname, lastname, email } }, { new: true })
        if (updateUser) {
            res.status(200).json({ msg: "USER PROFILE UPDATED" })
        }
    }

})

const ChangePassword = asyncErrorHandler(async (req, res) => {
    let { oldpassword, newpassword } = req.body;
    let id = req.params.id
    let FindUser = await UserAccountModel.findById(id)
    let comparedPassword = await MatchPassword(oldpassword, FindUser.password)
    if (!comparedPassword) { throw new ErrorHandler("Invalid Credentials", 401) }
    else {
        let securePassword = await HashPassword(newpassword)
        let updateUserPassword = await UserAccountModel.findByIdAndUpdate(id, { $set: { password: securePassword } }, { new: true })
        if (updateUserPassword) res.status(200).json({ msg: "PASSWORD CHANGED" })
    }
})

const BlockUser = asyncErrorHandler(async (req, res) => {
    let { id } = req.params
    console.log(req.body.block)
    let User = await UserAccountModel.findById(id)
    let updatedUser = await UserAccountModel.findByIdAndUpdate(id, { $set: { blocked: !User?.blocked } }, { new: true })
    res.status(200).json({ msg: "Operation Sucessfull" })
})

module.exports = { RegisterUser, VerifyOtp, RegenerateOtp, LoginUser, GetAllUser, GetSingleUser, GetBlockUser, UpdateProfile, ChangePassword, BlockUser };
