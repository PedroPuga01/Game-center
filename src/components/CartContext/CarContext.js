import React from 'react'
import { createContext, useState, useEffect } from 'react'

const CarContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] =useState([])

    useEffect(() => {
        console.log(cart)

    }, [cart])

    const addToCart = (item) => {
        setCart([...cart, item])

    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
        

    }
    const totalCartPrice = () => {
        return cart.reduce((acc, item) => ( acc + (item.quantity * item.price) ), 0);
    }

    const deleteItem = (id) => {
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
    <CarContext.Provider value={values}>{children}</CarContext.Provider>
  )

}

export default CarContext
