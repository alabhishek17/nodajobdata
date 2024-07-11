const express = require("express");

const Jobcontorller = require("./../controller/job")

const router=express.Router();

router.post("/api/jobs",Jobcontorller.creatJob);

router.get("/api/jobs",Jobcontorller.listJob);

router.put("/api/jobs/:id",Jobcontorller.updateJob);

router.delete("/api/jobs/:id",Jobcontorller.deleteJob);

module.exports=router;
