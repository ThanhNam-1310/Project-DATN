import React from "react";
import dataIcons from "@constans/icons/dataIcons";
import { NavLink } from "react-router";
import IconCustom from "@components/icons/IconCustom";

const AdminSidebar = () => {
  return (
    <div className="bg-yellow-400 flex-col h-screen w-1/5 p-3">
      <aside className="flex-1 ">
        <div>
          <IconCustom src={dataIcons.dashboard} />
          <span>Dashboard</span>
        </div>

        <div>
          <IconCustom src={dataIcons.employee} />
          <span>Employee</span>
        </div>

        <div>
          <IconCustom src={dataIcons.dashboardSetting} />
          <span>Setting</span>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
