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
module.exports = {
    index,
    newDeck
}