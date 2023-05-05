const mongoose = require('mongoose')



const URLShortnerModel = new mongoose.Schema({
    LongUrl :{
        type:String,
        required:true
    },
    shortUrl : {
        type:String,
        required:true,
        unique: true
    },
    clicks :{
        type : Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date
    }
})


module.exports = mongoose.model('urlShort', URLShortnerModel)