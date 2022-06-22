import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AddCardIcon from '@mui/icons-material/AddCard';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled as newStyled } from '@mui/material/styles';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./sidebar.css"

const LightTooltip = newStyled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    fontWeight:'bold',
    
  },
}));
const Div=styled.div`
width:${(props)=>props.show?"200px":"45px"};
height: 750px;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
text-align:center;
background-color:rgb(25,118,210);
color:white;
position: fixed;
    z-index: 25;
    
    padding: 2px;
font-family: Book Antiqua;
`

const Icons=styled.div`
width: ${(props)=>props.show?"20%":"100%"};

height: 750px;
text-align:center

`
const Buttons=styled.div`
width: 80%;
text-align: left;
height: 750px;
`
const Hr=styled.hr`
width:${(props=>props.show?'90%':'90%')};
height:2px;
background-color:white;
border:0px;
margin-top:10px
`


export const Sidebar=()=>{
   const Name=Cookies.get("Name")
   const [show,setshow]=useState(false)
   
    const navigate=useNavigate()
    return ( Name?<Div className='SidebarMainDiv' show={show}>
            {show?<h1>{Name?Name:null}</h1>:<LightTooltip  title={`${Name}`} arrow><h1 style={{backgroundColor:"white",color:'black',borderRadius:'25px', width:'80%',cursor:'pointer',margin:'auto',marginTop:'20px',marginBottom:'20px'}}>{Name?Name[0]:null}</h1></LightTooltip>}
           
            <div className='ArrorDiv'>
             <Hr show={show}></Hr>
            {show?<ArrowCircleLeftIcon sx={{cursor:'pointer'}} onClick={()=>setshow(false)}/>:<ArrowCircleRightIcon sx={{cursor:'pointer'}} onClick={()=>setshow(true)}/>}
            </div>

            <div className='IconsMainDiv'>
            <Icons show={show}>
          
            <LightTooltip  title="Home" arrow><Link to="/home"> <HomeIcon sx={{marginTop:2.5,fontSize:30,color:'white'}}/></Link></LightTooltip><br></br>
            <LightTooltip  title="All" arrow><Link to="/task/all">  <AllInboxIcon sx={{marginTop:3.5,fontSize:30,color:'white'}}/></Link></LightTooltip><br></br>
            <LightTooltip  title="Personal" arrow><Link to="/task/personal">  <PersonalVideoIcon sx={{marginTop:3.5,fontSize:30,color:'white'}}/></Link></LightTooltip><br></br>
            <LightTooltip  title="Official" arrow><Link to="/task/official"> <HomeWorkIcon sx={{marginTop:3.5,fontSize:30,color:'white'}}/></Link></LightTooltip><br></br>
            <LightTooltip  title="Others" arrow><Link to="/task/others">  <OtherHousesIcon sx={{marginTop:3.5,fontSize:30,color:'white'}}/></Link></LightTooltip><br></br>
            <LightTooltip  title="Add Task" arrow><Link to="/addtask">  <AddCardIcon sx={{marginTop:3.5,fontSize:30,color:'white'}}/></Link></LightTooltip><br></br>
            <LightTooltip  title="Logout" arrow> 
            <LogoutIcon  onClick={()=>{
                Cookies.remove('Name')
                Cookies.remove('Token')

            
                 navigate("/")
             
               }} sx={{marginTop:3.5,fontSize:30,color:'white',cursor:'pointer'}}/>
                </LightTooltip>
            </Icons>
  
            {show?<Buttons >
              <Link to="/home"><Button sx={{marginTop:2.5,color:'white',fontWeight:'bold'}}  variant='text'>Home</Button></Link> <br></br>
            <Link to="/task/all"><Button sx={{marginTop:3,color:'white',fontWeight:'bold'}} variant="text">All</Button></Link><br></br>
            <Link to="/task/personal"><Button sx={{marginTop:3.2,color:'white',fontWeight:'bold'}} variant="text">Personal</Button></Link><br></br>
            <Link to="/task/official"><Button sx={{marginTop:3.5,color:'white',fontWeight:'bold'}} variant="text">Official</Button></Link><br></br>
            <Link to="/task/others"><Button sx={{marginTop:3.3,color:'white',fontWeight:'bold'}} variant="text">Others</Button></Link><br></br>
            <Link to="/addtask"><Button sx={{marginTop:3,color:'white',fontWeight:'bold'}} variant="text">Add Task</Button></Link><br></br>
            <Button sx={{marginTop:3.1,color:'white',fontWeight:'bold'}} onClick={()=>{
                
                Cookies.remove('Name')
                Cookies.remove('Token')
                navigate('/')
                }} variant="text">Logout</Button>
            <div style={{display:'flex',marginTop:'40px',color:'rgb(151, 195, 225)',fontSize:"12px"}}><CopyrightIcon sx={{marginRight:0.8,fontSize:15}}/><p style={{margin:'0px',marginTop:'1px'}}>2022 Tushar</p></div>
        </Buttons>:null}
      
        </div>
      
        </Div>:null
    )
}