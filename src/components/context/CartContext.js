import React from 'react'
import { createContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] =useState([])

    useEffect(() => {
        console.log(cart)

    }, [cart])

    const addToCart = (item, qty) => {
        if (isInCart(item.id)) {
            addQty(item, qty)
        } else {
            setCart([...cart, { ...item, qty }])
            
        }
    }
    
    //Si el producto está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //Agregar cantidad
    const addQty = (item, qty) => {
        const updateCart = cart.map((prod) =>
        prod.id === item.id ? { ...prod, qty: prod.qty + qty } : prod)
        setCart(updateCart)
    }
    
    const totalCartPrice = () => {
        return cart.reduce((acc, item) => ( acc + (item.quantity * item.price) ), 0);
    }

    const deleteItem = (id) => {
        console.log(`eliminando producto ${id}`)
        const auxCart = cart.filter(prod => prod.id !== id)
        setCart(auxCart)

    }

    const clearCart = () => setCart([])

    const values = {
        cart,
        addToCart,
        isInCart,
        deleteItem,
        clearCart,
        totalCartPrice
    }
  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  )

}

export default CartContext
