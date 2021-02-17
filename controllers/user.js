const User = require('../models/User')
const Deck = require('../models/Deck')

const index = async (req, res, next) => {
    const users = await User.find({})
    //throw new Error('Random error')//test error handle fuction bat loi
    return res.status(200).json({ users })
}

const newUser = async (req, res, next) => {
    //throw new Error('Random error')//test error handle fuction bat loi
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({ user: newUser })

}
const newUserDecks = async (req, res, next) => {
    const { id } = req.params
    //Create new desk form body
    const newDeck = new Deck(req.body)
    console.log({ desk: newDeck })
    const user = await User.findById(id)

    //Assign user as a desk's owner
    newDeck.owner = user

    await newDeck.save()

    //add desk to user's desks array 'decks'
    user.decks.push(newDeck._id)

    //save to user
    await user.save()

    return res.status(201).json({ desk: newDeck })
}
const getById = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json({ user })
}
const getUserDecks = async (req, res, next) => {
    const { id } = req.params
    //Get user
    const user = await User.findById(id).populate('decks')
    return res.status(200).json({decks:user.decks})
}
const replaceUser = async (req, res, next) => {
    const { id } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(id, newUser)
    return res.status(200).json({ success: true })
}
const updateUser = async (req, res, next) => {
    const { id } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(id, newUser)
    return res.status(200).json({ success: true })
}
module.exports = {
    index,
    newUser,
    getById,
    replaceUser,
    updateUser,
    getUserDecks,
    newUserDecks
}