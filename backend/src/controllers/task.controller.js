const express=require("express")
const authenticate=require("../middlewares/authenticate")
const Task=require("../models/task.model")
const router=express.Router()

router.post("/addtask",authenticate,async(req,res)=>{
      try {
          const task=await Task.create(req.body)
          res.send(task)

      } 
      catch (error) {
          res.send(error)
      }
})

router.get("/gettask",authenticate,async(req,res)=>{
    try {
        const tasks=await Task.find({userId:{$eq:req.user}})

        res.send(tasks)
    } 
    catch (error) {
        
    }
})


module.exports=router