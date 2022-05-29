import { register } from "../redux/action"
import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Input,Outer,Form } from "./login"

export const Register=()=>{
    const [data,setdata]=useState({
         name:"",
         email:"",
         password:"",
         mobile:""
    })
    const dispatch=useDispatch()
  const user=useSelector(store=>store.user)
  console.log(user)

    const update=(target)=>{
           setdata({
               ...data,
               [target.id]:target.value
           })
    }
    return (
        <Outer>
            <Sidebar/>
            <Form>
              <p>Name</p> 
              <Input id="name" onChange={(e)=>update(e.target)} type="text" /> 
              <p>Email</p>
              <Input id="email" onChange={(e)=>update(e.target)} type="text" />
              <p>Mobile</p>
              <Input id="mobile" onChange={(e)=>update(e.target)} type="number"/>
              <p>password</p>
              <Input id="password" onChange={(e)=>update(e.target)} type="text"/>

              <Input onClick={(e)=>{
                  e.preventDefault()
                 if(data.email==="" || data.mobile==="" || data.name==="" || data.password===""){
                     return alert("All fields required")
                 }
                 
                  return dispatch(register(data))
              }} type="submit"/>
             
              </Form>
        </Outer>
    )
}