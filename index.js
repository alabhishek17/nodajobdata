const express = require("express")

const mongoose = require("mongoose")

const router=require("./route/job")
  
mongoose 
.connect("mongodb+srv://alabhishek17:BrG6TaWtbX8X72S3@cluster0.mutzkvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")   //connection and database name job_app   mongodb://localhost:27017/job_app
.then(()=>console.log("database connected succssfuly"))
.catch((err) => console.log("Error connecting database", err));

const app=express();

// middleware it help to assces boy in api 
app.use(express.json())

//routers
app.use(router);
app.listen(10000,()=> console.log(`server is connected 10000`))