import Image from 'next/image'
import React from 'react'

function Loading() {
    return (
        <>
            <div className="preloader absolute top-0 left-0 w-full h-full bg-[#17181c] flex items-center justify-center z-10">
                <Image src="/images/loading-gif.gif" alt='' width={200} height={200} unoptimized />
            </div>
        </>
    )
}

export default Loading