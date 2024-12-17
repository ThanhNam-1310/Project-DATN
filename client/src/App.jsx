import { useState } from "react";

import MyHeader from "@components/header/MyHeader";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminDashboard from "@pages/admin/AdminDashboard.jsx";
import EmployeeDashboard from "@pages/employee/EmployeeDashboard.jsx";
import Login from "@pages/auth/login/Login.jsx";
import ResetPassword from "@pages/auth/reset_password/ResetPassword.jsx";
import RegisterAccount from "@pages/auth/register/RegisterAccount";

function App() {
  return (
    <div className="flex-col h-screen bg-gradient-to-bl from-[#FF057C] via-[#8D0B93] via-50% to-[#321575]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHeader />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterAccount />} />
          <Route path="/resetPass" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
