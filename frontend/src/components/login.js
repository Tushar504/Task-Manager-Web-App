import { useState } from "react"
import { login } from "../redux/action"
import { useDispatch } from "react-redux"
import { Sidebar } from "./sidebar"
import styled from "styled-components"
export const Outer=styled.div`
display:flex`

export const Form=styled.form`
margin-left:400px;
margin-top:100px;
text-align:center;
width:400px;
height:300px;
border:1px solid red;
padding-top:50px`

export const Input=styled.input`
margin-top:10px;
margin-bottom:10px`
export const Login=()=>{
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const update=(target)=>{
        setData({
            ...data,
            [target.id]:target.value
        })
    }
    const dispatch=useDispatch()
    return (
        <Outer>
            <Sidebar/>
        <Form>
            <p>Email</p>
            <Input onChange={(e)=>update(e.target)} id="email" type="text" />
            <p>Password</p>
            <Input onChange={(e)=>update(e.target)} id="password" type="text"/><br></br>
            <Input onClick={(e)=>{
                e.preventDefault()
               if(data.email==="" || data.password===""){
                   return alert("all fields required")
               }
                dispatch(login(data))
            }} type="submit"/>

            
        </Form>
        </Outer>
    )
}