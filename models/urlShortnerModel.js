const mongoose = require('mongoose')
const shortId = require('shortid')

const URLShortnerModel = new mongoose.Schema({
    LongUrl :{
        type:String,
        required:true
    },
    shortUrl : {
        type:String,
        required:true,
        unique: true,
        default:shortId.generate()
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