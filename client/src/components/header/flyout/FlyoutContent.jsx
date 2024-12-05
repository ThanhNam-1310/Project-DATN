import React from "react";

const FlyoutContent = ({ items }) => {
  return (
    <div className="absolute top-full mt-2 w-max bg-white shadow-md rounded-md">
      {items && items.length > 0 ? (
        <ul className="flex flex-col p-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center">Emty</div>
      )}
    </div>
  );
};

export default FlyoutContent;
