import React from 'react'

function LittleTitle({children,classStyle}) {
    return (
        <p className={`${classStyle} text-[15px] font-bold `}>{children}</p>
    )
}

export default LittleTitle