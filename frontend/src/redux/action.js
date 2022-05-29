

export const ADD_USER="ADD_USER"
export const ADD_TASK="ADD_TASK"


const addUser=(data)=>{
    return {
        type:ADD_USER,
        payload:data
    }
}

const addTask=(data)=>{
    return {
        type:ADD_TASK,
        payload:data
    }
}

export const login=(data)=>{
       return async(dispatch,getState,api)=>{
           try {
               const res=await fetch("http://localhost:1200/login",{
                   method:"POST",
                   body:JSON.stringify(data),
                   headers: {
                    'Content-Type': 'application/json'
                   
                  },
               })
               const received=await res.json()
               dispatch(addUser(received))
               if(received.token){
                   localStorage.setItem("Token",received.token)
               }

           } 
           catch (error) {
               
           }
       }
           
    
  
}
export const register=(data)=>{
    
            return async(dispatch, getState, api) => {
               try {
                const res=await fetch("http://localhost:1200/register",{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                       
                      },
                })
                const received=await res.json()
                dispatch(addUser(received))
                if(received.token){
                    localStorage.setItem("Token",received.token)
                }
               } catch (error) {
                   console.log(error)
               } 
            }
          
       
     
       
    } 

    export const authenticate=(token)=>{
        return async(dispatch, getState, api) => {
            try {
             const res=await fetch("http://localhost:1200/auth",{
                 method:"POST",
                
                 headers: {
                     'Content-Type': 'application/json',
                     "Authorization": `Bearer ${token}`
                   },
             })
             const received=await res.json()
             
             dispatch(addUser(received))
             
           
            } catch (error) {
                console.log(error)
            } 
         }
       
    }
   
