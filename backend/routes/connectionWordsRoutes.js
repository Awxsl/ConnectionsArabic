const express = require('express')
const router = express.Router() 
const wordsController = require('../controllers/connectionWordsController')

const {getAllWordGroups, getSingleWordGroup, addWordGroups} = wordsController

router.get('/', getAllWordGroups)
router.get('/:id', getSingleWordGroup)
router.post('/', addWordGroups)

module.exports = router