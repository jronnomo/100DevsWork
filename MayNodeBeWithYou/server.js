const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const dbConnectString = 'mongodb+srv://jronnomo:th3Rh1no@cluster0.ekdrlak.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(dbConnectString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
          })
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
              .then(result => {
                console.log(result)
                res.redirect('/')
              })
              .catch(error => console.error(error))
          })
        app.listen(3000, () => console.log('listening on 3000'))
    })
    .catch(error => console.error(error))


//server.js
console.log('May Node be with you')