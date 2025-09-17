import React from 'react';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Login from './Components/Login';
import Signup from './Components/Signup';
import HomePage from './Components/Homepage';
import './auth.css'
function App() {
  return (
    <>
    <Header/>
    <Routes> 
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

    </Routes>
    </>
  
  )
}

export default App;
