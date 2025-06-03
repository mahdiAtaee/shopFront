import React from 'react'

const AttributeSkeleton = () => {
    return (
        <div>
            {[...Array(3)].map((_, index) => (
                <div key={index} className='flex flex-col md:flex-row items-start my-6 animate-pulse'>
                    {/* Group title skeleton */}
                    <div className='flex-1/3 h-6 bg-gray-200 rounded w-1/4 my-4 md:m-0'></div>

                    {/* Attributes list skeleton */}
                    <div className="w-full px-2 md:flex-2/3 md:px-8">
                        {[...Array(4)].map((_, idx) => (
                            <ul key={idx}>
                                <li className='flex items-stretch border-b md:border-0 border-gray-300'>
                                    <div className='flex-1/4 bg-gray-200 w-full py-4 px-2'>
                                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    </div>
                                    <div className='flex-3/4 md:border-b border-gray-100 py-4 px-2'>
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AttributeSkeleton