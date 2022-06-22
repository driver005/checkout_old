import { motion } from 'framer-motion'
import React from 'react'

function Line({ animate, DelayUntilStart = 0 }) {
    const Animation = {
        inital: {
            width: '0%',
        },
        animate: {
            width: '100%',
            transition: {
                delay: DelayUntilStart,
                duration: 0.8,
            }
        }
    }
    return (
        <div class="flex-auto">
            <motion.div
                variants={Animation}
                initial="inital"
                animate={animate ? "animate" : "inital"}
                class=" border-t-2 transition duration-500 ease-in-out border-purple-500"
            />
        </div>
    )
}

export default Line
