import React from 'react';
import './App.css';
import Login from './Component/Login';
import {Routes,Route} from 'react-router-dom'
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';


function App() {
  return (
   <>
   <Dashboard/>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </>
  );
}

export default App;
