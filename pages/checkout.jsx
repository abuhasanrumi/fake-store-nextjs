import React from "react";
import Wrapper from "../components/Wrapper";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Checkout = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div>
          {/* HEADING AND PARAGRAPH START */}
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Checkout
            </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            {/* CART ITEMS START */}
            <div className="flex-[2]">
              <div className="text-lg font-bold mb-6">Shipping Information</div>
              <form action="" className="">
                <div className="mb-6">
                  <label
                    for="default-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="default-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>

                <div className="flex w-full gap-[25px]">
                  <div className="mb-6 grow">
                    <label
                      for="default-input"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="default-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    />
                  </div>
                  <div className="mb-6 flex-grow-1">
                    <label
                      for="default-input"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="default-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    />
                  </div>
                  <div className="mb-6 flex-grow-1">
                    <label
                      for="default-input"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="default-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    />
                  </div>
                </div>

                <div className="w-100 py-3">
                  <div className="flex-column md:flex gap-[20px]">
                    <Link
                      href="/cart"
                      className="w-full md:w-[300px] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center"
                    >
                      Continue to Shoping
                    </Link>
                    <Link
                      href="/"
                      className="w-full md:w-[200px] py-4 rounded-full text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center gap-2"
                    >
                      <BsArrowLeft /> Return to Cart
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            {/* CART ITEMS END */}

            {/* SUMMARY START */}
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summary</div>

              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Total
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    $5123
                  </div>
                </div>
                <div className="text-sm md:text-md py-5 border-t mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta aliquid id numquam eos iure autem voluptate voluptas
                  dolore veniam doloremque magnam minus corporis harum beatae
                  consequuntur, pariatur vel reprehenderit recusandae?
                </div>
              </div>
              {/* BUTTON START */}
              <Link
                href="/success"
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
              >
                <span>Place Order</span>
              </Link>
              {/* BUTTON END */}
            </div>
            {/* SUMMARY END */}
          </div>
          {/* CART CONTENT ENDS */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Checkout;
