import React from "react";
import IconCustom from "@components/icons/IconCustom";
import dataIcons from "@constans/icons/dataIcons";
import Flyout from "./flyout/Flyout";
import AvatarDropDown from "./user/AvatarDropDown";

const MyHeader = () => {
  return (
    <div className="flex justify-between items-center w-screen h-[60px] bg-[#392196] pl-20 pr-20 shadow-xl">
      <div className="flex justify-center items-center">
        {/* Logo Here */}
        <div className="text-base text-white w-[170px] items-center justify-center">
          LOGO
        </div>

        {/* Nav-close */}
        <div>
          <IconCustom
            src={dataIcons.navClose}
            width="35"
            height="35"
            className="flex items-center justify-center"
          />
        </div>

        {/* Dropdown here */}
        <div className="flex gap-7 ml-6">
          <Flyout href="#">Môi trường làm việc</Flyout>
          <Flyout href="#">Gần đây</Flyout>
          <Flyout href="#">Đã lưu</Flyout>
        </div>
      </div>

      <div className="flex justify-center items-center  gap-10">
        {/* BoxIcons here */}
        <div className="p-0 m-0 flex items-center justify-center gap-4">
          <div className="border-solid border-2  hover:bg-gray-300 border-white rounded-full p-2 flex gap-3 justify-center items-center">
            <button className="flex justify-center items-center gap-3">
              <span className="border border-solid border-white h-6 rounded-md px-px bg-white items-center justify-center">
                Ctrl K
              </span>
              <h3 className="text-center text-white">Search</h3>
              <IconCustom
                src={dataIcons.search}
                width="24"
                height="24"
                className="p-1 bg-[#F5F5F5] flex items-center justify-center rounded-full"
              />
            </button>
          </div>

          <button className="flex items-center justify-center p-1 rounded-full bg-[#F5F5F5] hover:bg-gray-300 hover:rotate-[30deg] transition transform ">
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

function clickButtonSearch() {
  return (
    <div className="pl-28">
      <input></input>
    </div>
  );
}

export default MyHeader;
