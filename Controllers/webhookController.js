const Transaction = require('../Models/Transaction');

const webhookHandler = async (req, res) => {
    try {
        const event = req.headers['x-webhook-event'];

        if (event !== "INWARD_TRANSACTION") {
            return res.status(400).json({
                message: "Invalid event"
            });
        }

        const transaction = req.body.data;

        const newTransaction = new Transaction({
            reference: transaction.reference,
            senderAccount: transaction.senderAccount,
            receiverAccount: transaction.receiverAccount,
            amount: transaction.amount,
            status: transaction.status,
            receivedAt: transaction.receivedAt
        });

        await newTransaction.save();

        return res.status(200).json({
            message: "Webhook received and transaction saved"
        });

    } catch (error) {
    console.log("Webhook error:", error);

    if (error.code === 11000) {
        return res.status(200).json({
            message: "Transaction already processed"
        });
    }


       return res.status(500).json({
        message: "Webhook processing failed",
        error: error.message
    });
    }
};

module.exports = webhookHandler;