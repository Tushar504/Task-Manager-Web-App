const express=require("express")
const app=express()
const { register, login } = require("./controllers/auth.controllers");
const { body, validationResult } = require("express-validator");
const authenticate=require("./middlewares/authenticate")
var cors = require('cors')
app.use(cors())
app.use(express.json())



const taskController=require("./controllers/task.controller")

app.use("/task",taskController)


app.post(
    "/register",
    body("name").notEmpty().withMessage("name is required"),
    body("mobile").notEmpty().withMessage("mobile no is required"),
    body("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("enter correct email id"),
    body("password")
      .notEmpty()
      .withMessage("password is required")
      .isLength({ min: 5, max: 8 })
      .withMessage(
        "password should be min 5 letters long and max 8 letters long"
      ),
    register
  );
  app.post(
    "/login",
    body("email")
      .notEmpty()
      .withMessage("email id is required")
      .isEmail()
      .withMessage("incorrect email"),
    body("password").notEmpty().withMessage("password is required"),
    login
  );
module.exports=app