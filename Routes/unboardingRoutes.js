const express = require('express');
const router = express.Router();

const customerUnboard = require('../Controllers/unboardingController');


router.post("/unboard", customerUnboard);

module.exports = router;