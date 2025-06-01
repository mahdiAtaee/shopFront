import React from 'react'
import * as API from '@/services/api'
import ShopLayout from '@/components/layouts/Shop'
import SingleProduct from '@/components/products/singleProduct'

const index = ({ product, comments, relatedProducts }) => {
    return (
        <ShopLayout title="فروشگاه تک">
            <SingleProduct product={product} comments={comments} relatedProducts={relatedProducts} />
        </ShopLayout>
    )
}


export async function getStaticProps(context) {
    const { id } = context.params

    try {
        const product = await API.get(`/products/${id}`)
        const comments = await API.get(`/products/${id}/comments`)

        let relatedProducts = []
        if (product.status == 200 && product.data && product.data.category != null) {
            const slug = product.data.category.slug;
            const rel = await API.get(`/categories/${slug}/products`);
            relatedProducts = rel?.data || [];
        }

        console.log("product in getStaticProps:", product);
        console.log("comments in getStaticProps:", comments);
        console.log("relatedProducts in getStaticProps:", relatedProducts);
        

        return {
            props: {
                product: product?.data,
                comments: comments?.data ? comments.data : [],
                relatedProducts: relatedProducts?.data ? relatedProducts.data : []
            }
        }

    } catch (error) {
        if (error.response?.status === 404) {
            return { notFound: true };
        }
        console.error("Error fetching product data:", error);
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