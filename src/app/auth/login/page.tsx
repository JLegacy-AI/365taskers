import login from "../../../assets/login.png";
import Image from "next/image";
import React from "react";


const Login = () => {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full mx-4">
          {/* Left: Login Form */}
          <div className="bg-[#FBFFFA] w-full md:w-1/2 p-8 border-[#F0FEEB]">
            <div className="flex flex-col items-center justify-center mb-10">
              <h2 className="text-[40px] font-bold text-center">Login</h2>
              <div className="flex items-center justify-center gap-3">
                <p className="text-[#70726F] text-[21px] font-semibold border-b border-[#B9B5B5]">
                  Email
                </p>
                <p className="text-[#AAAAA9] text-[21px] font-semibold">
                  Number
                </p>
              </div>
            </div>

            <form>
              <div className="mb-4">
                <label
                  className="block text-[#3F4346] text-[20px] font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="shadow appearance-none border rounded-[28px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#3F4346] text-[20px] font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-[28px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <p className="text-center">Forgot password?</p>
              </div>

              <div className="flex flex-col items-center justify-between">
                <button
                  className="bg-[#70726F] w-full text-[16px] text-[#FFFFFF] font-semibold py-2 px-4 rounded"
                  type="button"
                >
                  Login
                </button>
                <p className="text-[16px] font-semibold mt-4">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="text-blue-500">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block w-full md:w-1/2 h-full">
            <Image
              src={login}
              alt="Login Illustration"
              className="rounded-r-lg object-cover h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
