import React from 'react'
import { applyUserAccountSchema } from '@/components/constant/formValidation/schema/UserAccount'
import useAppContext from '@/context/useAppContext'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaArrowRight } from "react-icons/fa";

const Addresses = () => {
    const { state } = useAppContext()
    const handleChangeInput = (e) => {
        const { name, value } = e.target
        state.user[name] = value
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(applyUserAccountSchema),
    });

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append('lastName', data.lastName)
        formData.append('email', data.email)
        formData.append('mobile', data.mobile)

        // await API.patch('/users', formData, {
        //     headers: {
        //         authorization: localStorage.getItem('token')
        //     }
        // })
    };

    return (
        <div className='w-screen min-h-dvh fixed lg:static lg:w-full bg-white top-0 right-0 left-0 z-10 overflow-y-auto'>
            <Link href="/dashboard" className='flex lg:hidden items-center gap-2 p-4 bg-white border-b-8 border-gray-200 mb-4 cursor-pointer'>
                <FaArrowRight width={10} />
                <span>آدرس ها</span>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
                        <input
                            type="text"
                            id="first_name"
                            name='firstName'
                            {...register('name')}
                            className={`${errors.name ? 'border-red-400' : 'border-green-300'} bg-gray-50 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                            onChange={handleChangeInput} value={state?.user?.firstName} placeholder={state?.user?.firstName} />
                        {errors.name
                            && <p className="mt-2 text-xs text-red-500 dark:text-red-400">*{errors.name.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی</label>
                        <input type="text" id="lastName" name='lastName' className={`${errors.lastName ? 'border-red-400' : 'border-green-300'} outline-0  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`} onChange={handleChangeInput} value={state?.user?.lastName} placeholder={state?.user?.lastName} {...register('lastName')} />
                        {errors.lastName
                            && <p className="mt-2 text-xs text-red-500 dark:text-red-400">*{errors.lastName.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                        <input type="text" id="email" name='email' className={`${errors.email ? 'border-red-400' : 'border-green-300'} outline-0  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`} onChange={handleChangeInput} value={state?.user?.email} placeholder={state?.user?.email} {...register('email')} />
                        {errors.email
                            && <p className="mt-2 text-xs text-red-500 dark:text-red-400">*{errors.email.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره موبایل</label>
                        <input type="text" id="mobile" name='mobile' className={`${errors.mobile ? 'border-red-400' : 'border-green-300'} outline-0  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`} onChange={handleChangeInput} value={state?.user?.mobile} placeholder={state?.user?.mobile} {...register('mobile')} />
                        {errors.mobile
                            && <p className="mt-2 text-xs text-red-500 dark:text-red-400">*{errors.mobile.message}</p>
                        }
                    </div>
                </div>
                <button type="submit" className="py-2 px-4 mr-4 cursor-pointer rounded-xl bg-blue-500 text-white ">
                    ذخیره
                </button>
            </form>
        </div>
    )
}

export default Addresses