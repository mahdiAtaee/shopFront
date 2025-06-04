/* eslint-disable react/prop-types */
import { toPersianNumber } from '@/services/lang'
import React from 'react'

const OrderItem = ({ items }) => {
    return (
        <div class="relative overflow-x-auto">
            <table class="min-w-[800px]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            نام محصول
                        </th>
                        <th scope="col" class="px-6 py-3">
                            تعداد
                        </th>
                        <th scope="col" class="px-6 py-3">
                            تاریخ ثبت
                        </th>
                        <th scope="col" class="px-6 py-3">
                            قیمت نهایی
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items && items?.map((item, index) => (
                        item?.orderLines?.map(order => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {order?.product?.title}
                                    </th>
                                    <td class="px-6 py-4">
                                        {order?.count}
                                    </td>
                                    <td class="px-6 py-4">
                                        {toPersianNumber(item.created_at)}
                                    </td>
                                    <td class="px-6 py-4">
                                        {toPersianNumber(order?.product?.price)} تومان
                                    </td>
                                </>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderItem