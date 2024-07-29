import React from "react";
import { LOGIN_PAGE_BG_IMAGE } from "../constants/images";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_PAGE_BG_IMAGE}
          alt="Background"
          className="h-screen w-full bg-cover bg-center bg-no-repeat"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white flex flex-col rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl pb-10">Login</h1>
        <input
          type="text"
          placeholder="Email address"
          className="p-2 m-2 w-full bg-gray-700 rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700 rounded-md"
        />
        <button className="p-2 m-4 bg-red-700 rounded-xl justify-center">
          Login
        </button>
        <p className="text- center pt-6">
          Don't have an account?{" "}
          <p className="text-blue-500 cursor-pointer">Sign up here</p>
        </p>
      </form>
    </>
  );
};

export default Login;
