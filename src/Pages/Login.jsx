import React from "react";

const Login = () => {
  return (
    <div className="text-center my-28 w-2/4 px-48 mx-auto ">
      <h1 className="text-2xl font-bold py-14">Login Page</h1>
      <div className="shadow-lg rounded-lg  p-4 h-[300px]">
        <div className="pt-4">
          <input
            type="text"
            placeholder="email"
            className="border w-9/12  border-[#6c9ef0] rounded-2xl p-2  text-center "
          />
        </div>
        <div className="my-12">
          <input
            placeholder="password"
            type="password"
            className="border w-9/12 border-[#6c9ef0] rounded-2xl p-2  text-center "
          />
        </div>
        <button className="bg-[#6c9ef0] w-9/12 rounded-2xl p-2 text-white">Login</button>
      </div>
    </div>
  );
};

export default Login;
