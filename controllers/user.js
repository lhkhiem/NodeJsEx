const User = require('../models/User')

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
const getById = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json({ user })
}
const replaceUser =async (req, res, next) => {
    const { id } = req.params
    const newUser = req.body
    const result =await User.findByIdAndUpdate(id, newUser)
    return res.status(200).json({ success: true })
}
const updateUser =async (req, res, next) => {
    const { id } = req.params
    const newUser = req.body
    const result =await User.findByIdAndUpdate(id, newUser)
    return res.status(200).json({ success: true })
}
module.exports = { index, newUser, getById, replaceUser, updateUser }