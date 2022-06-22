const mongoose=require("mongoose")


const taskSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    tag:{type:String,require:true},
    subtasks:[{
        title:{type:String,required:true},
        status:{type:String,required:false,default:"pending"}

    }],
    date:{type:String,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    status:{type:String,required:false,default:"pending"}
})

const Task=mongoose.model("task",taskSchema)
module.exports=Task