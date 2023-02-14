const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
//const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const path = require('path')
const passport = require('passport')
const session = require('express-session')

//Load config
dotenv.config({ path: './config/config.env' })

//Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

//Logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// tutorial uses Handlebars, but we use EJS -- Template Engine
// app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.engine('.ejs', require('ejs').renderFile);

//Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    })
)

//Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))