import React from 'react';
import './App.css';
import Login from './Component/Login';
import {Routes,Route} from 'react-router-dom'
import Register from './Component/Register';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </>
  );
}

export default App;
