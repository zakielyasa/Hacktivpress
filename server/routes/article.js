var express = require('express');
var router = express.Router();
var Controller = require('../controller/article')
var Verify = require('../middleware/verify')

router.get('/', Controller.getAllArticle)
router.post('/create',  Controller.createArticle)
router.delete('/delete/:id',  Controller.deleteArticle)
router.get('/:id',  Controller.findAnArticle)
router.put('/edit/:id',  Controller.updateArticle)

module.exports = router;