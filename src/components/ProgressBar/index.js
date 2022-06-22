import React from 'react'
import Progress from '../core/Progress'

function ProgressBar() {
    return (
        <div class="px-52 py-4 w-full">
            <div class="flex items-center">
                <div class="flex items-center text-purple-500 relative mr-4"> Personal </div>
                <Progress animate={true} />
                <div class="flex items-center text-purple-500 relative ml-4 mr-4"> Address </div>
                <Progress animate={true} />
                <div class="flex items-center text-purple-500 relative ml-4"> Card </div>
                
            </div>    
        </div>
    )
}

export default ProgressBar
