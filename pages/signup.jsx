import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Signup = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle form submission here
  };

  return (
    <div className="min-h-[750px] flex items-center">
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col ">
            <div className="text-2xl font-bold mb-[50px] text-center">
              Register
            </div>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[60px]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[60px]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[60px]"
              />
            </div>

            <div className="w-full flex justify-between mb-6">
              <Link href="/login">Already have an account?</Link>
            </div>

            <Link
              href="/user-dashboard"
              type="submit"
              className="w-full md:w-[300px] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center mx-auto mt-[25px]"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Signup;
