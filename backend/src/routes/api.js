const express = require('express');
const router = express.Router();
const sentimentController = require('../controllers/sentimentController');

router.get('/fear-greed', sentimentController.getFearGreedIndex);

module.exports = router;
