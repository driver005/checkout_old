import React from 'react'
import Checkmark from './Checkmark'
import Line from './Line'

function Progress({animate}) {
    return (
        <div className="flex items-center ">
            <Line animate={animate}/>
            <Checkmark animate={animate} />
            <Line animate={animate} DelayUntilStart={1.6} />
        </div>
    )
}

export default Progress
