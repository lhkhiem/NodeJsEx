const bodyParser = require('body-parser')
const express = require('express')
const secureApp=require('helmet')
const logger = require('morgan')
const mongoClient = require('mongoose')


//setup connect mongoDb by mongoose
const mongoUri = 'mongodb+srv://lhkhiem:lhkhiem1990@cluster0.fezxg.mongodb.net/NodejsEx?retryWrites=true&w=majority'
mongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('👍 Connected to MongoDB!')
    })
    .catch(() => {
        console.error(`❌ Connect database is failed with error ${error}`)
    })

const app = express()
app.use(secureApp())

const userRoute = require('./routes/user')
const deckRoute = require('./routes/deck')
const { required } = require('@hapi/joi')

//Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
//Routes

app.use('/users', userRoute)//goi router user
app.use('/decks', deckRoute)//goi router deck

app.get('/', (req, res, next) => {//route trang chu
    return res.status(200).json({
        message: 'Server is Ok good!'
    })
})
//Catch 404 -- not found (neu khong co route nao dc tim thay thi se tao loi 404 va next cho thang error handle xu ly)
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
//Error handler function (la ham hung cac error phat sinh thong qua next)
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {hhh}
    const status = err.status || 500

    //response to client 
    return(
    res.status(status).json({
        errorHandle: {
            message: error.message
        }
    })
    )
})
//Start the server

const port = app.get('port') || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}`))