import React from 'react'

function Text({children,classStyle}) {
    return (
        <p className={`${classStyle} font-[15px]`}>{children}</p>
    )
}

export default Text