const express = require('express')
//const router = express.Router()
const router = require('express-promise-router')()
const UserController = require('../controllers/user')

const {validateBody, validateParam, schemas}=require('../helpers/routerHelpers')

router.route('/')
    .get(UserController.index)
    .post(validateBody(schemas.userSchema),UserController.newUser)

router.route('/:id')
    .get(validateParam(schemas.idSchema,'id'),UserController.getById)
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userSchema),UserController.replaceUser)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userOptionSchema),UserController.updateUser)

router.route('/:id/decks')
    .get(validateParam(schemas.idSchema,'id'),UserController.getUserDecks)
    .post(validateParam(schemas.idSchema,'id'),validateBody(schemas.deckSchema),UserController.newUserDecks)
module.exports = router