var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./routes/index')

var server = express()

module.exports = server

server.use(express.static('./styles'))

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.get('/home', index.getHome)
server.get('/submitlunch', index.showForm)
server.post('/lunch', index.saveForm)
server.get('/lunch', index.getLunch)
server.get('/lunch/:id', index.getIndividual)
server.get('/money', index.budgetFilter)
server.post('/money', index.budgetOptions)
