import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import productsAPI from '../../context/products/productsAPI'

export default function Navbar() {
    const context = useContext(productsAPI)
    const {cart} = context;
    
    return (
        <div>
            <nav className="navbar bg-black navbar-dark py-3 shadow-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand pointer" to="/"><img src={process.env.PUBLIC_URL + "/images/logo.svg"} width="30px" alt="" /></Link>

                    <Link to="/shop" className="material-symbols-outlined text-white text-decoration-none pointer">
                        storefront
                    </Link>

                    <Link to="/cart">
                        <span className="material-symbols-outlined bg-primary rounded-5 p-2 text-black text-decoration-none pointer">
                            shopping_cart
                        </span>
                        <span className="position-absolute top-1 start-5 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            <span className="visually-hidden">unread messages</span>  </span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
