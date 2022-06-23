import {ADD_USER,AUTH,ADD_TASK,RTASK} from "./action"

export const reducer=(store={user:{},tasks:undefined,home_pageData:{}},{type,payload})=>{
             switch(type){
               
                 case ADD_USER:
                     return {...store,user:payload}
                 case AUTH:
                    return {...store,home_pageData:payload}
                 case ADD_TASK:
                    return {...store,tasks:payload}
                 case RTASK:
                    return {...store,tasks:payload}
                 default:
                     return store
             }
}