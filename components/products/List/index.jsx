'use client'
import * as API from '@/services/api'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { useRouter } from 'next/router'



const ProductList = ({ products }) => {
    const [productList, setProductList] = useState(products ? products : [])
    const router = useRouter()

    useEffect(() => {

        const query = router.query
        const getFilteredProducts = async () => {
            try {
                const products = await API.get(`/products/category/${query.slug}?${(new URLSearchParams(query).toString())}`)
                
                if (products) {
                    if (products.data.products.length === 0) {
                        setProductList([])
                        return
                    }
                    
                    setProductList(products.data.products)
                }
            } catch (error) {
                console.log("Error fetching products:", error);
                setProductList([])
            }
        }
        getFilteredProducts()

    }, [router.query])

    return (
        <section className="section-gap">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x !divide-y divide-gray-200">
                {productList && productList.map((product) => (
                    <div key={product.id} className='searchProduct min-h-96 hover:shadow-xl transition-shadow duration-300'>
                        <ProductItem {...product} />
                    </div>
                ))}
            </div>
        </section>

    )
}

export default ProductList