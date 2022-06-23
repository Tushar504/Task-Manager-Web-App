
// import { Navigate } from "react-router-dom"
import Cookies from 'js-cookie'
export const ADD_USER="ADD_USER"
export const ADD_TASK="ADD_TASK"
export const RTASK="RTASK"
export const AUTH="AUTH"
 
const addUser=(data)=>{
    return {
        type:ADD_USER,
        payload:data
    }
}
 
const AddTASKData=(data)=>{
    return {
        type:ADD_TASK,
        payload:data
    }
}
export const removeTask=()=>{
    return {
        type:RTASK,
        payload:undefined
    }
}
 



export const Auth=(data)=>{
    return {
        type:AUTH,
        payload:data
    }
}

export const login=(data,setCookie)=>{
       return async(dispatch,getState,api)=>{
           try {
               const res=await fetch("https://mytask-managerapp.herokuapp.com/login",{
                   method:"POST",
                   body:JSON.stringify(data),
                   headers: {
                    'Content-Type': 'application/json'
                   
                  },
               })
                  const received=await res.json()
                  if(received.Token && received.Name){
                  Cookies.set('Name',`${received.Name}`, { expires: 7 })
                  Cookies.set('Token',`${received.Token}`, { expires: 7 })
                  alert(received.message)
                  dispatch(addUser(received.message))
                  }
                  else{
                    if(received.errors){
                        alert(received.errors[0].msg)
                      }
                    if(received.message[0].msg){
                        alert(received.message[0].msg)
                    }
                    else{
                    alert(received.message)
                    }
                  }
                  
              } 
           catch (error) {
               console.log(error)
           }
       }
           
    
  
}
export const register=(data,setCookie)=>{
    
            return async(dispatch, getState, api) => {
               try {
                const res=await fetch("https://mytask-managerapp.herokuapp.com/register",{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                       
                      },
                })
                const received=await res.json()
                if(received.Token && received.Name){
                Cookies.set('Name',`${received.Name}`, { expires: 7 })
                Cookies.set('Token',`${received.Token}`, { expires: 7 })
                alert(received.message)
                dispatch(addUser(received.message))
                
                }
                else{
                  
                    if(received.errors){
                    alert(received.errors[0].msg)
                  }
                  if(received.message[0].msg){
                      alert(received.message[0].msg)
                  }
                 
                  else{
                  alert(received.message)
                  }
                }
                
               
                
               } catch (error) {
                   console.log(error)
               } 
            }
          
       
     
       
    } 

    export const authenticate=(token)=>{
        return async(dispatch, getState, api) => {
            try {
                 const res=await fetch("https://mytask-managerapp.herokuapp.com/task/gettask/auth",{
                 method:"GET",
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                   },
             })

            var received=await res.json()
               
                dispatch(Auth(received))
          } catch (error) {
                console.log(error.message)
            } 
         }
       
    }

 export const AddTasktoBackend=(token,body)=>{
    return async(dispatch, getState, api) => {
        try {
             const res=await fetch("https://mytask-managerapp.herokuapp.com/task/addtask",{
            
             method:"POST",
             body:JSON.stringify(body),
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
               },
         })

        var received=await res.json()
             alert(received.status)
           
      } catch (error) {
            console.log(error.message)
        } 
     }
   
 }
   
 export const TaskPageData=(token,id,filter)=>{
    return async(dispatch, getState, api) => {
        try {
             const res=await fetch(`https://mytask-managerapp.herokuapp.com/task/${id}?filter=${filter}`,{
                headers: {
                   
                    'Authorization': `Bearer ${token}`
                  },
             })
          var received=await res.json()
        
          dispatch(AddTASKData(received.data))
           
      } catch (error) {
            console.log(error.message)
        } 
     }
 }

 export const UpdateTask=(taskid,filter,token,id,data)=>{
    return async(dispatch, getState, api) => {
        try {
             await fetch(`https://mytask-managerapp.herokuapp.com/task/${taskid}`,{
                method:"PATCH",
                body:JSON.stringify(data),
                headers: {
                   
                    'Content-Type': 'application/json',
                  },
             })
         
         
           dispatch(TaskPageData(token,id,filter))
           
      } catch (error) {
            console.log(error.message)
        } 
     }
 }
 export const updateSubtask=(taskid,subid,filter,token,id,data)=>{
    return async(dispatch, getState, api) => {
        try {
             await fetch(`https://mytask-managerapp.herokuapp.com/task/${taskid}/${subid}`,{
                method:"PATCH",
                body:JSON.stringify(data),
                headers: {
                   
                    'Content-Type': 'application/json',
                  },
             })
          
          
           dispatch(TaskPageData(token,id,filter))
           
      } catch (error) {
            console.log(error.message)
        } 
     }
 }

 export const DeleteTask=(taskid,filter,token,id)=>{
    return async(dispatch, getState, api) => {
        try {
             await fetch(`https://mytask-managerapp.herokuapp.com/task/${taskid}`,{
                method:"DELETE",
             
               
             })
          
         
         dispatch(TaskPageData(token,id,filter))
           
      } catch (error) {
           console.log(error.message)
        } 
     }
 }
   
