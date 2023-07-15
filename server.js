const express = require('express')
const logger = require('morgan')
const cors = require('cors')


require('./models/User');
require('./models/Book');
require('./models/Review');

const AuthRouter = require('./routes/AuthRouter')
const BookRouter = require('./routes/BookRouter')
const ReviewRoute = require('./routes/ReviewRoute')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)

app.use('/Books', BookRouter)
app.use('/Reviews', ReviewRoute)

//app.use('/', (req, res) => {
 // res.send(`Connected!`)
//})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})  
