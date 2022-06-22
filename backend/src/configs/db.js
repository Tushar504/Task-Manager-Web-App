const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://tushar:ahire98@task-manager.zxpw7.mongodb.net/task-manager?retryWrites=true&w=majority")
}
module.exports=connect