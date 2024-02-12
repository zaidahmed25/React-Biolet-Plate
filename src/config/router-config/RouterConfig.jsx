import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../../screens/login/Login'
import Register from "../../screens/register/Register";
import Dashboard from "../../screens/dashboard/Dashboard";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
