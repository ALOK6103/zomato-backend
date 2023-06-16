const mongoose=require("mongoose")

const express=require("express")
const { dish5Model } = require("../models/dish5.model")

const dish5Router=express.Router()

dish5Router.get("/dish5",async(req,res)=>{
    try {
        const data=dish5Model.find()
        res.send({data})
    } catch (error) {
        
    }
})

dish5Router.post("/dish5/add",async(req,res)=>{
      try{
        await dish5Model.insertMany(req.body)
        res.send({"msg":"dish5 added"})
      }catch{
        res.send({"msg":"Error not added"})
      }
})

module.exports={
    dish5Router
}