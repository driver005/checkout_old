import React from 'react'

function Name() {
    return (    
        <div class="flex flex-col w-full space-y-2 items-start justify-end">
            <p class="text-sm font-semibold tracking-wide leading-snug text-gray-500">Name on card</p>
            <Input type="text" text="Name of Card" />
        </div>
    )
}

export default Name
