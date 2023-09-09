"use client"
import React, { useState } from 'react'
import { CgSearch } from 'react-icons/cg'


function Search() {

    const [searcStatus, setsearcStatus] = useState(false)

    return (
        <div className='flex items-center '>
            <form className='flex items-center'>
                <CgSearch size={25} onClick={() => setsearcStatus(!searcStatus)} />
            </form>
        </div>
    )
}

export default Search