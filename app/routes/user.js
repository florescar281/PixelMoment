const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

path ='user';

router.get(
    `/${path}`,
    controller.getData
);

module.exports = router;