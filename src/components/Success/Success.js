import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
    return (
        <div className='text-center py-5'>
            <h1 className='font-size-h1'>Thank You!!!</h1>
            <span className='fs-3'>for Shopping</span>
            <br />
            <Link to="/shop"><button className='btn-shopping my-5'>Continue Shopping</button></Link>
        </div>
    )
}
