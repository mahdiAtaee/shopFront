'use client'
/* eslint-disable react/prop-types */
import { addQueryArgs, removeQueryArgs } from '@/services/queryString'
import React from 'react'
import { useRouter } from 'next/router'
import * as Accordion from '@radix-ui/react-accordion';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const Filter = ({ category, isShow,handleShowFilter }) => {
    console.log(category);

    const router = useRouter()
    const handleChangeFilter = (e, title, slug) => {
        const isCheckedFilter = e.target.checked
        const query = isCheckedFilter
            ? addQueryArgs(router.query, title, slug)
            : removeQueryArgs(router.query, title, slug)

        router.push({
            pathname: router.pathname,
            query
        })

    }

    return (
        <div className={`flex-1/5 rounded-xl border border-gray-200 p-4 min-h-max w-full h-[95dvh] md:h-auto bg-white fixed md:relative top-0 right-0 md:top-auto md:right-auto z-10 overflow-y-auto ${isShow ? 'block' : 'hidden'}`}>
            <div className='flex items-center justify-between my-2'>
                <h2 className='text-xl text-gray-600'>فیلتر ها</h2>
                <span className='text-xs text-red-300 cursor-pointer'>حدف فیلترها</span>
            </div>
            {category && category.filterGroups && category.filterGroups.map(group => (
                <div>
                    <Accordion.Root type="single" collapsible>
                        {group && group.filters && group.filters.map((attribute) => (
                            <>
                                {attribute.filterable &&
                                    <Accordion.Item value={attribute.uid} key={attribute.slug} className="border-b border-gray-200">
                                        <>
                                            <Accordion.Trigger className="w-full py-4 px-1 text-right text-xs md:text-[1.1rem] flex items-center justify-between cursor-pointer">
                                                <span>{attribute.name.fa}</span>
                                                <MdKeyboardArrowDown />
                                            </Accordion.Trigger>
                                            <Accordion.Content>
                                                {attribute.type == "0" && (
                                                    <div>
                                                        {attribute.options && attribute.options.map((option) => (
                                                            <div className="w-full py-2 px-1 my-1 text-right text-xs md:text-[1rem] flex items-center gap-2 cursor-pointer">
                                                                <input type="checkbox" onChange={(e) => handleChangeFilter(e, attribute.slug, option.value)} id={option.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                <label className='cursor-pointer' htmlFor={option.id}>{option.label}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {attribute.type == "4" && (
                                                    <div>
                                                        {attribute.rangeBuckets && attribute.rangeBuckets.map((option) => (
                                                            <div className="w-full py-2 px-1 my-1 text-right text-xs md:text-[1rem] flex items-center gap-2 cursor-pointer font-iranYekan">
                                                                <input type="checkbox" onChange={(e) => handleChangeFilter(e, attribute.slug, `${option.min}-${option.max}`)} id={option.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                <label className='cursor-pointer' htmlFor={option.id}>{option.label}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </Accordion.Content>
                                        </>

                                    </Accordion.Item>
                                }
                            </>
                        ))}
                    </Accordion.Root>
                </div>
            ))}
            <div className='flex items-center justify-center my-2 cursor-pointer py-4 md:hidden' onClick={handleShowFilter}>
                <span>نمایش کالا ها</span>
                <IoIosArrowUp />
            </div>
        </div>
    )
}

export default Filter