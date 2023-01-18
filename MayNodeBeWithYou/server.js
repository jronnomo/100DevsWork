const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const dbConnectString = 'mongodb+srv://jronnomo:###@cluster0.ekdrlak.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(dbConnectString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(express.static('public'))
        app.use(bodyParser.json())
        app.get('/', (req, res) => {
         //   res.sendFile(__dirname + '/index.html')
            db.collection('quotes').find().toArray()
            .then(results => {
              res.render('index.ejs', {quotes: results})
              console.log(results)
            })
            .catch(error => console.log(error))
         //   res.render('index.ejs', {})
          })
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
              .then(result => {
                console.log(result)
                res.redirect('/')
              })
              .catch(error => console.error(error))
          })
        app.put('/quotes', (req, res) => {
          console.log(req.body)
          quotesCollection.findOneAndUpdate(
            { name: 'Yoda' },
            {
              $set: {
                name: req.body.name,
                quote: req.body.quote
              }
            },
            {
              upsert: true
            }
          )
          .then(result => {
            console.log(result)
            res.json('Success')
          })
          .catch(error => console.error(error))
        })
        app.delete('/quotes', (req, res) => {
          quotesCollection.deleteOne(
            {name: req.body.name},
          )
          .then(result => {
            if(result.deletedCount === 0){
              return res.json('No quote to delete')
            }
            res.json(`Deleted Darth Vader's quote`)
          })
          .catch(error => console.error(error))
        })
        app.listen(3000, () => console.log('listening on 3000'))
    })
    .catch(error => console.error(error))


//server.js
console.log('May Node be with you')