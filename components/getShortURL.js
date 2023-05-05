const GetUrlRouter = require('express').Router()
const URLShortnerModel = require('../models/urlShortnerModel')

GetUrlRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    const url = await URLShortnerModel.findOne({ shortUrl: id }).then((responce) => {
        responce.clicks ++
        responce.save()
        res.status(301).redirect(responce.LongUrl)
        
    }).catch((error)=>{
        res.status(400).send({
            success:false,
            message:"No Data Found!!!",
            error:error
        })
    })
    // console.log(id);
})

module.exports = GetUrlRouter