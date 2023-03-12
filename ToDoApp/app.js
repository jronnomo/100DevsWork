const express = require('express')
const app = express()
const dotenv = require('dotenv')
const passport = require('passport')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('/routes/main')
const todoRoutes = require('/routes/todos')

dotenv.config({path: './config/.env'})

//Passport config
require('./config/passport')(passport)

//connect mongoDB using mongoose
connectDB()

//set ejs as render view engine
app.set('view engine', 'ejs')

//serve public files css / main.js
app.use(express.static('public'))

//returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended: true}))

app.use(express.json())

//Logging
if (process.env.NODE_ENV === 'development'){
    app.use(logger('dev'))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))