import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductArea = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>{console.log(data)}</div>;
};

export default ProductArea;
