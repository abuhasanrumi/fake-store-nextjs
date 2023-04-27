import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col ">
          <div className="text-2xl font-bold mb-[50px] text-center">
            Register
          </div>

          <div class="mb-6">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[60px]"
            />
          </div>

          <div class="mb-6">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[60px]"
            />
          </div>

          <div class="mb-6">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[60px]"
            />
          </div>

          <div className="w-full flex justify-between mb-6">
            <Link href="admin-login">Are you an admin?</Link>
            <Link href="admin-login">Don't have an account?</Link>
          </div>

          <Link
            href="/user-dashboard"
            className="w-full md:w-[300px] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center mx-auto mt-[25px]"
          >
            Sign Up
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Signup;
