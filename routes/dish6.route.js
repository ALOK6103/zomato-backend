const mongoose=require("mongoose")

const express=require("express")
const { dish6Model } = require("../models/dish6.model")

const dish6Router=express.Router()

dish6Router.get("/dish6",async(req,res)=>{
    try {
        const data=dish6Model.find()
        res.send({data})
    } catch (error) {
        
    }
})

dish6Router.post("/dish6/add",async(req,res)=>{
      try{
        await dish6Model.insertMany(req.body)
        res.send({"msg":"dish6 added"})
      }catch{
        res.send({"msg":"Error not added"})
      }
})

module.exports={
    dish6Router
}