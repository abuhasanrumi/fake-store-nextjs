import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data }) => {
  const { id, title, category, description, image, rating, price } = data;
  return (
    <Link
      href={`/product/${id}`}
      className="transform overflow-hidden duration-200 hover:scale-105 cursor-pointer"
    >
      <div className="relative h-[300px] p-6 bg-gray-100 ">
        <Image
          className="object-contain mx-auto h-full"
          src={image}
          alt={title}
          height={300}
          width={300}
        />
      </div>
      <div className="p-4 text-black/[0.9] flex justify-between gap-10">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="mr-2 text-xl font-semibold text-red-600">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
