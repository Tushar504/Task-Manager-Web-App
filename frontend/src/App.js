
import './App.css';

import {Register} from "./components/register"
import {Login} from "./components/login"
import { authenticate } from './redux/action';
import {Routes,Route} from "react-router-dom";
import {useDispatch} from "react-redux"
import {All} from "./components/All"

function App() {
  let token=localStorage.getItem("Token")
 
  const dispatch=useDispatch()
  if(token!==null){
    dispatch(authenticate(token))
 
  
  }
  
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<All/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<All />} />
      </Routes>
   
        
    </div>
  );
}

export default App;
