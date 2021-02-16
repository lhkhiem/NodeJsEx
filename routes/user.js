const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

router.route('/')
    .get(UserController.index)
    .post(UserController.newUser)
    .put()
    .patch()
    .delete()
module.exports = router