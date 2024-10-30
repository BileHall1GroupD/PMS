import React from "react";
import { FaHome, FaBuilding, FaUsers, FaClipboard, FaToolbox, FaEnvelope } from "react-icons/fa"; // Using FontAwesome Icons


const RouteSelect = () => {
  return (
    <div className="space-y-1">
    <Route Icon={FaHome} selected={true} title="Dashboard" />
    <Route Icon={FaBuilding} selected={false} title="Properties" />
    <Route Icon={FaUsers} selected={false} title="Tenants" />
    <Route Icon={FaToolbox} selected={false} title="Maintenance" />
    <Route Icon={FaEnvelope} selected={false} title="Contacts" />
  </div>
  
  );
};

const Route = ({ selected, Icon, title }) => {
  return (
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
  );
};

export default RouteSelect;
