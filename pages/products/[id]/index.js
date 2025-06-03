import React from 'react'
import * as API from '@/services/api'
import ShopLayout from '@/components/layouts/Shop'
import SingleProduct from '@/components/products/singleProduct'
import { useRouter } from 'next/router'

const index = ({ product, comments, relatedProducts }) => {

    const router = useRouter()
    if (router.isFallback) {
        return (
            <ShopLayout title="بارگذاری محصول...">
                <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
                    <p className='text-lg md:text-2xl mb-6'>در حال بارگذاری ...</p>
                    <div className='mover'/>
                </div>
            </ShopLayout>
        )
    }

    return (
        <ShopLayout title="مشخصات محصول">
            <SingleProduct product={product} comments={comments} relatedProducts={relatedProducts} />
        </ShopLayout>
    )
}


export async function getStaticProps(context) {
    try {
        const { id } = context.params
        const result = await API.get(`/products/details/${id}`)

        if (!result || !result.data) {
            return { notFound: true };
        }
        const { data } = result;


        return {
            props: {
                product: data && data.product,
                comments: data && data.comments ? data.comments : [],
                relatedProducts: data && data.relatedProducts ? data.relatedProducts : []
            }
        }

    } catch (error) {

        console.error("Error fetching product data:", error);
        if (error.response?.status === 404) {
            return { notFound: true };
        }
        throw error; // Re-throw the error to be handled by Next.js
    }



}

export async function getStaticPaths() {
    try {
        const products = await API.get('/products')

        const paths = products.data.map((product) => ({
            params: { id: product.id }
        }))

        return {
            paths,
            fallback: 'blocking' // or true, depending on your needs
        }

    } catch (error) {
        console.error("getStaticPaths error:", error);
        return {
            paths: [],
            fallback: 'blocking'
        };
    }
}


export default index