const express = require('express')
const router = express.Router() 
const wordsController = require('../controllers/connectionWordsController')

const {getAllWordGroups, getSingleWordGroup, addWordGroups, getNewestWord} = wordsController

router.get('/', getAllWordGroups)
router.get('/newWord', getNewestWord)
router.get('/:id', getSingleWordGroup)
router.post('/', addWordGroups)

module.exports = router