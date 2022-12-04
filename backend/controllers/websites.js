const mongoose = require('mongoose');
const axios = require('axios');

const WebsiteSchemaCopy = require('../models/website')

exports.addMovie = async(req, res) => {
    const data = new WebsiteSchemaCopy({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}