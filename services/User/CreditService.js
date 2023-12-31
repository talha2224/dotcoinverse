const { UserCreditModel } = require("../../models");
const { ErrorHandler, asyncErrorHandler, } = require("../../middlewares/Error/Error");

const getAllUserCredit = asyncErrorHandler(async (req, res) => {
    let AllCredit = await UserCreditModel.find({})
    if (AllCredit.length === 0) { throw new ErrorHandler("No Credit Found", 404) }
    else { res.status(200).json(AllCredit) }
})


const getByUser = asyncErrorHandler(async (req, res) => {
    let UserCredit = await UserCreditModel.find({ userId: req.params.userId })
    res.status(200).json(UserCredit)
})


const newReward = asyncErrorHandler(async (req, res) => {
    try {
        const { percentage } = req.body;

        // Validate percentage input (ensure it's a number between 0 and 100)
        if (isNaN(percentage) || percentage < 0 || percentage > 100) {
            return res.status(400).json({ error: "Invalid percentage value" });
        }

        // Fetch all user credits
        const allCredits = await UserCreditModel.find({});

        if (allCredits.length > 0) {
            // Calculate and update credits for each user based on the percentage
            const updatedCredits = allCredits.map(userCredit => {
                const updatedAmount = userCredit.amount + (userCredit.amount * (percentage / 100));
                return {
                    userId: userCredit.userId,
                    amount: updatedAmount
                };
            });

            // Update the user credits in the database
            await Promise.all(updatedCredits.map(async updatedCredit => {
                await UserCreditModel.updateOne(
                    { userId: updatedCredit.userId },
                    { $set: { amount: updatedCredit.amount } }
                );
            }));

            return res.status(200).json({ message: "Reward percentage applied successfully" });
        } else {
            return res.status(404).json({ error: "No user credits found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});




module.exports = { getAllUserCredit, getByUser,newReward}