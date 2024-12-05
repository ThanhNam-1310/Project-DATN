import React from "react";
import IconCustom from "@components/icons/IconCustom";
import dataIcons from "@constans/icons/dataIcons";
import Flyout from "./flyout/Flyout";
import AvatarDropDown from "./user/AvatarDropDown";

const MyHeader = () => {
  return (
    <div className="flex justify-between items-center w-screen h-[60px] bg-[#392196] pl-20 pr-20 shadow-xl">
      <div className="flex justify-center items-center gap-14">
        {/* Logo Here */}
        <div className="text-base text-white">LOGO</div>

        {/* Dropdown here */}
        <div className="flex gap-7">
          <Flyout href="#">Môi trường làm việc</Flyout>
          <Flyout href="#">Gần đây</Flyout>
          <Flyout href="#">Đã lưu</Flyout>
        </div>
      </div>

      <div className="flex justify-center items-center   gap-10">
        {/* BoxIcons here */}
        <div className="p-0 m-0 flex items-center justify-center gap-4">
          <div className="border-solid border-2 border-white rounded-full p-2 flex gap-3 justify-center items-center">
            <h3 className="text-center text-white">Search</h3>
            <span className="border border-solid border-white h-6 rounded-md px-px bg-white items-center justify-center">
              Ctrl K
            </span>
            <button className="hover:bg-gray-300 bg-[#F5F5F5] flex items-center justify-center p-1 rounded-full">
              <IconCustom src={dataIcons.search} />
            </button>
          </div>

          <button className="flex items-center justify-center p-1 rounded-full bg-[#F5F5F5] hover:bg-gray-300">
            <IconCustom src={dataIcons.bell} />
          </button>
        </div>

        {/* Avatar users here */}
        <div className="flex justify-center items-center gap-5">
          <div className="text-white">Hello, Nam</div>
          <AvatarDropDown />
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
