const mongoose = require('mongoose')

const WebsiteSchema = new mongoose.Schema({
    fullName:{
        type:String, 
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        requiore:true
    }, 
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', WebsiteSchema)