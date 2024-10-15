import login from "../../../assets/login.png";
import Image from "next/image";
import { FiUser, FiLock } from "react-icons/fi";

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
                <div className="flex items-center border border-[#B9BBB8] rounded-[28px] w-full py-2 px-3">
                    <FiUser className="text-gray-500 mr-2" />
  <input
    className="flex-1 bg-transparent text-gray-700 leading-tight focus:outline-none"
    id="email"
    type="email"
    placeholder="Enter your email"
  />
</div>

              </div>
              <div className="mb-4">
                <label
                  className="block text-[#3F4346] text-[20px] font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                
                <div className="flex items-center border border-[#B9BBB8] rounded-[28px] w-full py-2 px-3">
  <FiLock className="text-gray-500 mr-2" />
  <input
    className="flex-1 bg-transparent text-gray-700 leading-tight focus:outline-none"
    id="password"
    type="password"
    placeholder="Enter your password"
  />
</div>
                <p className="text-center text-[16px] text-[#3F4346] font-semibold mt-2">Forgot password?</p>
              </div>

              <div className="flex flex-col items-center justify-between mt-8">
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
