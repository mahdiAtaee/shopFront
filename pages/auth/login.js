import React, { useState } from 'react'
import AuthLayout from '@/components/layouts/Auth'
import { login } from '@/services/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useAppContext from '@/context/useAppContext'
import Image from 'next/image'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { dispatch } = useAppContext()

    const handleLogin = async (e) => {
        e.preventDefault()
        if (email.length < 1 && password.length < 1) {
            alert('ایمیل و رمزعبور اجباری می باشد')
            return false
        }
        const [result, token, user] = await login(email, password)
        if (result) {
            localStorage.setItem('token', token)
            dispatch({
                type: "SET_CURRENT_USER",
                payload: {
                    user
                }
            })
            router.push('/checkout')
        } else {
            alert('کاربری با این مشخصات در سایت پیدا نشد')
        }
    }

    return (
        <AuthLayout title="صفحه ورود">
            <div className="w-dvw h-dvh overflow-hidden flex items-center justify-center">
                <div className="relative z-30 flex items-center justify-between p-3 w-dvw h-dvh md:w-md md:h-auto shadow shadow-gray-300 border border-gray-200 rounded-xl">

                    <div className="h-full w-full p-8 text-center">
                        <Image src="/assets/img/logo.png" width={120} height={120} alt='BAZARIO' className='mx-auto scale-150' />
                        <h3 className='text-lg text-center my-6 leading-10'>برای استفاده از برنامه لطفا وارد شوید</h3>
                        <form dir='rtl'>
                            <div className="border border-gray-300 rounded-lg py-2 px-4">
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-full outline-0"
                                    placeholder="آدرس ایمیل"
                                />
                            </div>
                            <div className="border border-gray-300 rounded-lg py-2 px-4 my-4">
                                <div className="relative">
                                    <input
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-full outline-0"
                                        placeholder="رمز عبور"
                                    />
                                    <i className="fa fa-eye absolute left-1 top-1/2 -translate-y-1/2" />
                                </div>
                            </div>
                            <div className="block text-md">
                                <a href="#" className="my-4 block">
                                    رمز عبور فراموش شده؟
                                </a>
                                <div className='flex items-center gap-2'>
                                    <button onClick={handleLogin} className="py-2 px-6 text-white bg-blue-400 hover:bg-blue-300 cursor-pointer block rounded-lg">
                                        ورود
                                    </button>
                                    <Link href='/auth/register'>ثبت نام</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login