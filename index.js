const express = require("express")

const mongoose = require("mongoose")

const router=require("./route/job")
const dotenv = require('dotenv')

dotenv.config();

console.log( "mongoDBURI=>", process.env.DATABASE_URI);
mongoose 
.connect(process.env.DATABASE_URI)   //connection and database name job_app   mongodb://localhost:27017/job_app
.then(()=>console.log("database connected succssfuly"))
.catch((err) => console.log("Error connecting database", err));

const app=express();

// middleware it help to assces boy in api 
app.use(express.json())


app.use("/",(req,res)=>{
    res.sendFile(__dirname+"index.html")
})
//routers
app.use(router);
app.listen(10000,()=> console.log(`server is connected 10000`))

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => console.log(`Server is connected on port ${PORT}`));