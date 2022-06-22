import React from 'react'
import Input from '../core/Input'

function Email() {
    return (
        <div class="flex flex-col w-full space-y-2 items-start justify-end">
            <p class="text-sm font-semibold tracking-wide leading-snug text-gray-500">Email</p>
            <Input type="email" text="Email@myemail.com" />
        </div>
    )
}

export default Email
