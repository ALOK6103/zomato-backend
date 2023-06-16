const mongoose=require("mongoose")

const express=require("express")
const { dish3Model } = require("../models/dish3.model")

const dish3Router=express.Router()

dish3Router.get("/",async(req,res)=>{
    try {
        const data=await dish3Model.find()
        res.send({data})
    } catch (error) {
        
    }
})

dish3Router.post("/dish3/add",async(req,res)=>{
      try{
        await dish3Model.insertMany(req.body)
        res.send({"msg":"dish3 added"})
      }catch{
        res.send({"msg":"Error not added"})
      }
})

module.exports={
    dish3Router
}