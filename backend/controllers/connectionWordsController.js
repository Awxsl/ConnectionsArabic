const Words = require("../models/Words")

const getAllWordGroups = async (req, res) => {
    try {
        const wordsArray = await Words.find({})
        res.status(200).json({data: wordsArray})
    } catch (error) {
        res.status(400).json({errorMessage: error.message})
    }
}

const getSingleWordGroup = async (req, res) => {
    try {
        const id = req.params.id
        const wordsArray = await Words.find({})
        res.status(200).json({data: wordsArray[id].data})
    } catch (error) {
        res.status(400).json({errorMessage: error.message})
    }
}

const addWordGroups = async (req, res) => {
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

module.exports = {getAllWordGroups, getSingleWordGroup, addWordGroups}