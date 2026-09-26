const express = require('express');
const router = express.Router();

const webhookHandler =
    require('../Controllers/webhookController');

const registerWebhook =
    require('../Controllers/webhookRegisterController');

router.post('/register', registerWebhook);

router.post('/transactions', webhookHandler);

module.exports = router;