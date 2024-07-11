const Jobmodule = require("../model/job")

const creatJob= async (req,res)=>{
    console.log(req.body);
    const respons= await Jobmodule.create(req.body)
    console.log(respons);
    res.json({
        success:true,
        message:"creat api"
    });
}

const listJob=async (req,res)=>{
       
    const minisalary=req.query.minisalary
    const joblist= await Jobmodule.find({
        // salary:{
        //     $gt: minisalary              //7000
        // }

        title:{
            $regex:new RegExp(`${req.query.title}`,"gi"),
        },
    })
    res.json({
        success:true,
        message:"creat list ",
        result:joblist
    })
}

const updateJob= async(req,res)=>{
    console.log(req.params.id);
    const update={
        $set:req.body,
        
    };
    const filterObj={
        salary:1234367,
    }
   // const respons=await Jobmodule.findByIdAndUpdate(req.params.id, update)

   const respons=await Jobmodule.updateMany(filterObj,update)
    console.log(respons);
    res.json({
        success:true,
        message:"updat"
    })
}

const deleteJob= async(req,res)=>{
    console.log(req.params.id);
    const deleteobj= await Jobmodule.findByIdAndDelete(req.params.id)
    // const deleteobj=Jobmodule.deleteMany()
    res.json({
        success:true,
        message:"delete"
    })
}


const Jobcontorller={
    creatJob,
    listJob,
    updateJob,
    deleteJob,
};

module.exports=Jobcontorller;