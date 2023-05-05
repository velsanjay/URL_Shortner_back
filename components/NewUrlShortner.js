const NewUrlRouter = require('express').Router()
const URLShortnerModel = require('../models/urlShortnerModel')

NewUrlRouter.post('/new', async(req,res)=>{
    const {LongUrl} = req.body;

    const url = await URLShortnerModel.findOne({LongUrl:LongUrl})

    if(!url){
        function makeid() {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < 5) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
              counter += 1;
            }
            return result;
        }

   const urlShort = new URLShortnerModel({
    LongUrl,
    shortUrl:makeid()
   })

   urlShort.save().then((responce)=>{
    res.status(200).send({
        success:true,
        message:"Short URL Created Successfully!!!",
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
