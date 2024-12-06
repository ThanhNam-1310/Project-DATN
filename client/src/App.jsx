import { useState } from "react";

import MyHeader from "@components/header/MyHeader";
import AdminDashboard from "@pages/admin/AdminDashboard";

function App() {
  return (
    <div className="flex-col flex">
      <MyHeader />
      <AdminDashboard />
    </div>
  );
}

export default App;
