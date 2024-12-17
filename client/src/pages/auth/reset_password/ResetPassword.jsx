import React from "react";
import FormInput from "@components/ui/FormInput";

const ResetPassword = () => {
  return (
    <div className="flex items-center h-screen justify-center ">
      <div className=" w-[500px] items-center rounded-lg shadow-lg bg-white drop-shadow-lg">
        <div className=" h-[100px] flex items-center border-b-8">
          {/* <img src={logo} alt="logo" width="100px" className="ml-1" /> */}
          LOGO HERE
        </div>

        <div className=" p-[50px]">
          <FormInput labelInput="Reset Password" typeInput="password" />
          <FormInput labelInput="Password" typeInput="password" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
