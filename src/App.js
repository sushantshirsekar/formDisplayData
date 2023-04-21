import React from 'react'; 
import "./App.css";
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './components/Data';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Form />}/>
      <Route path='/data' element={<Data />}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
