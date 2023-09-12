const express = require('express')
const router = express.Router() 
const wordsController = require('../controllers/connectionWordsController')

const {getWords, addWords} = wordsController

router.get('/', getWords)
router.post('/', addWords)

module.exports = router