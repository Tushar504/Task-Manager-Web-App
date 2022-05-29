const mongoose=require("mongoose")


const taskSchema=new mongoose.Schema({
    title:{type:String,required:true},
    tag:{type:String,require:true},
    subtask:{type:Array,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const Task=mongoose.model("task",taskSchema)
module.exports=Task