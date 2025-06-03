import React from 'react'

const DetailsSkeleton = () => {
    return (
        <div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

            {/* Price section skeleton */}
            <div className="price mb-4">
                <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>

            {/* Stock and rating skeleton */}
            <div className="mb-4">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-3 animate-pulse"></div>
                <div className="flex items-center gap-4 my-4">
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-8 animate-pulse"></div>
                    </div>
                    <div className="flex gap-1 items-center rounded-lg bg-gray-200 py-1 px-2">
                        <div className="h-3 bg-gray-300 rounded w-6 animate-pulse"></div>
                        <div className="h-3 bg-gray-300 rounded w-12 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Variations skeleton */}
            <div className="form-inline my-lg-5 mb-4">
                <div className="mx-2 mb-4 w-full my-6 block">
                    {/* Color variation skeleton */}
                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
                    <div className="flex items-center gap-2 w-full">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                        ))}
                    </div>
                </div>

                {/* Select variation skeleton */}
                <div className="mx-2 mb-4 w-full my-6 block">
                    <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Quantity and add to cart skeleton */}
                <div className="w-full my-6 flex flex-col md:flex-row items-center justify-between gap-2">
                    <div className="w-full flex items-center min-h-10">
                        <div className="flex-[3] h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="flex-1 h-10 bg-gray-200 rounded-r animate-pulse"></div>
                        <div className="flex-1 h-10 bg-gray-200 animate-pulse"></div>
                        <div className="flex-1 h-10 bg-gray-200 rounded-l animate-pulse"></div>
                    </div>
                    <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSkeleton