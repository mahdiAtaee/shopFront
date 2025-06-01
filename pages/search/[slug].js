import React from 'react'
import ShopLayout from '@/components/layouts/Shop'
import Filter from '@/components/category/Filter'
import Products from '@/components/products'
import * as API from '@/services/api'
import { AiOutlineOrderedList } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const Search = ({ products, category, notFound }) => {
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

  if (notFound) {
    return (
      <ShopLayout title="جست و جو">
        <div className='w-full min-h-dvh flex p-2'>
          <div className={`flex-1/5 rounded-xl border border-gray-200 p-4 min-h-max w-full h-[95dvh] md:h-auto bg-white fixed md:relative top-0 right-0 md:top-auto md:right-auto z-10 overflow-y-auto ${showFilter ? 'block' : 'hidden'}`}>
            <p className='text-xs text-red-300 text-center'>خطایی رخ داده!</p>
            <button className='py-2 px-4 rounded text-red-300 border-red-300 hover:bg-red-300 hover:text-white'>لطفا محددا تلاش نمایید</button>
          </div>
          <div className='flex-4/5 flex items-center justify-center'>
            <h2 className='text-xl text-gray-600'>محصولی یافت نشد</h2>
          </div>
        </div>
      </ShopLayout>
    )
  }


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
  let products = {}

  try {
    products = await API.get(`/products/category/${slug}`)
    
  } catch (error) {
    console.error("Error fetching products in [slug]:", error);
    return {
       props: { notFound: true },
    }
  }


  return {
    props: {
      products: products && products.data.products,
      category: products && products.data.category
    },
  }
}

export default Search