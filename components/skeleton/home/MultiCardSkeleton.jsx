import React from 'react';

const MultiCardSkeleton = () => {
    return (
        <>
            <section class="mt-4 p-md-4 bg-white">
                <div class="w-[200%] overflow-x-clip lg:w-[98%] mx-auto rounded-xl bg-gray-200">
                    <h2 class="px-6 w-full leading-10 text-xl my-4 flex items-center justify-start lg:justify-center gap-2">
                        <div class="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                        <div class="w-32 h-6 bg-gray-300 rounded animate-pulse"></div>
                    </h2>
                    <div class="w-full h-max grid grid-cols-[repeat(4,minmax(250px,1fr))] grid-rows-2 gap-4 my-8">
                        <div class="w-full px-4 flex gap-4 min-h-32 animate-pulse">
                            <div class="w-24 h-24 bg-gray-300 rounded"></div>
                            <div class="flex items-center gap-3 border-b-2 border-gray-200 w-full">
                                <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div class="flex flex-col">
                                    <div class="w-24 h-4 bg-gray-300 rounded"></div>
                                    <div class="w-16 h-4 bg-gray-300 rounded mt-1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 flex gap-4 min-h-32 animate-pulse">
                            <div class="w-24 h-24 bg-gray-300 rounded"></div>
                            <div class="flex items-center gap-3 border-b-2 border-gray-200 w-full">
                                <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div class="flex flex-col">
                                    <div class="w-24 h-4 bg-gray-300 rounded"></div>
                                    <div class="w-16 h-4 bg-gray-300 rounded mt-1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 flex gap-4 min-h-32 animate-pulse">
                            <div class="w-24 h-24 bg-gray-300 rounded"></div>
                            <div class="flex items-center gap-3 border-b-2 border-gray-200 w-full">
                                <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div class="flex flex-col">
                                    <div class="w-24 h-4 bg-gray-300 rounded"></div>
                                    <div class="w-16 h-4 bg-gray-300 rounded mt-1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MultiCardSkeleton;
