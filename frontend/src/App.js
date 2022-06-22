
import './App.css';
import { Sidebar } from "./components/Sidebar/sidebar"
import {Register} from "./components/Register/register"
import {Login} from "./components/Login/login"
import {AddTask} from "./components/AddTask/AddTask"
import { Taskpage } from './components/TasksPages/task';
import {Routes,Route} from "react-router-dom";

import {Home} from "./components/Home/home"



function App() {
  
 return (
    <div className="App">
     
      
      <Routes >
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      
      <Route path="/register" element={<Register />} />
      <Route path="/addtask" element={<AddTask />} />
      <Route path="/task/:id" element={<Taskpage />} />
      </Routes>
   
     
    </div>
  );
}

export default App;
