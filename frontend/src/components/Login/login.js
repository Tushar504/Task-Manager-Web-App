import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { login } from "../../redux/action"
import { useDispatch} from "react-redux"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import "./login.css"

export const Login=()=>{
    const dispatch=useDispatch()
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
   useEffect(()=>{
    if(Cookies.get("Token")){
        return navigate("/home")
    }
   },[])
    
   
     
    const update=(target)=>{
        setData({
            ...data,
            [target.name]:target.value
        })
    }
   
    return (
       
        <form className="Form">
            <Button sx={{fontSize:25,fontWeight:'bold'}} variant="text">Sign in</Button><br></br>
            <TextField onChange={(e)=>update(e.target)} margin="dense"  name="email" type="email"  label="Email" variant="outlined" />
             <br></br>
             <br></br>
            <TextField onChange={(e)=>update(e.target)} name="password" type="password" margin="dense" label="password" variant="outlined"/><br></br>
             <br></br>
            <Button variant="contained" onClick={async(e)=>{
                e.preventDefault()
               if(data.email==="" || data.password===""){
                   return alert("all fields required")
               }
                 await dispatch(login(data))
                    .then(()=>{
                        
                        if(Cookies.get("Token")){
                            navigate("/home")
                         }
                       
                    
                 })
                  }} >Submit</Button>
            <br></br>
            <br></br>
            <Link to="/register">Don't have an account? Sign up</Link>
            
        </form>
       
    )
}