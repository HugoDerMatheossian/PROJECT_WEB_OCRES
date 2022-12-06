const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    NameAnime:{
        type:String, 
        require:true
    },
    URL:{
        type:String,
        require:true
    },
    Titre_video:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('playlist_op-eds', VideoSchema)