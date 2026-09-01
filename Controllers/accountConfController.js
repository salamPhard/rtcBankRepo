const User = require('../Models/Auth');
const confirmAccountInfo = require('../Services/accountConfirmation');

const confirmAccount = async (req, res) => {
    try {

        const { accountNumber } = req.body;
      
        const customer = await User.findOne({accountNumber});
        
       
        if(!customer)
        {
            return res.status(400).json({message : "Customer not found"})
        }

        const accountInfo = await confirmAccountInfo(accountNumber);

        return res.status(200).json({
            message: "Account confirmed successfully",
            data: accountInfo
        });

    } catch (error) {
        console.log("account confirmation error", error);

        return res.status(500).json({
            message: "Error confirming account",
            error:error.message
        });
    }
};

module.exports = confirmAccount;