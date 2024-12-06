import React, { useRef, useState, useEffect } from "react";
import IconCustom from "@components/icons/IconCustom";
import dataIcons from "@constans/icons/dataIcons";
import dataItems from "@constans/menu/dataDropItem";

const AvatarDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(open);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropDownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-1 bg-gray-300 rounded-full justify-center items-center m-0"
      >
        <IconCustom src={dataIcons.user} width="30" height="30" />
      </button>

      {/* Nội dung của dropdown khi ấn vào avatar user */}
      {open && (
        <div className="absolute right-0 mt-3 w-40 bg-[#EBECF0] border border-gray-200 rounded-md shadow-lg z-50 origin-left translate-x-1/4">
          <div>
            {/* Tên, chức vụ, trạng thái hoạt động(đang hoạt động, chờ, không làm phiền) người dùng */}
          </div>
          <ul className="py-1">
            {dataItems.map((items) => (
              <li
                key={items.id}
                className="flex items-center px-4 py-2 hover:bg-white cursor-pointer"
              >
                <IconCustom src={items.icon} />
                <span className="ml-3 text-sm text-gray-700">
                  {items.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropDown;
