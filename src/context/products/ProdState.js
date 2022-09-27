import React, { useState } from "react";
import productsAPI from "./productsAPI";

const ProdState = (props) => {
    const host = "https://dummyjson.com";
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [cart, setCart] = useState([])
    const [loaded, setLoaded] = useState(0)


    // Products
    const getProducts = async (filter) => {
        setLoaded(10)
        const response = await fetch(`${host}/products/${filter ? filter : ""}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setLoaded(70)
        const json = await response.json()
        setProducts(json.products);
        setLoaded(100)
    }

    const getCategories = async () => {
        setLoaded(10)
        const response = await fetch(`${host}/products/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setLoaded(70)
        const json = await response.json()
        setCategory(json);
        setLoaded(100)
    }


    // Carts

    const addToCart = async (id, qty) => {
        for(let i=0; i<cart.length; i++) {
            if(cart[i].id === Number(id)) {
                cart[i].qty += Number(qty);
                return;
            }
        }
        setLoaded(30)
        const response = await fetch(`${host}/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setLoaded(90)
        const json = await response.json()
        json.qty = Number(qty);
        cart.push(json)

        setCart(cart)
        setLoaded(100)
    }

    const removeFromCart = (id) => {
        let removeid = Number(id)
        let newCart = []
        newCart = cart.filter(function (element) { return element.id !== removeid });

        setCart(newCart)
    }

    return (
        <productsAPI.Provider value={{ products, category, cart, getProducts, getCategories, loaded, setLoaded, addToCart, removeFromCart }}>
            {props.children}
        </productsAPI.Provider>
    )
}

export default ProdState;