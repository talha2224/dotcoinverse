const { UserLevelModel } = require("../../models");
const { ErrorHandler, asyncErrorHandler, } = require("../../middlewares/Error/Error");

const getUserLevel = asyncErrorHandler(async(req,res)=>{
    const getLevel = await UserLevelModel.find({userId:req.params.id}).populate("userId").sort({createdAt:-1})
    if(getLevel.length>0){
        res.status(200).json(getLevel)
    }
    else{
        throw new ErrorHandler("No Level Found",404)
    }
})

module.exports = {getUserLevel}