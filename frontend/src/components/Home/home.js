
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../redux/action';
import {useDispatch, useSelector} from "react-redux"
import { useEffect} from "react";
import { Sidebar } from '../Sidebar/sidebar';
import "./home.css"
import CircularProgress from '@mui/material/CircularProgress';


export const Home=()=>{
  const dispatch=useDispatch()
  const token=Cookies.get("Token")
  const Data=useSelector(store=>store.home_pageData)
  const navigate=useNavigate()
  const Name=Cookies.get("Name")
  


  useEffect(()=>{
    if(token===undefined){
       
         navigate("/")
      }
      else{
         dispatch(authenticate(token))
      }

  },[])

  

  
return (<div className="PagesOuterSideDiv">
    <div style={{width:'10%',marginRight:'10px'}}>
        <Sidebar/>
    </div>
    
   <div style={{width:'85%',textAlign:'center'}}>
    <p className='NameHead'>Welcome {Name} </p>
    <p className='NameHead' >Tasks Summary</p>
          <div className="HomeOuterDiv">
           
           
              <div className="HomeInDiv">
                    <h1>All</h1>
                <h1>{Data.message?Data.All:<CircularProgress sx={{color:'white'}} color="success" />}</h1>
               </div>
               <div className="HomeInDiv">
                   <h1>Personal</h1>
                   <h1>{Data.message?Data.Personal:<CircularProgress sx={{color:'white'}} color="success" />}</h1>
               </div>
               <div className="HomeInDiv">
                   <h1>Official</h1>
                   <h1>{Data.message?Data.Official:<CircularProgress sx={{color:'white'}} color="success" />}</h1>
                </div>
                <div className="HomeInDiv">
                    <h1>Others</h1> 
                    <h1>{Data.message?Data.Others:<CircularProgress sx={{color:'white'}} color="success" />}</h1>
                </div> 
              
           
          </div>
          <img className='Image' src='https://blog.planview.com/wp-content/uploads/2017/08/Tip_1_Juggling-too-many-task-Gif_Twitter.gif'/>
          </div>
          </div>
)
}