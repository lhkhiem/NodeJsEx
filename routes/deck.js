const express = require('express')
//const router = express.Router()
const router = require('express-promise-router')()
const DeckController = require('../controllers/deck')

const {validateBody, validateParam, schemas}=require('../helpers/routerHelpers')

router.route('/')
.get(DeckController.index)
.post(validateBody(schemas.newDeckSchema),DeckController.newDeck)
    
router.route('/:deckId')
.get(validateParam(schemas.idSchema,'deckId'), DeckController.getDeck)
.put(validateParam(schemas.idSchema,'deckId'), validateBody(schemas.newDeckSchema),DeckController.replaceDeck)
.patch(validateParam(schemas.idSchema,'deckId'), validateBody(schemas.deckOptionSchema),DeckController.replaceDeck)
.delete(validateParam(schemas.idSchema,'deckId'),DeckController.deleteDeck)
    
module.exports = router