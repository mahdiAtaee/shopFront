/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import * as api from '@/services/api'
import Filter from '@/components/category/Filter'
import ProductItem from '@/components/category/ProductItems'
import ShopLayout from '@/components/layouts/Shop'
import { useRouter } from 'next/router'
import { notFound } from 'next/navigation'

const Category = ({ products, category }) => {
    const [productList, setProductList] = React.useState(products)
    const router = useRouter()
    const { slug } = router.query
    useEffect(() => {
        api.get(`/categories/${slug}/products?${new URLSearchParams(router.query).toString()}`)
            .then((response) => {
                if (response.status == 200) {
                    setProductList(response.data.products)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [router.query])


    if (router.isFallback) {
        return (
            <ShopLayout title="بارگذاری محصول...">
                <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
                    <p className='text-lg md:text-2xl mb-6'>در حال بارگذاری ...</p>
                    <div className='mover' />
                </div>
            </ShopLayout>
        )
    }
    
    return (
        <ShopLayout title="دسته بندی">
            <div className='container my-5 py-5'>
                <div className='row'>
                    <Filter category={category} />
                    <ProductItem products={productList} />
                </div>
            </div>
        </ShopLayout>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params

    try {
        response = await api.get(`/categories/${slug}/products`)

        return {
            props: {
                products: response.status == 200 ? response.data.products : [],
                category: response.status == 200 ? response.data.category : []
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                notFound: true
            }
        }
    }

}


export async function getStaticPaths() {
    try {
        const response = await api.get('/categories')
        const paths = response.data.categories.map(category => ({
            params: { slug: category.slug }
        }))

        return {
            paths,
            fallback: 'blocking'
        }
    } catch (error) {
        return {
            paths: [],
            fallback: 'blocking'
        }
        console.log(error)
    }

}


export default Category