const User = require('../Models/Auth');
const confirmAccountBalance = require('../Services/accountBalance');

const accountBalance = async (req, res) => {
    try {

        const { accountNumber } = req.body;
      
        const customer = await User.findOne({accountNumber});
        
       
        if(!customer)
        {
            return res.status(400).json({message : "Customer not found"})
        }

        const accountInfo = await confirmAccountBalance(accountNumber);

        return res.status(200).json({
            message: "Account Balance",
            data: accountInfo
        });

    } catch (error) {
        console.log("balance error", error);

        return res.status(500).json({
            message: "Error checking account balance",
            error:error.message
        });
    }
};

module.exports = accountBalance;