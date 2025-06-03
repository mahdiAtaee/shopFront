import React from 'react';

const ProductListSkeleton = () => {
    return (
        <>
            <section className="section-gap bg-white">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x !divide-y divide-gray-200">
                    {[...Array(4)].map((_, i) => (
                        <div className="searchProduct min-h-96 bg-gray-200 animate-pulse rounded-lg p-4">
                            <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
                            <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductListSkeleton;
