const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
//const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const { default: mongoose } = require('mongoose')
const MongoStore = require('connect-mongo')

//Load config
dotenv.config({ path: './config/config.env' })

//Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// Body Parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


// tutorial uses Handlebars, but we use EJS -- Template Engine
// app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.engine('.ejs', require('ejs').renderFile);

//EJS Helper
const helpers = require('./helpers/ejs')
app.locals.helpers = helpers

//Create session store
const store = MongoStore.create({mongoUrl: process.env.MONGO_URI, collectionName: 'sessions'})

//Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: store
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Set global variable
app.use((req, res, next) => {
    res.locals.user = req.user || null
    next()
})

//Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))