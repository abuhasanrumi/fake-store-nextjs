import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import axios from "axios";
import Link from "next/link";

const Cart = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products?limit=3`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {data.length > 1 ? (
          <div>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {isLoading && <p>Loading...</p>}
                {!isLoading &&
                  data &&
                  data.map((product) => (
                    <CartItem key={product.id} data={product} />
                  ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
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
                  href="/checkout"
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                >
                  Checkout
                </Link>
                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT ENDS */}
          </div>
        ) : (
          <div>
            {/* NO CART PRODUCT SECTION START  */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[170px]">
              <div className="text-[28px] md:text-[34px] mb-10 font-semibold">
                No products in cart
              </div>
              <div className="text-md md:text-xl mb-[50px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quam dicta, sint delectus vero maxime ad neque doloribus
                expedita placeat!
              </div>
              {/* BUTTON START */}
              <Link
                href="/"
                className="w-full md:w-[300px] py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center mx-auto"
              >
                Continue Shopping
              </Link>
              {/* BUTTON END */}
            </div>
            {/* NO CART PRODUCT SECTION END  */}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
