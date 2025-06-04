/* eslint-disable react/prop-types */
import React, { useLayoutEffect } from 'react'
import Head from 'next/head'
import ShopHeader from '../partials/Header'
import ShopFooter from '../partials/Footer'
import useAppContext from '@/context/useAppContext'
import { useRouter } from 'next/router'
import { check as authCheck } from '@/services/auth'
import SideBar from '../dashboard/SideBar'
import MobileMenu from '../partials/MobileMenu'


const Dashboard = ({ title, children }) => {
  const router = useRouter()
  
  useLayoutEffect(() => {
    authCheck().then(isUserLoggedIn => !isUserLoggedIn ? router.push('/auth/login') : null).catch(error => console.error(error))
  }, [])
 




  return (
    <div className='d-flex flex-column bg-gray' dir='rtl'>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="description" content="" />
        <meta name="author" content="mahdi" />
      </Head>
      <ShopHeader />
      <div className='flex flex-col lg:flex-row gap-0 lg:gap-4 lg:min-h-dvh lg:p-6'>
        <SideBar />
        <div className='flex-1/4 lg:flex-4/5 order-1 lg:order-2'>
          {children}
        </div>
      </div>
      <ShopFooter />
      <MobileMenu />
    </div>
  )
}

export default Dashboard