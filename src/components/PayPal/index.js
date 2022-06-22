import React from 'react'
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
};

function PayPal() {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons 
                fundingSource={FUNDING.PAYPAL}
                className="w-full"
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "2.00",
                                },
                            },
                        ],
                    });
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PayPal
