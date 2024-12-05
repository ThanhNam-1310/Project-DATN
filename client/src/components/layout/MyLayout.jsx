import React from "react";

const MyLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-screen h-[60px] bg-[#392196]">{children}</div>
    </div>
  );
};

export default MyLayout;
