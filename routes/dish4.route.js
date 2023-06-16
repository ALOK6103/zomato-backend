const mongoose=require("mongoose")

const express=require("express")
const { dish4Model } = require("../models/dish4.model")

const dish4Router=express.Router()

dish4Router.get("/",async(req,res)=>{
    try {
        const data=await dish4Model.find()
        res.send({data})
    } catch (error) {
        
    }
})

dish4Router.post("/dish4/add",async(req,res)=>{
      try{
        await dish4Model.insertMany(req.body)
        res.send({"msg":"dish4 added"})
      }catch{
        res.send({"msg":"Error not added"})
      }
})

module.exports={
    dish4Router
}