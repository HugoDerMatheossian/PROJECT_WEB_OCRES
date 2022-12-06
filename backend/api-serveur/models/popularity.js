const mongoose = require('mongoose')

const PopularitySchema = new mongoose.Schema({
    Titre:{
        type:String, 
        require:true
    },
    Pourcentage:{   
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('popularity_datas', PopularitySchema)