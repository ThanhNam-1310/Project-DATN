import React from "react";

const Login = () => {
  return (
    <div className="justify-center items-center flex p-10">
      <div className=" w-[500px] h-full justify-center items-center bg-yellow-200">
        <div className=" h-[100px] bg-blue-200">LOGO</div>
        <div className=" p-[50px] bg-red-300">
          <div className="bg-violet-200">Login</div>
          <div className="bg-violet-400">username or email address</div>
          <div className="bg-violet-600">password</div>
          <div className="bg-violet-700">Remeber me + Forgot password?</div>
          <div className="bg-violet-800">Button Sign In</div>
          <div className="bg-violet-900">Button create account?</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
