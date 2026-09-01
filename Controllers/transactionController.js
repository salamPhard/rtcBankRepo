const transactionRefService = require('../Services/transactionReference');

const transactionRef = async (req, res) => {
    try {

        const { ref } = req.body;
      
        if (!ref)
        {
            return res.status(400).json({ message : "You need to enter a transaction reference"});
        }

        const transaction = await transactionRefService(ref);
        
        return res.status(200).json({
            message: "Transaction found",
            data: transaction
        });

    } catch (error) {
        console.log("balance error", error);

        return res.status(500).json({
            message: "Transaction not found",
            error:error.message
        });
    }
};

module.exports = transactionRef;