import React, { useEffect, useState } from 'react'
import * as API from '@/services/api'
import Error from 'next/error'
import OrderItem from './OrderItem'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const OrdersList = () => {
    const [error, setError] = useState(false)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const result = await API.get('/orders', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                console.log(result.data);

                setOrders(result.data)
            } catch (error) {
                console.log(error);
                setError(true)
            }
        }

        fetchOrders()
    }, [])



    return (

        <div className='w-screen min-h-dvh fixed lg:static lg:w-full bg-white top-0 right-0 left-0 z-10 overflow-y-auto'>
            {error && (<Error title='مشکلی در بارگذاری سفارشات رخ داده است. لطفا بعدا دوباره تلاش کنید.'> </Error>)}
            <div className="table-responsive w-full min-h-dvh">
                <Link href="/dashboard" className='flex lg:hidden items-center gap-2 p-4 bg-white border-b-8 border-gray-200 mb-4 cursor-pointer'>
                    <FaArrowRight width={10} />
                    <span>تاریخچه سفارشات</span>
                </Link>
                <TabGroup className="table w-full">
                    <TabList className='border-b border-gray-200 flex items-center justify-around'>
                        <Tab className="cursor-pointer outline-0 basis-24 relative py-4">
                            {({ selected }) => (
                                <>
                                    <span className={`text-xs text-gray-500 ${selected ? "text-red-400 font-sans font-bold" : ""}`}>جاری</span>
                                    <div>
                                        {selected && (
                                            <span className='w-full h-1 absolute bottom-0 left-0 right-0 rounded-t-2xl bg-red-400' />
                                        )}
                                    </div>
                                </>
                            )}
                        </Tab>
                        <Tab className="cursor-pointer outline-0 basis-24 relative py-4">
                            {({ selected }) => (
                                <>
                                    <span className={`text-xs text-gray-500 ${selected ? "text-red-400 font-sans font-bold" : ""}`}>تحویل شده</span>
                                    <div>
                                        {selected && (
                                            <span className='w-full h-1 absolute bottom-0 left-0 right-0 rounded-t-2xl bg-red-400' />
                                        )}
                                    </div>
                                </>
                            )}
                        </Tab>
                        <Tab className="cursor-pointer outline-0 basis-24 relative py-4">
                            {({ selected }) => (
                                <>
                                    <span className={`text-xs text-gray-500 ${selected ? "text-red-400 font-sans font-bold" : ""}`}>مرجوع شده</span>
                                    <div>
                                        {selected && (
                                            <span className='w-full h-1 absolute bottom-0 left-0 right-0 rounded-t-2xl bg-red-400' />
                                        )}
                                    </div>
                                </>
                            )}
                        </Tab>
                    </TabList>
                    <TabPanels className='flex flex-col gap-4 min-h-[80dvh]'>
                        {orders.length > 0 ?
                            (
                                <>
                                    <TabPanel>
                                        <OrderItem items={orders} />
                                    </TabPanel>
                                    <TabPanel>
                                        <OrderItem items={orders} />
                                    </TabPanel>
                                    <TabPanel>
                                        <OrderItem items={orders} />
                                    </TabPanel>
                                </>
                            ) : (
                                <>
                                    <TabPanel className='flex flex-col items-center justify-around mt-14'>
                                        <Image src="/assets/img/purchase-list.png" width={100} height={100} alt='purchase' />
                                        <span className='text-center py-4 text-xs text-gray-500'>هیچ سفارشی ثبت نشده است.</span>
                                    </TabPanel>
                                    <TabPanel className='flex flex-col items-center justify-around mt-14'>
                                        <Image src="/assets/img/purchase-list.png" width={100} height={100} alt='purchase' />
                                        <span className='text-center py-4 text-xs text-gray-500'>هیچ سفارشی ثبت نشده است.</span>
                                    </TabPanel>
                                    <TabPanel className='flex flex-col items-center justify-around mt-14'>
                                        <Image src="/assets/img/purchase-list.png" width={100} height={100} alt='purchase' />
                                        <span className='text-center py-4 text-xs text-gray-500'>هیچ سفارشی ثبت نشده است.</span>
                                    </TabPanel>
                                </>
                            )}
                    </TabPanels>
                </TabGroup>
            </div>

        </div>
    )
}

export default OrdersList