const express = require('express');
const router = express.Router()
const WebsiteSchemaCopy = require('../models/models')

router.post('/Add', async (request, response) => {
    const data = new WebsiteSchemaCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email
    })
    try {
        const dataToSave = await data.save();
        response.status(200).json(dataToSave)
    }
    catch (error) {
        response.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (request, response) => {
    try{
        const data = await WebsiteSchemaCopy.find();
        response.json(data)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (request, response) => {
    try{
        const data = await WebsiteSchemaCopy.findById(request.params.id);
        response.json(data)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})

module.exports = router