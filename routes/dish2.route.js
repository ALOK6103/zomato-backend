const mongoose=require("mongoose")

const express=require("express")
const { dish2Model } = require("../models/dish2.model")

const dish2Router=express.Router()

dish2Router.get("/",async(req,res)=>{
    try {
        const data=await dish2Model.find()
        res.send({data})
    } catch (error) {
        
    }
})

dish2Router.post("/dish2/add",async(req,res)=>{
      try{
        await dish2Model.insertMany(req.body)
        res.send({"msg":"dish2 added"})
      }catch{
        res.send({"msg":"Error not added"})
      }
})

module.exports={
    dish2Router
}