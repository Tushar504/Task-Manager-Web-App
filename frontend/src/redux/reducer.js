import { ADD_TASK,ADD_USER } from "./action"

export const reducer=(store={user:{
    user:{
        name:null
    }
},tasks:[]},{type,payload})=>{
             switch(type){
                 case  ADD_TASK:
                     return {...store,tasks:payload}
                 case ADD_USER:
                     return {...store,user:payload}
                 default:
                     return store
             }
}