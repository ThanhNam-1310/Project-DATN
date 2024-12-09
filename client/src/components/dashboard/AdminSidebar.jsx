import React from "react";
import dataIcons from "@constans/icons/dataIcons";
import { NavLink } from "react-router";
import IconCustom from "@components/icons/IconCustom";

const AdminSidebar = () => {
  return (
    <div className="bg-yellow-400 flex-col h-screen w-[250px]">
      <aside className="flex-1 ">
        <div className="p-3">
          <div>
            <IconCustom src={dataIcons.dashboard} />
            <span>Dashboard</span>
          </div>

          <div>
            <IconCustom src={dataIcons.projects} />
            <span>Project</span>
          </div>

          <div>
            <IconCustom src={dataIcons.employee} />
            <span>Employee</span>
          </div>

          <div>
            <IconCustom src={dataIcons.tasks} className="rotate-[10deg]" />
            <span>Task</span>
          </div>

          <div>
            <IconCustom src={dataIcons.envlope} />
            <span>Message</span>
          </div>

          <div>
            <IconCustom src={dataIcons.dashboardSetting} />
            <span>Setting</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
