const express = require('express');
const router = express.Router();

const transactionRef = require('../Controllers/transactionController');


router.post("/trans_ref", transactionRef);

module.exports = router;