const express = require('express');
var router = express.Router();
const scraperController = require('../controllers/scraperController')

router.get('/', scraperController.scraper)