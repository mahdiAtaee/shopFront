/* eslint-disable react/prop-types */
import React from 'react'
// import Gallery from './components/Gallery'
// import Details from './components/Details'
// import Description from './components/Description'
// import Attributes from './components/Attributes'
// import Comments from './components/Comments'
//import Card from '@/components/home/Card'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import dynamic from 'next/dynamic'
import GallerySkeleton from '@/components/skeleton/products/singleProduct/GallerySkeleton'
import DetailsSkeleton from '@/components/skeleton/products/singleProduct/DetailsSkeleton'
import DescriptionSkeleton from '@/components/skeleton/products/singleProduct/DescriptionSkeleton'
import CardSkeleton from '@/components/skeleton/home/CardSkeleton'
import AttributeSkeleton from '@/components/skeleton/products/singleProduct/AttributeSkeleton'


const Gallery = dynamic(() => import('./components/Gallery'), {
    loading: () => <GallerySkeleton />,
    ssr: false,
})

const Details = dynamic(() => import('./components/Details'), {
    loading: () => <DetailsSkeleton />,
    ssr: false,
})

const Description = dynamic(() => import('./components/Description'), {
    loading: () => <DescriptionSkeleton />,
    ssr: false,
})

const Attributes = dynamic(() => import('./components/Attributes'), {
    loading: () => <AttributeSkeleton />,
    ssr: false,
})

const Comments = dynamic(() => import('./components/Comments'), {
    loading: () => <DescriptionSkeleton />,
    ssr: false,
})

const Card = dynamic(() => import('@/components/home/Card'), {
    loading: () => <CardSkeleton />,
    ssr: false,
})


const SingleProduct = ({ product, comments, relatedProducts }) => {
    return (
        <section className="w-dvw min-h-dvh overflow-x-hidden">
            <div className='w-screen grid grid-cols-1 gird-rows-2 md:grid-cols-2 md:grid-rows-1 gap-8 p-4'>
                <div className='w-full'>
                    {product &&
                        <Gallery images={product.gallery} />
                    }
                </div>
                <div className='w-full p-4'>
                    {product &&
                        <Details product={product} />
                    }
                </div>
            </div>
            <div className="w-screen my-6">
                <TabGroup>
                    <TabList className="border-b border-gray-300 flex items-stretch min-h-16 px-4">
                        <Tab className="cursor-pointer outline-0 basis-24 relative">
                            {({ selected }) => (
                                <>
                                    <span className={`${selected ? "text-red-400 font-sans font-bold" : ""}`}>معرفی</span>
                                    <div>
                                        {selected && (
                                            <span className='w-full h-1 absolute bottom-0 left-0 right-0 rounded-t-2xl bg-red-400' />
                                        )}
                                    </div>
                                </>
                            )}
                        </Tab>
                        <Tab className="cursor-pointer outline-0 basis-24 relative">
                            {({ selected }) => (
                                <>
                                    <span className={`${selected ? "text-red-400 font-sans font-bold" : ""}`}>مشخصات</span>
                                    <div>
                                        {selected && (
                                            <span className='w-full h-1 absolute bottom-0 left-0 right-0 rounded-t-2xl bg-red-400' />
                                        )}
                                    </div>
                                </>
                            )}
                        </Tab>
                        <Tab className="cursor-pointer outline-0 basis-24 relative">
                            {({ selected }) => (
                                <>
                                    <span className={`${selected ? "text-red-400 font-sans font-bold" : ""}`}>دیدگاه ها</span>
                                    <div>
                                        {selected && (
                                            <span className='w-full h-1 absolute bottom-0 left-0 right-0 rounded-t-2xl bg-red-400' />
                                        )}
                                    </div>
                                </>
                            )}
                        </Tab>
                    </TabList>
                    {product &&
                        <TabPanels className="p-4">
                            <TabPanel>
                                <Description describe={product.description} />
                            </TabPanel>
                            <TabPanel>
                                <Attributes attributes={product.attributes} />
                            </TabPanel>
                            <TabPanel>
                                <Comments comments={comments} score={product.totalScore} />
                            </TabPanel>
                        </TabPanels>
                    }
                </TabGroup>
            </div>
            <div className='w-screen my-6'>
                {relatedProducts &&
                    <Card products={relatedProducts} title={`کالاهای مشابه در دسته بندی ${product?.category?.name?.FA}`} />}
            </div>
        </section>
    )
}

export default SingleProduct
