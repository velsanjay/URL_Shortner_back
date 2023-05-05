const AllUrlRouter = require('express').Router()
const urlShortnerModel = require('../models/urlShortnerModel')

AllUrlRouter.get('/', async(req, res)=>{
    await urlShortnerModel.find({}).then((responce)=>{
        res.status(200).send({
            success:true,
            message:"Data is fetched!!!",
            data:responce
        })
    }).catch((error)=>{
        res.status(400).send({
            success:false,
            message:"Data fetched Failed!!!",
            error:error
        })
    })
})

module.exports = AllUrlRouter