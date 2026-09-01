const User = require('../Models/Auth');
const transferFund = require('../Services/fundTransfer');
const confirmAccountBalance = require('../Services/accountBalance');

const fundTransfer = async (req, res) => {
    try {
        //Get the from, to and amount from the request body
        const { from, to, amount } = req.body;

        //Confirm the from account
        const customer = await User.findOne({accountNumber : from});
        
        if(!customer) {
            return res.status(400).json({ message : "Sender account not found"});
        }
        const senderAccount = customer.accountNumber;
        if(!senderAccount)
        {
            return res.status(400).json({ message : "Sender account not available"});
        }
        
        //Confirm Sender Balance
        const balanceResult = await confirmAccountBalance(senderAccount);
        const balance = balanceResult.balance;

        if(balance < amount) {
            return res.status(400).json({
                message : "Your account balance is too low"
            })
        }
        
        const transfer = await transferFund(senderAccount, to, amount);

        return res.status(200).json({
            message: "Account confirmed successfully",
            data: transfer
        });

        await transfer.save();

    } catch (error) {
        console.log("Transfer error", error);

        return res.status(500).json({
            message: "Error tranfering funds",
            error:error.message
        });
    }
};

module.exports = fundTransfer;