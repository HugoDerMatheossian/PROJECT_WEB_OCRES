const express = require('express');
const router = express.Router();

const VideoModel = require('../models/video')

router.post('/Add', async (request, response) => {
    const data = new VideoModel({
        NameAnime:request.body.NameAnime,
        URL:request.body.URL,
        Titre_video:request.body.Titre_video
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
        const data = await VideoModel.find();
        response.json(data)
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (request, response) => {
    try{
        const data = await VideoModel.findById(request.params.id);
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

        const result = await VideoModel.findByIdAndUpdate(
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
    const id = req.params.id;
    VideoModel.deleteOne({ _id: id }).then((movie) => {
        res.status(200).json({ 
            movie,
            message: `${movie} deleted !` 
        });
    }).catch(() => {
        res.status(404).json({ 
            message: `Movie not found !` 
        });
    })
})

module.exports = router