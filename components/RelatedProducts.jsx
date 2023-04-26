import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ category }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(data);
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      {/* <Carousel
        // responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      > */}
      {data.map(
        (product) => console.log(product)
        // <ProductCard key={product?.id} product={product} />
      )}
      {/* </Carousel> */}
    </div>
  );
};

export default RelatedProducts;
