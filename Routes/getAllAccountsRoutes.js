const express = require('express');
const router = express.Router();

const fetchAccounts = require('../Controllers/getAllAccountController');


router.post("/fetch_accounts", fetchAccounts);

module.exports = router;