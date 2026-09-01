const express = require('express');
const router = express.Router();

const accountBalance = require('../Controllers/accountBalanceController');


router.post("/accountbal", accountBalance);

module.exports = router;