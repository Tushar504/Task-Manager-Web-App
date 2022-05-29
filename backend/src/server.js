const app=require("./index")
const connect=require("./configs/db")
app.listen(1200,async()=>{
    try {
        console.log("listening on port 1200")
        return connect()
    } catch (error) {
        console.log(error)
    }
})