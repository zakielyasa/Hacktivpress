var express = require('express');
var router = express.Router();
var Controller = require('../controller/user')
var Verify = require('../middleware/verify') 

router.post('/signup', Controller.createUser)
router.post('/login', Controller.login)
router.get('/', Controller.findAllUser)


module.exports = router;