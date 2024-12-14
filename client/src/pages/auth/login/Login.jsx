import React, { useState } from "react";
import dataIcons from "@constans/icons/dataIcons.js";
import IconCustom from "@components/icons/IconCustom.jsx";
import logo from "../../../assets/logo/logo.jpg";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handelClickCheckBox = () => {
    setIsChecked((prev) => !prev);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center h-screen justify-center ">
      <div className=" w-[500px] items-center rounded-lg shadow-lg bg-white">
        <div className=" h-[100px] flex items-center drop-shadow-lg">
          <img src={logo} alt="logo" width="100px" />
        </div>
        <div className=" p-[50px] bg-red-300">
          <div className="bg-violet-200 text-2xl text-center mb-7">Login</div>

          <form className="my-2 ">
            <div className="my-2">
              <div className="h-[40px] flex gap-2 items-center justify-center mb-1">
                <div className="border-solid border-2 border-black h-[40px] w-fit p-2 justify-center items-center">
                  <IconCustom
                    src={dataIcons.profile}
                    width="20"
                    height="20"
                    // className=" ml-2"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Username or email address"
                  className="w-full h-[40px] p-2 border-solid border-2 border-black"
                />
              </div>

              <div className="h-[40px] flex gap-2 items-center justify-center mt-1 relative">
                <div className="border-solid border-2 border-black h-[40px] w-fit p-2 justify-center items-center">
                  <IconCustom
                    src={dataIcons.lock}
                    width="20"
                    height="20"
                    // className="ml-2"
                  />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-[40px] p-2 border-solid border-2 border-black"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3"
                  onClick={toggleShowPassword}
                >
                  <IconCustom
                    src={showPassword ? dataIcons.eyeSlash : dataIcons.eye}
                    width="24"
                    height="24"
                    className="justify-center items-center"
                  />
                </button>
              </div>
            </div>

            {/* Remeber me + Forgot password? */}
            <div className="flex justify-between mx-1">
              <div
                className="flex gap-2 justify-center items-center"
                onClick={handelClickCheckBox}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => e.stopPropagation()}
                  className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                  dark:border-gray-600"
                />
                <label className="cursor-pointer text-center">Remeber me</label>
              </div>

              <a
                href="#"
                className="text-[#0b5ed7] hover:text-[#0D99FF] hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </form>

          {/* Sign In + Create Sign up*/}
          <div className="mt-2 justify-center items-center">
            <div className="mt-2">
              <button
                onClick={() => {}}
                className="bg-[#0D99FF] hover:bg-[#0b5ed7] text-white items-center justify-center w-full rounded-md py-2"
              >
                Sign In
              </button>
            </div>

            <div className="mt-3 text-center">
              {"Not a member? "}
              <a
                href="#"
                className="ml-2 text-[#0b5ed7] hover:text-[#0D99FF] hover:underline"
              >
                Sign Up
              </a>
              {" for an account."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
