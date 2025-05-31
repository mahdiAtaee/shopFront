/* eslint-disable react/prop-types */
import React from 'react'
import ProductItem from './ProductItem'


const ProductList = ({ products }) => {
    return (
        <section className="section-gap">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x !divide-y divide-gray-200">
                {products.map((product) => (
                    <div key={product.id} className='searchProduct min-h-96 hover:shadow-xl transition-shadow duration-300'>
                        <ProductItem {...product} />
                    </div>
                ))}
            </div>
        </section>

    )
}

export default ProductList