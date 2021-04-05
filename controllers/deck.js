const User = require('../models/User')
const Deck = require('../models/Deck')

const Joi = require('@hapi/joi')
const { json } = require('body-parser')

const index = async (req, res, next) => {
    const deck = await Deck.find({})
    return res.status(200).json({ deck })
}
const newDeck = async (req, res, next) => {
    //tim user ton tai bang owner gui len tu body
    const owner = await User.findById(req.body.owner)
    //tao Deck moi
    const deck = req.body
    delete deck.owner

    deck.owner = owner._id
    const newDeck = new Deck(deck)
    await newDeck.save()
    //them deck vao user 
    owner.decks.push(newDeck._id)
    await owner.save()

    return res.status(201).json({ deck: newDeck })
}
const getDeck = async (req, res, next) => {
    const deck = await Deck.findById(req.value.params.deckId)
    return res.status(200).json({ 'deck ne': deck })
}
const replaceDeck = async (req, res, next) => {
    const { deckId } = req.value.params
    const newDeck = req.value.body
    const currentDeck = await Deck.findById(deckId)
    const result = await Deck.findByIdAndUpdate(deckId, newDeck)
    //check if put user, reme deck in user's model

    const newUser = await User.findById(currentDeck.owner)
    if (newDeck.owner != currentDeck.owner) {
        const index = newUser.decks.indexOf(deckId)
        newUser.decks.splice(index, 1)
        newUser.save()

        //add deck into new owner
        const newOwner = await User.findById(req.value.body.owner)
        newOwner.decks.push(deckId)
        newOwner.save()
    }


    return res.status(200).json({ success: true })
}
const updateDeck = async (req, res, next) => {
    const { deckId } = req.value.params
    const newDeck = req.value.body
    const result = await Deck.findByIdAndUpdate(deckId, newDeck)
    return res.status(200).json({ success: true })
}
const deleteDeck = async (req, res, next) => {

}
module.exports = {
    index,
    newDeck,
    getDeck,
    replaceDeck,
    updateDeck,
    deleteDeck
    //dang xem video o 10m:42s
}