const express = require('express')
//const router = express.Router()
const router = require('express-promise-router')()
const UserController = require('../controllers/user')

const {validateParam, schemas}=require('../helpers/routerHelpers')

router.route('/')
    .get(UserController.index)
    .post(UserController.newUser)

router.route('/:id')
    .get(validateParam(schemas.idSchema,'id'),UserController.getById)
    .put(UserController.replaceUser)
    .patch(UserController.updateUser)

router.route('/:id/decks')
    .get(UserController.getUserDecks)
    .post(UserController.newUserDecks)
module.exports = router