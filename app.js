const bodyParser = require('body-parser')
const express = require('express')
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

const userRoute = require('./routes/user')

//Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
//Routes

app.use('/users', userRoute)//goi router user

app.get('/', (req, res, next) => {//route trang chu
    return res.status(200).json({
        message: 'Server is Ok good!'
    })
})
//Catch 404 -- not found
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
//Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {hhh}
    const status = err.status || 500

    //response to client 
    return
    res.status(status).json({
        error: {
            message: error.message
        }
    })
})
//Start the server

const port = app.get('port') || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}`))