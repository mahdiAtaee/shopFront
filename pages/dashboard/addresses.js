import Addresses from '@/components/checkout/Addresses'
import Dashboard from '@/components/layouts/Dashboard'
import useAppContext from '@/context/useAppContext'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { MdOutlineAddLocation } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import Link from 'next/link'

const customStyles = {
  content: {
    position: 'fixed',
    minWidth: '60%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000'
  },
};

const addresses = () => {
  const { state } = useAppContext()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (
    <Dashboard title="فروشگاه | پنل کاربری | آدرس‌ها">

      <div className='w-screen min-h-dvh fixed lg:static lg:w-full bg-white top-0 right-0 left-0 z-10 overflow-y-auto'>
        <Link href="/dashboard" className='flex lg:hidden items-center gap-2 p-4 bg-white border-b-8 border-gray-200 mb-4 cursor-pointer'>
          <FaArrowRight width={10} />
          <span>آدرس ها</span>
        </Link>
        {state?.user?.addresses?.length === 0 ? (
          <div className='flex items-center justify-center gap-6 flex-col w-full h-full'>
            <Image src="/assets/img/address.svg" width={250} height={250} alt='location' />
            <p>هنوز آدرسی ثبت نشده است</p>
            <button
              onClick={() => setModalIsOpen(true)}
              className='flex items-center gap-2 border border-blue-500 rounded-lg py-2 px-4 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-150'>
              <MdOutlineAddLocation className='text-2xl' />
              ثبت آدرس جدید
            </button>
          </div>
        ) : (
          <div className='p-4'>
            {state?.user?.addresses?.map(address => (
              <div key={address.id} className='relative flex items-center justify-between gap-4 border border-cyan-500 rounded-lg min-h-32 py-4 px-2 my-4'>
                <HiDotsVertical className='absolute top-4 left-2 cursor-pointer text-gray-700'/>
                <div className='flex gap-4'>
                  <FaLocationDot className='text-2xl' width={50} height={50} color='oklch(71.5% 0.143 215.221)' />
                  <div className='flex flex-col gap-2'>
                    <span className='text-xs text-cyan-500 font-iranYekan'>{address.title}</span>
                    <span className='text-xs text-gray-400'>{address.address}</span>
                    <span className='text-xs text-gray-400'>کد پستی: {address.zip_code}</span>
                    <span className='text-xs text-gray-400'>گیرنده: {address.fullName} | {address.mobile}</span>
                  </div>
                </div>
              </div>
            ))}
            <div>

            </div>
          </div>
        )}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="address modal"
          className="w-dvw h-dvh md:w-2/3 md:h-auto overflow-hidden bg-white p-4"
        >
          <div className='flex items-center justify-between mb-4'>
            <IoMdClose onClick={closeModal} size={30} color='red' />
            <button className='text-gray-600 '>
              ثبت آدرس جدید
            </button>
          </div>
          <Addresses addresses={state.user.addresses} />
        </Modal>
      </div>

    </Dashboard>
  )
}

export default addresses