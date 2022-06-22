import React from 'react'
import "./styles.css"
function Input({type, text}) {
    return (
        <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-lock"></i>
            </span>
            <input type={type} placeholder={text} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
        </div>
    )
}

export default Input
