const mongoose = require('mongoose')

const WebsiteSchema = new mongoose.Schema({
    websiteName:{
        type:String, 
        require:true
    },
    score:{
        type:Number,
        require:true
    },
    nbVisites:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('website_datas', WebsiteSchema) 