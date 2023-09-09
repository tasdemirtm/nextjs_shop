import React from 'react'
import Order from './order'
import Categories from './categories'
import Products from './products'

function AdminComp({ activeComp }) {
    return (
        <div className='text-black flex justify-between'>
            {activeComp === 0 && <Order />}
            {activeComp === 1 && <Categories />}
            {activeComp === 2 && <Products />}
        </div>
    )
}

export default AdminComp