const User = require('../models/User')
const Desk = require('../models/Desk')

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
const newUserDesks = async (req, res, next) => {
    const { id } = req.params
    //Create new desk form body
    const newDeck = new Desk(req.body)

    const user = await User.findById(id)

    //Assign user as a desk's owner
    newDeck.owner = user

    await newDesks.save()

    //add desk to user's desks array 'desks'
    user.desk.push(newsDesk._id)

    //save to user
    await user.save()

    return res.status(201).json({ desk: newDesks })
}
const getById = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json({ user })
}
const getUserDesks = async (req, res, next) => {

    return
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
    getUserDesks,
    newUserDesks
}