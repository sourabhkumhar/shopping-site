import React, { useContext } from 'react'
import productsAPI from '../../context/products/productsAPI'
import { Link } from 'react-router-dom';

export default function Cart() {
    const context = useContext(productsAPI)
    const { cart, removeFromCart } = context;

    const removeItem = (e) => {
        removeFromCart(e.target.id)
        e.target.parentElement.parentElement.parentElement.style.display = "none"
    }

    let cart_subtotal = 0;
    let dpercent = 0;
    let discount = 0;
    let total = 0;
    cart.forEach((element) => {
        cart_subtotal += (element.price * element.qty)
        dpercent += element.discountPercentage
        discount += dpercent / cart.length
        total = cart_subtotal - (cart_subtotal * (discount / 100))
    })

    return (
        <>
            {cart.length === 0 ? <h3 className="text-center col-12 border border-3">No product found in Cart!</h3> : ""}

            <div className="row container-fluid my-4">

                <div className="col-md-7 col-12 table-responsive">
                    <table className="table">
                        <thead className='text-center'>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody id='rows'>
                            {
                                cart.map((element) => {

                                    return <tr className='text-center' key={element.id}>
                                        <td><div className="pointer d-flex justify-content-around">
                                            <span id={element.id} onClick={removeItem} className="material-symbols-outlined text-danger my-3">close</span>
                                            <img src={element.thumbnail} height="100%" width="100px" alt="" />
                                            <p className='ps-2'>{element.title}</p>
                                        </div></td>

                                        <td>${element.price}</td>

                                        <td><span className='px-1'>{element.qty}</span></td>

                                        <td>${element.qty * element.price}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="col-lg-5 col-12 px-md-5">
                    <div className="card d-flex justify-content-center px-5">
                        <h3 className='mt-4'>Cart Total</h3>
                        <div className="row text-center mt-4">
                            <b className='col-6'>Cart Subtotal</b>
                            <span className='col-6'>${cart_subtotal.toFixed(2)}</span>
                        </div>

                        <div className="row text-center">
                            <b className='col-6'>Discount Percentage</b>
                            <span className='col-6'>{discount.toFixed(2)}%</span>
                        </div>

                        <hr />
                        <div className="row text-center mb-4">
                            <h5 className='col-6'>Discount Percentage</h5>
                            <span className='col-6'>${total.toFixed(2)}</span>
                        </div>


                        <Link to={cart.length===0?"/cart":"/success"}><button disabled={cart.length===0} className='btn btn-primary mb-4 rounded-5 py-3 fs-10 w-100'>PROCEED TO CHECKOUT</button></Link>

                    </div>
                </div>
            </div>
        </>
    )
}
