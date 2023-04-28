import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Login = () => {
  // define state variables for phone number and password inputs
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // handle input change for phone number input
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // handle input change for password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // send post request to API with phone number and password inputs
    // replace the URL with your actual API endpoint
    fetch("https://your-api-endpoint.com/login", {
      method: "POST",
      body: JSON.stringify({ phone_number: phoneNumber, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // handle response data from API
        console.log(data);
      })
      .catch((error) => {
        // handle error from API request
        console.error(error);
      });
  };

  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col ">
          <div className="text-2xl font-bold mb-[50px] text-center">Login</div>

          <form onSubmit={handleSubmit}>
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
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
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
                value={password}
                onChange={handlePasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[60px]"
              />
            </div>

            <div className="w-full flex justify-between mb-6">
              <Link href="/signup">Don't have an account?</Link>
            </div>

            <Link
              href="#"
              onClick={handleSubmit}
              className="w-full md:w-[300px] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center mx-auto mt-[25px]"
            >
              Login
            </Link>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
