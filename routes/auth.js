const express = require('express')
const authController = require('../controllers/authController')
const router = express.Router();

router.get('/account', authController.get_user)
router.post('/create-account', authController.create_account)

router.post('/sign-in', authController.sign_in)


module.exports = router;