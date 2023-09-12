const Words = require("../models/Words")

const getWords = async (req, res) => {
    try {
        const wordsArray = await Words.findOne({}).sort({createdAt: -1});
        res.status(200).json({data: wordsArray.data})
    } catch (error) {
        res.status(400).json({errorMessage: error.message})
    }
}

const addWords = async (req, res) => {
    try {
        const words = req.body 
        console.log(req.body)

        const newWord = new Words(words)
        await newWord.save()
        res.status(200).json({message: 'Words saved successfully!'})
        
    } catch (error) {
        res.status(400).json({errorMessage: error.message})
    }
}

module.exports = {getWords, addWords}