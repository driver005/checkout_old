import React from 'react'

function Divider() {
    return (
        <div class="inline-flex w-full space-x-4 items-center justify-center">
            <div class="w-1/3 h-0.5 border-t-2 border-gray-700 border-opacity-10"/>
            <p class="text-base leading-normal text-center text-gray-400">Or pay with card</p>
            <div class="w-1/3 h-0.5 border-t-2 border-gray-700 border-opacity-10"/>
        </div>
    )
}

export default Divider
