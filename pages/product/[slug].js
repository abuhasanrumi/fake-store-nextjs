import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ProductDetails = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            setIsLoading(true);
            axios
                .get(`https://fakestoreapi.com/products/${slug}`)
                .then((response) => {
                    setProduct(response.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setIsLoading(false);
                });
        }
    }, [slug]);

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {isLoading && <p>Loading...</p>}
                {!isLoading && product && (
                    <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                        {/* left column start */}
                        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 p-6 bg-gray-100">
                            <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] p-6'>
                                <InnerImageZoom
                                    className='mx-auto'
                                    src={product.image}
                                    zoomScale={1.5}
                                    zoomType='hover'
                                    alt={product.title}
                                    height={100}
                                    width={500}
                                />
                            </div>
                        </div>
                        {/* left column end */}

                        {/* right column start */}
                        <div className="flex-[1] py-3">
                            {/* PRODUCT TITLE */}
                            <div className="text-[34px] font-semibold mb-2 leading-tight">
                                {product.title}
                            </div>

                            <div className="price-section mt-4">
                                {/* PRODUCT PRICE */}
                                <div className="flex items-center ">
                                    <p className="mr-2 text-lg font-semibold text-red-600">
                                        MRP : ${product.price}
                                    </p>
                                </div>

                                <div className="text-md font-medium text-black/[0.5]">
                                    incl. of taxes
                                </div>
                                <div className="text-md font-medium text-black/[0.5] mb-10">
                                    {`(Also includes all applicable duties)`}
                                </div>
                            </div>

                            {/* ADD TO CART BUTTON START */}
                            <button
                                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            >
                                Add to Cart
                            </button>
                            {/* ADD TO CART BUTTON END */}

                            {/* WHISHLIST BUTTON START */}
                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                                Whishlist
                                <IoMdHeartEmpty size={20} />
                            </button>
                            {/* WHISHLIST BUTTON END */}

                            <div>
                                <div className="text-lg font-bold mb-5">
                                    Product Details
                                </div>
                                <div className="markdown text-md mb-5">
                                    <ReactMarkdown>{product.description}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                        {/* right column end */}
                    </div>
                )}

                <RelatedProducts category={!isLoading && product && product.category} />
            </Wrapper>
        </div>
    )
}

export default ProductDetails
