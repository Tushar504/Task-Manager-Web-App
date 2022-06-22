const app=require("./index")
const connect=require("./configs/db")
app.listen(process.env.PORT||1200,async()=>{
    try {
        console.log("listening on port 1200")
        return connect()
    } catch (error) {
        console.log(error)
    }
})