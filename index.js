const express=require("express")
const {connection}=require("./db")
require("dotenv").config()
const cors=require("cors")
const { dish1Router } = require("./routes/dish1.route")
const { dish2Router } = require("./routes/dish2.route")
const { dish3Router } = require("./routes/dish3.route")
const { dish4Router } = require("./routes/dish4.route")
const { dish6Router } = require("./routes/dish6.route")
const { dish5Router } = require("./routes/dish5.route")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/dish1",dish1Router)
app.use("/dish2",dish2Router)
app.use("/dish3",dish3Router)
app.use("/dish4",dish4Router)
app.use("/dish5",dish5Router)
app.use("/dish6",dish6Router)

app.listen(process.env.PORT,async()=>{
    try {
        await connection 
        console.log("connecteed")
    } catch (error) {
        console.log(error)
    }
})

