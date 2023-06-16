const mongoose=require("mongoose")

const express=require("express")
const { dish1Model } = require("../models/dish1.model")

const dish1Router=express.Router()

dish1Router.get("/dish1",async(req,res)=>{
    try {
        const data=dish1Model.find()
        res.send({data})
    } catch (error) {
        
    }
})

dish1Router.post("/dish1/add",async(req,res)=>{
      try{
        await dish1Model.insertMany(req.body)
        res.send({"msg":"dish added"})
      }catch{
        res.send({"msg":"Error not added"})
      }
})

module.exports={
    dish1Router
}