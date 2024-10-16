// src/App.tsx
import React from 'react';
import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyTraining from "./Pages/MyTraining/MyTraining";
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Navbar />} /> 
          <Route path="/myTraining" element={<MyTraining />} /> {/* Ensure path is correct */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
