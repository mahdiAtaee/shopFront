import React, { useState } from 'react'
import Menu from './Menu'
import useAppContext from '@/context/useAppContext'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineLogin } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { addQueryArgs } from '@/services/queryString'
import { useRouter } from 'next/router'
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

const Header = () => {
    const { state } = useAppContext()
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()


    const handleSearchChange = (e) => {
        if (event.code === 'Enter' || event.key === 'Enter') {
            if (router.query.q) {
                router.query = ''
            }
            const query = addQueryArgs(router.query, 'q', searchQuery)
            router.push(`/search?${query}`)
        }
    }


    return (
        <>
            <section className="bg-gray">
                <div className="w-screen h-16 px-8">
                    <div className="flex items-center justify-between gap-4 h-full">
                        <div className='flex items-center gap-0 md:gap-8 grow'>
                            <Link href="/">
                                <Image src="/assets/img/logo.png" width={120} height={40} alt='BAZAREIO' className='hidden md:block' />
                            </Link>
                            <div className='relative w-full rounded-lg bg-gray-300 py-1.5 px-8 min-h-10 '>
                                <CiSearch className='absolute top-1/2 right-2.5 -translate-y-1/2 text-xl' />
                                <input type='search' onKeyDown={handleSearchChange} onChange={(e) => setSearchQuery(e.target.value)} placeholder='جستجو' className='w-full h-full outline-0 text-xs' />
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-end grow">
                            {!state?.user?.id ? (
                                <ul className="flex items-center gap-4 mx-4">
                                    <Link href="/auth/login" className="flex items-center gap-2 text-dark text-iranSans border py-1.5 px-2 rounded-lg border-gray-400">
                                        <HiOutlineLogin />
                                        <span>ورود | ثبت نام</span>
                                    </Link>
                                </ul>
                            ) : (
                                <div className="flex ml-4 relative group">
                                    <button
                                        className="border-0 flex items-center gap-2 font-iranSans"
                                        type="button"
                                    >
                                        <div className='flex text-left cursor-pointer text-xl'>
                                            <FaRegUser width={45} height={45} />
                                            <IoMdArrowDropdown />
                                        </div>
                                    </button>
                                    <ul className='hidden group-hover:block absolute top-full left-0 border border-blue-50 min-w-62 bg-white rounded shadow-xl shadow-gray-300 z-20'>
                                        <li className='w-full block px-3 transition-colors duration-300 hover:bg-gray-100'>
                                            <Link className=" flex items-center justify-between border-b border-gray-200 py-4" href="/dashboard">
                                                <span> {state?.user?.firstName} {state?.user?.lastName}</span>
                                                <IoIosArrowBack />
                                            </Link>
                                        </li>
                                        <li className='w-full block px-3 transition-colors duration-300 hover:bg-gray-100'>
                                            <Link className="flex items-center gap-3 border-b border-gray-200 py-4" href="/dashboard">
                                                <MdOutlineSpaceDashboard size={20}/>
                                                داشبورد
                                            </Link>
                                        </li>
                                        <li className='w-full block px-3 transition-colors duration-300 hover:bg-gray-100'>
                                            <Link className="flex items-center gap-3 border-b border-gray-200 py-4" href="/dashboard/orders">
                                                <MdOutlineShoppingBag size={20}/>
                                                سفارشات
                                            </Link>
                                        </li>
                                        <li className='w-full block px-3 transition-colors duration-300 hover:bg-gray-100'>
                                            <Link className="py-4 flex items-center gap-3" href="/dashboard/addresses">
                                                <GrMapLocation size={20}/>
                                                آدرس ها
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            <Link href='/basket' className="text-decoration-none flex items-baseline text-xl">
                                <span className='text-xs'>{state?.basket.length}</span>
                                <SlBasket width={25} height={25} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Menu />
        </>
    )
}

export default Header