import './App.css';
import LoginScreen from './Login/LoginScreen.js'
import AdminScreen from './Admin/AdminScreen.js';
import EditScreen from './Admin/EditScreen.js';
import TimeEntryScreen from './TimeEntry/TimeEntryScreen.js';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuth,setIsAuth]=useState(false)
  const[isAdmin,setIsAdmin]=useState(false)
  

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Edit" element={isAuth&&isAdmin? <EditScreen setIsAuth={setIsAuth} setIsAdmin={setIsAdmin}/> : <Navigate to="/"/>} ></Route>
        <Route path="/TimeEntry" element={isAuth? <TimeEntryScreen setIsAuth={setIsAuth}/>:<Navigate to="/"/>}></Route>
        <Route path="/Admin" element={isAuth&&isAdmin? <AdminScreen setIsAuth={setIsAuth} setIsAdmin={setIsAdmin}/>: <Navigate to="/"/>}></Route>
        <Route path="/" element={<LoginScreen setIsAuth={setIsAuth} setIsAdmin={setIsAdmin}/>}></Route>
      </Routes>
    </BrowserRouter>
   
  

  );
}

export default App;