const express = require('express')
const app = express()
const logger = require('morgan')

//Middlewares
app.use(logger('dev'))
//Routes
app.get('/', (req,res,next)=>{
    return res.status(200).json({
        message: 'Server is Ok!'
    })
})
//Catch 404 -- not found
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
//Error handler function
app.use(() => {
    const error = app.get('env') === 'development' ? err : {}
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