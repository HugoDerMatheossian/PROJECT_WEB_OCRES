const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    AnimeName:{
        type:String, 
        require:true
    },
    url:{
        type:String,
        require:true
    },
    VideoName:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('playlist_op-ed', VideoSchema)