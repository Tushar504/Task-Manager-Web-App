import { register } from "../../redux/action"
import { useDispatch} from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'
import { Link } from "react-router-dom"
export const Register=()=>{
   
    const [data,setdata]=useState({
         name:"",
         email:"",
         password:"",
         mobile:""
    })
    const dispatch=useDispatch()
  
    const navigate=useNavigate()

    const update=(target)=>{
           setdata({
               ...data,
               [target.name]:target.value
           })
    }
    return (
      
            <form className="Form">
                 <Button sx={{fontSize:25,fontWeight:'bold'}} variant="text">Sign up</Button><br></br>
             <TextField onChange={(e)=>update(e.target)} margin="dense"  name="name" type="text"  label="Your name" variant="outlined" />
             
             <br></br>
              <TextField onChange={(e)=>update(e.target)} margin="dense"  name="email" type="email"  label="Email" variant="outlined" />
             <br></br>
              <TextField onChange={(e)=>update(e.target)} margin="dense"  name="mobile" type="number"  label="Mobile" variant="outlined" />
             <br></br>
              <TextField onChange={(e)=>update(e.target)} margin="dense"  name="password" type="password"  label="password" variant="outlined" />
             <br></br>
             <br></br>
              <Button variant="contained" size="large" onClick={async(e)=>{
                  e.preventDefault()
                 if(data.email==="" || data.mobile==="" || data.name==="" || data.password===""){
                     return alert("All fields required")
                 }
                 await dispatch(register(data))
                 .then(()=>{
                     if(Cookies.get("Token")){
                        navigate("/home")
                     }
                    
                    })
              }}>Register</Button>
              <br></br>
              <br></br>
               <Link to="/">Sign in</Link>
              </form>
        
    )
}