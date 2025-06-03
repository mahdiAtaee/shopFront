import React from 'react';

const HeaderSkeleton = () => {
    return (
        <>
            <section className="w-dvw pt-5 bg-white">
                <div className="relative" dir='rtl'>
                    <div className="animate-pulse rounded-xl md:rounded-none min-h-48 bg-gray-300"></div>
                    <div className='flex items-center max-w-xs absolute bottom-2 right-0 md:bottom-16 md:right-10 z-20'>
                        <button className='border rounded-full border-gray-300 bg-gray-200 cursor-not-allowed animate-pulse w-9 h-9 flex items-center justify-center'>
                            <i className="fa fa-arrow-right" ariaHidden="true"></i>
                        </button>
                        <button className='border rounded-full border-gray-300 bg-gray-200 cursor-not-allowed animate-pulse w-9 h-9 flex items-center justify-center'>
                            <i className="fa fa-arrow-left" ariaHidden="true"></i>
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-6 z-20">
                        <div className="swiper-pagination w-full h-full bg-gray-300 animate-pulse"></div>
                    </div>
                </div>
                <div className="my-12 w-[80%] mx-auto bg-gray-200 rounded-2xl p-8">
                    <div className="animate-pulse grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-300 rounded-lg h-32"></div>
                        <div className="bg-gray-300 rounded-lg h-32"></div>
                        <div className="bg-gray-300 rounded-lg h-32"></div>
                        <div className="bg-gray-300 rounded-lg h-32"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeaderSkeleton;