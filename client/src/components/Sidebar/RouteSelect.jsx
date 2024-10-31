import React from "react";
import { FaHome, FaBuilding, FaUsers, FaToolbox, FaEnvelope } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import Property from "../../pages/properts";
import Home from "../../pages/Home";

const RouteSelect = () => {
  return (
    <div className="space-y-1">
      {/* Sidebar Buttons */}
      <SidebarButton selected={true} Icon={FaHome} title="Dashboard" path="/Dashboard" />
      <SidebarButton selected={false} Icon={FaBuilding} title="Properties" path="/property" />
      <SidebarButton selected={false} Icon={FaUsers} title="Tenants" path="/tenants" />
      <SidebarButton selected={false} Icon={FaToolbox} title="Maintenance" path="/maintenance" />
      <SidebarButton selected={false} Icon={FaEnvelope} title="Contacts" path="/contacts" />

      {/* Routes */}
      <Routes>
        <Route path="/Dashboard" element={<Home/>} />
        <Route path="/property" element={<Property />} />
        <Route path="/tenants" element={<div>Tenants Page</div>} />
        <Route path="/maintenance" element={<div>Maintenance Page</div>} />
        <Route path="/contacts" element={<div>Contacts Page</div>} />
      </Routes>
    </div>
  );
};

// Custom Button Component for Sidebar Navigation
const SidebarButton = ({ selected, Icon, title, path }) => {
  return (
    <Link to={path} className="w-full">
      <button
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
          selected
            ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
        }`}
      >
        <Icon className={selected ? "text-violet-500" : ""} />
        <span>{title}</span>
      </button>
    </Link>
  );
};

export default RouteSelect;
