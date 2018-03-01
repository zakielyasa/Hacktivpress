var express = require('express');
var router = express.Router();
var Controller = require('../controllers/user')

router.post('/register', Controller.register)
router.post('/login', Controller.login)


module.exports = router;