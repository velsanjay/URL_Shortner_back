const NewUrlRouter = require('express').Router()
const URLShortnerModel = require('../models/urlShortnerModel')

NewUrlRouter.post('/new', async(req,res)=>{
    const {LongUrl} = req.body;

    const url = await URLShortnerModel.findOne({LongUrl:LongUrl})

    if(!url){

   const urlShort = new URLShortnerModel({
    LongUrl
   })

   urlShort.save().then((responce)=>{
    res.status(200).send({
        success:true,
        message:"URL Created Successfully!!!",
        data:responce
    })
   }).catch((error)=>{
    res.status(402).send({
        success:false,
        message:"URL Created Failed!!!",
        data:error
    })
   })
}else{
    res.status(400).send({
        success:false,
        message:"URL Already Exist!!!"
    })
}

})

module.exports = NewUrlRouter
