import React, { useState } from "react";
import dataIcons from "@constans/icons/dataIcons.js";
import IconCustom from "@components/icons/IconCustom.jsx";

const FormInput = ({
  labelInput,
  typeInput,
  placeholderInput = " ",
  isRequired = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = typeInput === "password";
  const isShowPass =
    typeInput === "password" && showPassword ? "text" : typeInput;

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex my-3 gap-3">
      <div className="flex items-center justify-end w-[150px]">
        <label className="text-base">
          {labelInput} {isRequired && <span className="text-red-600">*</span>}
        </label>
      </div>
      <div className="relative flex-1 ">
        <input
          type={isShowPass}
          placeholder={placeholderInput}
          className="p-[10px] w-full  h-[40px] border-solid border-2 rounded-md border-[#999] focus:ring
          focus:outline-none focus:border-[#3B8FF0] transition-colors duration-200 ease-in-out"
        />
        {isPassword && (
          <button
            onClick={handleShowPass}
            className=" absolute inset-y-0 right-3"
          >
            <IconCustom
              src={showPassword ? dataIcons.eyeSlash : dataIcons.eye}
              width="24"
              height="24"
              className="justify-center items-center"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
