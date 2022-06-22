import React from 'react'
import Divider from './components/Divider'
import PayPal from './components/PayPal'
import Email from './components/Input/Email'
import Card from './components/Input/Card'
import Name from './components/Input/Name'
import Country from './components/Input/Country'
function Account() {
    return (
        <div class="flex flex-col items-start">
            <div class="inline-flex flex-col space-y-8 items-start justify-start">
                <PayPal />
                <Divider />
                <Email />
                <Card />
                <Name />
                <Country />
                <div class="flex flex-col items-center justify-center px-12 py-3 bg-gray-700 shadow rounded">
                    <p class="text-lg font-medium leading-normal text-gray-400">Pay $65.00</p>
                </div>
            </div>
        </div>
    )
}

export default Account
