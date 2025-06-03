import React from 'react'

const DescriptionSkeleton = () => {
    return (
        <div class="bg-white p-4" role="tabpanel" aria-labelledby="branding-tab">
            <h4 class="mb-3 bg-gray-200 animate-pulse h-6 w-1/4 rounded"></h4>
            <p class="text-md text-gray-400 bg-gray-200 animate-pulse h-4 w-3/4 rounded mb-2"></p>
            <p class="text-md text-gray-400 bg-gray-200 animate-pulse h-4 w-5/6 rounded mb-2"></p>
            <p class="text-md text-gray-400 bg-gray-200 animate-pulse h-4 w-2/3 rounded mb-2"></p>
            <p class="text-md text-gray-400 bg-gray-200 animate-pulse h-4 w-2/3 rounded mb-2"></p>
            <p class="text-md text-gray-400 bg-gray-200 animate-pulse h-4 w-2/3 rounded mb-2"></p>
        </div>
    )
}

export default DescriptionSkeleton