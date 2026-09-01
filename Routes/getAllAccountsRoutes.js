const express = require('express');
const router = express.Router();

const fetchAccounts = require('../Controllers/getAllAccountController');


router.post("/fetchAccounts", fetchAccounts);

module.exports = router;