import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-black navbar-dark py-3 shadow-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand pointer" to="/"><img src={process.env.PUBLIC_URL + "/images/logo.svg"} width="30px" alt="" /></Link>

                    <Link to="/shop" className="material-symbols-outlined text-white text-decoration-none pointer">
                        storefront
                    </Link>

                    <Link to="/cart" className="material-symbols-outlined bg-primary rounded-5 p-2 text-black text-decoration-none pointer">
                        shopping_cart
                    </Link>
                </div>
            </nav>
        </div>
    )
}
