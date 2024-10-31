import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Registor from './pages/registor';
import Login from './pages/login';
import Home from './pages/Home';
import Property from './pages/properts';
import AddPropertyForm from './components/property/AddPropertyForm';
import EditPropertyForm from './components/property/EditPropertyForm';

function App() {
  

  return (
    <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path='/Dashboard' element ={<Home/>} />
          <Route path='/property' element={<Property/>} />
          <Route path="/AddPropertyForm" element={<AddPropertyForm/>} />
          <Route path="/EditPropertyForm/:id" element={<EditPropertyForm />} />
          <Route path="/register" element={<Registor />} />
        </Routes>
    </div>
  );
}

export default App;
