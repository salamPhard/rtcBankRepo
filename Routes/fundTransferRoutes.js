const express = require('express');
const router = express.Router();

const fundTransfer = require('../Controllers/fundTransferController');


router.post("/transfer_fund", fundTransfer);

module.exports = router;