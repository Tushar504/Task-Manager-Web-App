import Button from '@mui/material/Button';
import  styled  from "styled-components";
import { useSelector } from 'react-redux';
const Div=styled.div`
 width:300px;
 border:1px solid red;
 text-align:center;
 background-color:azure;

 height:800px


`
const Img=styled.img`
width:150px;
height:150px;
border-radius:200px;
margin-top:10px`
export const Sidebar=()=>{
    const username=useSelector(store=>store.user.user.name)
    return (
        <Div>
        <Img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'/>
        <h2>welcome {username}</h2>
        <Button variant="text">All</Button><br></br>
        <Button variant="text">Personal</Button><br></br>
        <Button variant="text">Official</Button><br></br>
        <Button variant="text">Others</Button>
        </Div>
    )
}