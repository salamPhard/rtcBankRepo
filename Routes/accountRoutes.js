const express = require('express');
const router = express.Router();

const accountCreation = require('../Controllers/accountController');


router.post("/createAccount", accountCreation);

module.exports = router;