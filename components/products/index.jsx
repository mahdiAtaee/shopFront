/* eslint-disable react/prop-types */
import React from 'react'
import ProductList from './List'


const Products = ({ items }) => {
  return (
    <div className='flex-4/5'>
      <ProductList products={items} />
    </div>
  )
}

export default Products