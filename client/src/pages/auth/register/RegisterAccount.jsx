import React from "react";
import FormInput from "@components/ui/FormInput";

const RegisterAccount = () => {
  return (
    <div className="flex items-center h-screen justify-center ">
      <div className=" w-[500px] items-center rounded-lg shadow-lg bg-white drop-shadow-lg">
        <div className=" h-[100px] flex items-center border-b-8">
          {/* <img src={logo} alt="logo" width="100px" className="ml-1" /> */}
          Create an Account
        </div>

        <div className=" px-[50px] pb-8">
          <FormInput labelInput="Fullname" typeInput="text" isRequired />
          <FormInput labelInput="Username" typeInput="text" isRequired />
          <FormInput labelInput="Email" typeInput="email" isRequired />
          <FormInput labelInput="Password" typeInput="password" isRequired />
          <FormInput
            labelInput="Confirm Password"
            typeInput="password"
            isRequired
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterAccount;
