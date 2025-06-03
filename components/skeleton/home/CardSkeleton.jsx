import React from 'react';

const CardSkeleton = () => {
  return (
    <>
      <section className="section-gap mt-0 p-md-4 bg-white">
          <div className="w-full p-4 rounded-2xl">
              <div className="p-8 border border-gray-200 rounded-r-2xl">
                  <div className="w-full flex items-center justify-between pb-3">
                      <div>
                          <span className="text-xs md:text-md bg-gray-300 animate-pulse h-4 w-24 rounded"></span>
                          <p className="text-xl md:text-3xl bg-gray-300 animate-pulse h-8 w-48 rounded mt-2"></p>
                      </div>
                      <div className="flex items-center">
                          <button className="mr-2 me-2 cursor-pointer bg-gray-300 animate-pulse h-8 w-8 rounded"></button>
                          <button className="me-2 cursor-pointer bg-gray-300 animate-pulse h-8 w-8 rounded"></button>
                      </div>
                  </div>
                  <div className="w-full product-card">
                      <div className="flex space-x-4">
                          <div className="bg-gray-300 animate-pulse h-40 w-32 rounded"></div>
                          <div className="bg-gray-300 animate-pulse h-40 w-32 rounded"></div>
                          <div className="bg-gray-300 animate-pulse h-40 w-32 rounded"></div>
                          <div className="bg-gray-300 animate-pulse h-40 w-32 rounded"></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default CardSkeleton;
