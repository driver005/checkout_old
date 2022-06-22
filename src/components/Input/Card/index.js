import React from 'react'
import Input from '../core/Input'

function Card() {
    return (
        <div class="flex flex-col w-full space-y-2 items-start justify-end">
            <p class="text-sm font-semibold tracking-wide leading-snug text-gray-500">Country or region</p>
            <Input type="text" text="1234 1234 1234 1234" />
            <div class="flex w-full bg-white">
                <div class="flex w-1/2 mr-1">
                    <Input type="text" text="MM / YY" />
                </div>
                <div class="flex w-1/2 ml-1">
                    <Input type="text" text="CVC" />
                </div>
            </div>
        </div>
    )
}

export default Card
