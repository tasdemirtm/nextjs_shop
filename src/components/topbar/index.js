import React from 'react'

function TopBar({children}) {
    return (
        <div className="text-center w-full bg-primary p-2 text-[14px] font-semibold tracking-wide text-black">{children}</div>
    )
}

export default TopBar