import React from 'react'
import Input from '../core/Input'

function Country() {
    return (
        <div class="flex flex-col w-full space-y-2 items-start justify-end">
            <p class="text-sm font-semibold tracking-wide leading-snug text-gray-500">Country or region</p>
            <Input type="text" text="United States" />
            <Input type="text" text="ZIP" />
        </div>
    )
}

export default Country
