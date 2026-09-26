const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    reference: {
        type: String,
        required: true,
        unique: true
    },

    senderAccount: {
        type: String,
        required: true
    },

    receiverAccount: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    receivedAt: {
        type: Date,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);