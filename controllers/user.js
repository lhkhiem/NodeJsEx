const User = require('../models/User')

const index = async (req, res, next) => {
    try {
        const users = await User.find({})
        throw new Error('Random error')
        return res.status(200).json({ users })
    } catch (err) { next(err) }
}
//
const newUser = (req, res, next) => {
    const newUser = new User(req.body)
    console.log('user body content:', newUser)
    newUser.save()
        .then(user => {
            res.status(201).json({
                '1 row affeted': user
            })
        })
        .catch(err => next(err))
}
module.exports = { index, newUser }