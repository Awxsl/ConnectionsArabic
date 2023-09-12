const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use('/api/words', require('./routes/connectionWordsRoutes'))

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server started at server ${PORT}`))