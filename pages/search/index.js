'use client'
import React from 'react'
import FilterSidebarSkeleton from '@/components/skeleton/products/FilterSkeleton';
import ProductListSkeleton from '@/components/skeleton/products/ProductsListSkeleton';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import ShopLayout from '@/components/layouts/Shop';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineOrderedList } from 'react-icons/ai';
import * as API from '@/services/api';

const ProductItem = dynamic(() => import('@/components/products/List/ProductItem'), {
    loading: () => <ProductListSkeleton />,
    ssr: false
})

const Filter = dynamic(() => import('@/components/category/Filter'), {
    loading: () => <FilterSidebarSkeleton />,
    ssr: false
})


const index = () => {
    const router = useRouter()
    const [showFilter, setShowFilter] = React.useState(false)
    const [products, setProductList] = React.useState([])
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

    React.useEffect(() => {
        const getFilteredProducts = async () => {
            try {
                const query = router.query
                const result = await API.get(`/products/search?${(new URLSearchParams(query).toString())}`)
                
                if (result) {
                    if (result.data.length === 0) {
                        setProductList([])
                        return
                    }

                    setProductList(result.data)
                }
            } catch (error) {
                console.log("Error fetching products:", error);
                setProductList([])
            }
        }
        getFilteredProducts()

    }, [router.query])

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
                {/* <Filter category={products[0]?.category} isShow={showFilter} handleShowFilter={toggleFilter} /> */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x !divide-y divide-gray-200">
                    {products && products.map((product) => (
                        <div key={product.id} className='searchProduct max-h-80 hover:shadow-xl transition-shadow duration-300'>
                            <ProductItem {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </ShopLayout>
    )
}


export default index