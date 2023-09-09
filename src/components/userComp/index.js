import React from 'react'
import Account from './accoumt'
import Password from './password'

function UserComp({ activeComp, userData }) {
    return (

        <div className='text-black flex justify-between'>
            {activeComp === 0 && <Account userData={userData} />}
            {activeComp === 1 && <Password userData={userData} />}

        </div>

    )
}

export default UserComp