const express=require("express")
const authenticate=require("../middlewares/authenticate")
const Task=require("../models/task.model")
const router=express.Router()



router.get("/:id",authenticate,async(req,res)=>{
    try {
        const filter=req.query.filter
        let tasks
        if(req.params.id==="all"){
            if(filter==="all"){
                tasks=await Task.find({userId:{$eq:req.id}}).lean().exec()
              return  res.status(201).send({data:tasks,status:"success"})
            }
            else{
            tasks=await Task.find({userId:{$eq:req.id},status:filter}).lean().exec()
            res.status(201).send({data:tasks,status:"success"})
            }
        }
        else{
            if(filter==="all"){
             tasks=await Task.find({userId:{$eq:req.id},tag:req.params.id}).lean().exec()
             res.status(201).send({data:tasks,status:"success"})
            }
            else{
                tasks=await Task.find({userId:{$eq:req.id},tag:req.params.id,status:filter}).lean().exec()
            res.status(201).send({data:tasks,status:"success"})
            }
        }
    } 
    catch (error) {
        res.status(500).send({message:error.message})
    }
})


router.post("/addtask",authenticate,async(req,res)=>{
      try {
          req.body.userId=req.id
          const task=await Task.create(req.body)
          res.status(201).send({status:"success"})

      } 
      catch (error) {
          res.status(500).send({message:error.message})
      }
})

router.get("/gettask/auth",authenticate,async(req,res)=>{
    try {
        const All=await Task.count({userId:{$eq:req.id}})||0
        const Personal=await Task.count({userId:{$eq:req.id},tag:"personal"})||0
        const Official=await Task.count({userId:{$eq:req.id},tag:"official"})||0
        const Others=await Task.count({userId:{$eq:req.id},tag:"others"})||0
        res.status(201).send({All:All,Personal:Personal,Official:Official,Others:Others,message:"success"})
    } 
    catch (error) {
        res.status(500).send({message:error})
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        const task=await Task.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).send({message:"success"})
    } 
    catch (error) {
        res.status(500).send({message:error.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const task=await Task.findByIdAndDelete(req.params.id)
        res.status(201).send({message:"success"})
    } 
    catch (error) {
        res.status(500).send({message:error.message})
    }
})

router.patch("/:id/:subid",async(req,res)=>{
    try {
        const task=await Task.updateOne({_id:req.params.id,"subtasks._id":req.params.subid},{$set:{"subtasks.$":req.body}})
       
        res.status(201).send({message:"success"})
    } 
    catch (error) {
        res.status(500).send({message:error.message})
    }
})




module.exports=router