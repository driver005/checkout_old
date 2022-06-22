import { motion } from 'framer-motion'
import React from 'react'

const Animation = {
    SvgInitial: {border: '#8b5cf6', borderWidth: '2px'},
    SvgAnimate: {border: 'none', borderWidth: '2px'},
    CircleInitial: {
        fill: 'none',
        scale: 0,
    },
    CircleAnimate: {
        fill: '#8b5cf6',
        scale: 1,
        transition: {
            delay: 0.8,
            duration: 0.4,
            ease: 'easeInOut'
        }
    },
    CheckInitial: {
        stroke: 'none',
        pathLength: 0
    },
    CheckAnimate: {
        stroke: '#fff',
        pathLength: 1,
        strokeDashoffset: 0,
        strokeWidth: 2,
        transition: {
            delay: 0.8,
            duration: 0.8,
        }
    }
}

function Checkmark({animate}) {
    return (
        <motion.svg class="rounded-full h-7 w-7 ring-2 ring-inset  ring-purple-500 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <motion.circle variants={Animation} initial="CircleInitial" animate={animate ? "CircleAnimate": "CircleInitial"} class="h-12 w-12 py-3" cx="26" cy="26" r="26" fill="none" />
                <motion.path variants={Animation} initial="CheckInitial" animate={animate ? "CheckAnimate": "CheckInitial"} class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </motion.svg>
    )
}

export default Checkmark
