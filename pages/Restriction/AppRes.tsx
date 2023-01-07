import React from 'react'
import RandomNumber from './RandomNumber'

const AppRes = () => {
    return (
        <div>
            <RandomNumber value={123} isPositive={true} isNegative={true} isZero={false} />
        </div>
    )
}

export default AppRes