const express = require('express');
const router = express.Router();

const accountConfirmation = require('../Controllers/accountConfController');


router.post("/confirmAccount", accountConfirmation);

module.exports = router;