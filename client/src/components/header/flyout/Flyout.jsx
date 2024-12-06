import React, { useEffect, useRef, useState } from "react";
import IconCustom from "@components/icons/IconCustom";
import dataIcons from "@constans/icons/dataIcons";
import FlyoutContent from "./FlyoutContent";

const Flyout = ({ children, href }) => {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const flyoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (flyoutRef.current && !flyoutRef.current.contains(event.target)) {
        setIsOpen(isOpen);
      }
    };

    // Thêm sự kiện click bên ngoài
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      // Gỡ bỏ sự kiện khi component unmount
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  // Example.
  // const dropdownItems = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const dropdownItems = [];

  return (
    <div
      ref={flyoutRef}
      className="relative h-fit w-fit flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        href={href}
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-white"
      >
        {children}
        <span
          style={{
            transform: hover || isOpen ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 
          origin-left bg-white transition-transform 
          duration-300 ease-out rounded-full"
        />
        <IconCustom src={dataIcons.dropDown} color="white" className=" ml-2" />
      </button>

      {isOpen && <FlyoutContent items={dropdownItems} />}
    </div>
  );
};

export default Flyout;
