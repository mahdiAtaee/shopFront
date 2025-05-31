import React from 'react'
import ShopLayout from '@/components/layouts/Shop'
import Filter from '@/components/category/Filter'
import Products from '@/components/products'
import * as API from '@/services/api'
import { AiOutlineOrderedList } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const Search = ({ products, category }) => {
  const [showFilter, setShowFilter] = React.useState(false)
  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  React.useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth <= 480) {
      setShowFilter(false)
    } else {
      setShowFilter(true)
    }
  }, [])
  

  return (
    <ShopLayout title="جست و جو">
      <div className='flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4 mb-4 text-xs md:text-[0.9rem] px-2 cursor-pointer mt-6'>
        <span className='flex items-center gap-2 border-l pl-2 md:hidden' onClick={toggleFilter}>
          <FaFilter />
          فیلتر
        </span>
        <span className='flex items-center gap-2 border-l pl-2'>
          <AiOutlineOrderedList />
          مرتب سازی بر اساس
        </span>
        <div className='flex items-center gap-2 mr-2'>
          <span className='text-blue-400'>
            جدیدترین
          </span>
          <span>
            پرفروش ترین
          </span>
          <span>
            بیشترین تخفیف
          </span>
        </div>
      </div>
      <div className='w-full min-h-dvh flex p-2'>
        <Filter category={category} isShow={showFilter} handleShowFilter={toggleFilter} />
        <Products items={products} />
      </div>
    </ShopLayout>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params

  const products = await API.get(`/products/category/${slug}`)


  return {
    props: {
      products: products && products.data.products,
      category: products && products.data.category
    },
  }
}

export default Search