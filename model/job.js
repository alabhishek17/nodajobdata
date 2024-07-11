const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    }, 
    company:{
        type:String,
    },
    location:{
        type:String,
    },
    salary:{
        type:Number,
    },
});


// here we created collection with name of jobs and withe help of mongoose
const Jobmoduler = mongoose.model("jobs",jobSchema)

module.exports=Jobmoduler;