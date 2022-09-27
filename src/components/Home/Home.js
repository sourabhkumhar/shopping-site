import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='bg-img text-white'>
                <h1 className='font-size-h1 text-center'>Welcome to Shopping Site</h1>
            </div>

            <div className='py-5 ' align="center">
                <Link to="/shop"><button className='btn-shopping'>Go to Shop</button></Link>
                <Link to="/cart"><button className='btn-cart'>Go to Cart</button></Link>
            </div>
        </>
    )
}
