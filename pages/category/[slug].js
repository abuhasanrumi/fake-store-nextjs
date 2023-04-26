import stringToSlug, { slugToString } from '@/Utils/slugify';
import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [catData, setCatData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${slug}`)
            .then((response) => {
                setCatData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [slug]);
    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {slugToString(slug)}
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {catData?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}

            </Wrapper>
        </div>
    )
}

export default Category