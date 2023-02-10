const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
//const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const path = require('path')

//Load config
dotenv.config({ path: './config/config.env' })

connectDB()

//Logging
const app = express()
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Routes
app.use('/', require('./routes/index'))

// tutorial uses Handlebars, but we use EJS -- Template Engine
// app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.engine('.ejs', require('ejs').renderFile);



const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))