var express = require('express');
const appController = require('../controllers/appController')
var router = express.Router();

/* GET home page. */

router.get('/resume', appController.get_resume)
router.post('/resume', appController.uploadResume)

module.exports = router;
