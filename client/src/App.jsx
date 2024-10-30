import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Registor from './pages/registor';
import Login from './pages/login';
import Home from './pages/Home';

function App() {
  

  return (
    <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path='/Dashboard' element ={<Home/>} />
          <Route path="/register" element={<Registor />} />
        </Routes>
    </div>
  );
}

export default App;
