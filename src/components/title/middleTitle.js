import React from 'react'

function MiddleTitle({children,classStyle}) {
    return (
        <h2 className={`${classStyle} text-[40px] max-sm:text-[24px] max-sm:leading-[45px] font-bold leading-[65px]`}>{children}</h2>
    )
}

export default MiddleTitle