import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import ActiveLink from '../partials/ActiveLink'
import { useRouter } from 'next/router'
import useAppContext from '@/context/useAppContext';

const links = [
    {
        href: '/dashboard',
        label: 'داشبورد',
        icon: <MdOutlineDashboard width={60} height={60} className='text-3xl border border-white rounded-full p-1' />
    },
    {
        href: '/dashboard/orders',
        label: 'سفارشات',
        icon: <CiShoppingBasket width={60} height={60} className='text-3xl border border-white rounded-full p-1' />
    },
    {
        href: '/dashboard/profile',
        label: 'پروفایل',
        icon: <FaRegUser width={60} height={60} className='text-3xl border border-white rounded-full p-1' />
    },
    {
        href: '/dashboard/addresses',
        label: 'آدرس‌ها',
        icon: <GrLocation width={60} height={60} className='text-3xl border border-white rounded-full p-1' />
    }
]

const SideBar = () => {
    const router = useRouter();
    const { dispatch } = useAppContext()

    const handleLogOut = () => {
        localStorage.removeItem('token')
        dispatch({
            type: 'LOGOUT',
            payload: {}
        })
        router.push('/')
    }

    return (
        <div className='order-2 lg:order-1 flex-3/4 lg:flex-1/5 border border-gray-300 py-4 rounded-xl'>
            <div className="w-full flex flex-col">
                {links.map((link, index) => (
                    <ActiveLink key={index} href={link.href} containerClass={`px-4 w-full hover:bg-gray-50 ${router.pathname === link.href ? 'border-r-3 border-red-500' : ''}`}>
                        <div className='flex items-center gap-2 text-xs md:text-[0.9rem] py-3  border-b border-gray-200'>
                            {link.icon}
                            {link.label}
                        </div>
                    </ActiveLink>
                ))}
                <a onClick={handleLogOut} className="text-xs md:text-[0.9rem] list-group-item border-0 flex items-center gap-2 cursor-pointer px-4 py-3">
                    <FiLogOut width={60} height={60} className='text-3xl border border-white rounded-full p-1' />
                    <span>خروج</span>
                </a>
            </div>
        </div>
    )
}

export default SideBar