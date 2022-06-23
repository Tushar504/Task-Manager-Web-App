import { useParams } from "react-router-dom"
import { TaskPageData ,UpdateTask,DeleteTask,updateSubtask} from "../../redux/action"
import { useDispatch,useSelector } from "react-redux"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import Cookies from "js-cookie"
import { useEffect ,useState} from "react"
import { Sidebar } from "../Sidebar/sidebar";
import "./task.css"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { removeTask } from '../../redux/action';
import CircularProgress from '@mui/material/CircularProgress';

export const Taskpage=()=>{
    const id=useParams().id
    const token=Cookies.get("Token")
    const dispatch=useDispatch()
    const Tasks=useSelector(store=>store.tasks)
    const navigate=useNavigate()
    const [status, setstatus] = useState('all');
    const handleChange = (event) => {
         dispatch(removeTask())
         setstatus(event.target.value);
       };
    useEffect(()=>{
        if(token===undefined) navigate("/") 
        else if(Tasks===undefined ) dispatch(TaskPageData(token,id,status))
      },[id,Tasks])

   return (<div className="PagesOuterSideDiv">
              <div style={{width:'10%',marginRight:'10px'}}>
                     <Sidebar/>   
              </div>
          <div style={{width:'85%'}}>
                     <div className="Sort_Div">
                <FormControl sx={{width:"200px",margin:2,  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;'}}>
                     <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                     <Select labelId="demo-simple-select-label" id="demo-simple-select" value={status} label="Status" onChange={handleChange} >
                          <MenuItem value="all">All</MenuItem>
                          <MenuItem value="pending">Pending</MenuItem>
                          <MenuItem value="completed">Completed</MenuItem>
                     </Select>
                </FormControl><br></br>
               <Chip sx={{backgroundColor:'rgb(25,118,210)', color:"white", margin:1.5,fontWeight:'bold'}} label={`${id.toUpperCase()}-TASKS`} variant="outlined" /><br></br>
               {Tasks!==undefined?Tasks.length!==0?<div className="PagesMainDiv">
                 {Tasks.map((ele)=>{
                    return <div className="pagesTaskDiv" key={ele._id}>
                                 <Chip sx={{backgroundColor:'rgb(25,118,210)', color:"white", marginTop:1.4}} avatar={<Avatar alt={ele.tag} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThu7m6UZ6dq-GqGoHo7xGlw-TIwXdx4eB0eg&usqp=CAU' />}label={ele.tag.toUpperCase()}variant="outlined"/>
                                 {ele.status==="completed"? <Chip sx={{backgroundColor:'rgb(25,118,210)', color:"white", marginTop:1.4,fontWeight:'bold'}} label={ele.status.toUpperCase()} variant="outlined"/>: <Chip sx={{backgroundColor:'red', color:"white", marginTop:1.4,fontWeight:'bold'}} label={ele.status.toUpperCase()} variant="outlined" />}
                                 <h6 className="Date">Date: {ele.date.split("-").reverse().join("-")}</h6>
                                 <p className="Headings">Task Title:</p>
                                 <p className="TaskTitle">{ele.title}</p>
                                 <p className="Headings">Description:</p>
                                 <p className="TaskTitle">{ele.description}</p>
                                <div>
                                     <p className="Headings">Subtasks:</p>
                                                 {ele.subtasks.map((e)=>{
                                                     return <div className="PagesSubDiv" key={e._id}>
                                                          {e.status==="completed" ? <input onChange={()=>{
                                                              var data
                                                                if(e.status==="pending"){
                                                                        data={title:e.title,
                                                                              status:"completed"}
                                                                 }
                                                                else{
                                                                    data={ title:e.title,
                                                                          status:"pending"}
                                                                }
                                                               dispatch(updateSubtask(ele._id,e._id,status,token,id,data))
                                                          }} type="checkbox" checked/>:<input onChange={()=>{
                                                              var data
                                                                if(e.status==="pending"){
                                                                    data={title:e.title,
                                                                          status:"completed"}
                                                                 }
                                                                 else{
                                                                     data={title:e.title,
                                                                          status:"pending"}
                                                                 }
                                                              dispatch(updateSubtask(ele._id,e._id,status,token,id,data))
                                                          }} type="checkbox"/>}
                                                          <p style={{fontSize:'15px', margin:0}}>{e.title}</p>
                                                     </div>
                                                 })}
                                    </div>

                            <Button onClick={()=>{
                                var data
                                if(ele.status==="pending"){
                                    data={status:"completed"}
                                }
                                else{
                                    data={status:"pending"}
                                }
                                dispatch(UpdateTask(ele._id,status,token,id,data))
                            }} sx={{margin:1,fontSize:12,fontWeight:'bold'}} variant="contained">{ele.status==="pending"?"Mark Completed":"Mark Pending"}</Button>
                           <Button onClick={()=>{
                               dispatch(DeleteTask(ele._id,status,token,id))
                            }} sx={{margin:1,fontSize:12,fontWeight:'bold'}} variant="contained">Delete</Button>
                   </div>
                })}
    </div>: <div className="Gif">
           <img src="https://i.pinimg.com/originals/54/9c/da/549cda1af3271de62a61bce0dc9309e8.gif" alt="Empty"/>
          <h1>Empty</h1>
     </div>:<div style={{width:'100%',textAlign:'center',marginTop:'50px'}}><CircularProgress  color="success" /></div>}
    </div>
    </div>
    </div>)
}