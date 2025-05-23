import './App.css';
import LoginScreen from './Login/LoginScreen.js'
import AdminScreen from './Admin/AdminScreen.js';
import EditScreen from './Admin/EditScreen.js';
import TimeEntryScreen from './TimeEntry/TimeEntryScreen.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Edit" element={<EditScreen/>}></Route>
        <Route path="/Admin" element={<AdminScreen/>}></Route>
        <Route path="/TimeEntry" element={<TimeEntryScreen/>}></Route>
        <Route path="/" element={<LoginScreen/>}></Route>
      </Routes>
    </BrowserRouter>
   
  

  );
}

export default App;
