import React, { useContext, useEffect, useState } from 'react'
import productsAPI from '../../context/products/productsAPI'
import LoadingBar from 'react-top-loading-bar'
import { Link } from 'react-router-dom'

export default function ProductLists() {
    const context = useContext(productsAPI)
    const { products, category, getProducts, getCategories, loaded, setLoaded, addToCart, cart, removeFromCart } = context;

    const [proceed, setProceed] = useState(false)

    setInterval(() => {
        setProceed(cart.length > 0)
    }, 1000);

    useEffect(() => {
        getCategories();
        getProducts();
        // eslint-disable-next-line
    }, [])

    const handleCategory = (e) => {
        getProducts(`/category/${e.target.value}`)
    }

    const resetFilter = () => {
        getProducts()
    }

    const search = (e) => {
        getProducts(`/search?q=${e.target.value}`)
    }

    const handleQty = (e) => {
        if (e.target.value === "") {
            e.target.parentElement.lastElementChild.disabled = true
        }
        else {
            e.target.parentElement.lastElementChild.disabled = false
        }
    }

    const handleCheck = (e) => {
        if (e.target.checked) {
            addToCart(e.target.id, e.target.parentElement.firstElementChild.value)
        }
        else {
            removeFromCart(e.target.id)
        }
    }

    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={loaded}
                onLoaderFinished={() => setLoaded(0)}
            />

            <div className='d-md-flex d-block justify-content-around px-5 mt-5'>
                <div className="d-flex flex-md-row flex-column col-8">
                    <div className="col-md-5 col-12 px-1">
                        <select onChange={handleCategory} className="form-select rounded-0 py-3" aria-label="Default select example">
                            <option defaultValue="">Category</option>
                            {category.map((element) => {
                                return <option key={element} value={element}>{element}</option>
                            })}
                        </select>
                    </div>
                    <span onClick={resetFilter} className="col-md-2 col-12 d-flex justify-content-baseline mt-3 mx-2 text-decoration-none text-primary pointer">
                        <span className="material-symbols-outlined">
                            device_reset
                        </span>
                        <span>Reset</span>
                    </span>
                </div>

                <div className='justify-content-around mt-md-0 mt-2'>
                    <form method='get' className='row border border-1 px-0'>
                        <input onChange={search} type="text" className='col-8 border-0 px-5 py-3 ouline-none' placeholder='Search' />
                    </form>
                </div>
            </div>

            <div className="mt-3 px-5 table-responsive">
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Instock</th>
                            <th scope="col">Total Stock</th>
                            <th scope="col">Add Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((element) => {
                            
                            return <tr key={element.id}>
                                <td><img src={element.thumbnail} width="100px" alt={element.title} /></td>
                                <td>{element.title}</td>
                                <td><div className="d-flex"><span className="material-symbols-outlined">grade</span>{element.rating.toFixed(1)}</div></td>
                                <td>${element.price}</td>
                                <td>{element.category}</td>
                                <td>{element.stock === 0 ? "Not in Stock" : "Yes"}</td>
                                <td>{element.stock}</td>
                                <td><div className="d-flex">
                                    <input type="number" className='w-md' onChange={handleQty} min={1} max={element.stock} placeholder="qty" />
                                    <input type="checkbox" onChange={handleCheck} id={element.id} disabled />
                                </div></td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>


            <div className={`${proceed ? '' : 'd-none'} position-fixed bottom-0 end-0 m-3`}>
                <Link to="/cart"><button className='btn btn-primary px-5 py-3'>Proceed</button></Link>
            </div>
        </>
    )
}
