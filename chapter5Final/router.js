const express = require('express');
const router = express.Router();
const path = require('path');

const mainController = require('./controller/main-controller');

router.get('/', mainController.getHomePage);

router.get('/playNow', mainController.playNow);
router.get('/product', mainController.product);

router.post('/login', mainController.login);

module.exports = router;