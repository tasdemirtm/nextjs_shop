import React from 'react'

function BigTitle({children,classStyle}) {
    return (
        <h1 className={`${classStyle} text-[56px] max-sm:text-[28px] max-sm:leading-[35px] font-bold leading-[65px] my-5`}>{children}</h1>
    )
}

export default BigTitle