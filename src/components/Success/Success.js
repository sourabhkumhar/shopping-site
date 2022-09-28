import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import productsAPI from '../../context/products/productsAPI'

export default function Success() {
    const context = useContext(productsAPI)
    const {setCart} = context;

    useEffect(() => {
        setCart([])
    }, [])

    return (
        <div className='text-center py-5'>
            <h1 className='font-size-h1'>Thank You!!!</h1>
            <span className='fs-3'>for Shopping</span>
            <br />
            <Link to="/shop"><button className='btn-shopping my-5'>Continue Shopping</button></Link>
        </div>
    )
}
