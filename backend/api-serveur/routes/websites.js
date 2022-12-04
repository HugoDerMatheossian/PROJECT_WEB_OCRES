const express = require('express');
const router = express.Router();

//const WebsiteController = require("../controllers/websites.js");
const WebsiteModel = require('../models/website')

router.post('/Add', async (request, response) => {
    const data = new WebsiteModel({
        websiteName:request.body.websiteName,
        score:request.body.score,
        nbVisites:request.body.nbVisites
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
        const data = await WebsiteModel.find();
        response.json(data)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (request, response) => {
    try{
        const data = await WebsiteModel.findById(request.params.id);
        response.json(data)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await WebsiteModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await WebsiteModel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// //Post Method
// router.post('/post', WebsiteController.addMovie)

// //Get all Method
// router.get('/getAll', WebsiteController.findAll)

// //Get by ID Method
// router.get('/getOne/:id', WebsiteController.findOne)

// //Update by ID Method
// router.patch('/update/:id', WebsiteController.deleteOne)

// //Delete by ID Method
// router.delete('/delete/:id', WebsiteController.modifyFilm)


module.exports = router