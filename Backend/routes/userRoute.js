const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const {registerUser, loginUser,getMe} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
//add user route
router.post('/', registerUser)
//loggin route
router.post('/login',loginUser)
//get user details
router.get('/me',protect,getMe)

module.exports = router   