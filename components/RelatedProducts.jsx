import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ category }) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (category) {
      setIsLoading(true);
      axios
        .get(`https://fakestoreapi.com/products/category/${category}?limit=3`)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [category]);

  console.log(data);
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          data &&
          data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
