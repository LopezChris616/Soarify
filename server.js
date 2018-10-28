const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const path = require('path')

const app = express()

const secret = process.env.SECRET || 'some secret random blah'
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/api', expressJwt({ secret: secret }))
app.use('/api/vacations', require('./routes/vacations'))
app.use('/auth', require('./routes/auth'))

app.use(express.static(path.join(__dirname, 'client', 'build')))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vacationLocations', err => {
	if (err) throw err
	console.log('Connected to the database!')
})

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => {
	console.log(`Server connected to port ${ port }...`)
})