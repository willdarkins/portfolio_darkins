import React from 'react'

//props passed
function ProgressBar({title, width, text}) {
    return (
        <>
            <h6>{title}</h6>
            <div className='progress-bar'></div>
        </>
    )
}

export default ProgressBar
