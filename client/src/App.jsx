import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Registor from './pages/registor';
import Login from './pages/login';


function App() {


  return (
    <div>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login  />} />
        <Route path="/Dashboard" element={<Dashboard  />} />
        
        <Route path="/register" element={<Registor />} />
      </Routes>
    </div>
  );
}

export default App;
