/* eslint-disable react/prop-types */
import Head from 'next/head'
import React, { useEffect } from 'react'
import useAppContext from '@/context/useAppContext'

const Auth = ({ children, title }) => {
    const { dispatch } = useAppContext()

    useEffect(() => {
        const initState = () => {
            const currentState = JSON.parse(localStorage.getItem('state'))
            if (currentState) {
                dispatch({
                    type: "INIT_STATE",
                    payload: currentState
                })
            }
        }
        initState()
    }, [])

    return (
        <div>
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
            {children}
        </div>
    )
}

export default Auth