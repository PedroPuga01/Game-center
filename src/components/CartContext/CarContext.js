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
    
    cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    
    const totalCartPrice = () => {
        return cart.reduce((acc, item) => ( acc + (item.cantidad * item.price) ), 0);
    }

    const totalProducts = () =>
    cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);

    // const getTotalUnidades = (id) => {
    //     const product = cart.find((prod) =>{
    //         return product?.cantidad;
    //     })
    // }

    const deleteItem = (id) => {
        const auxCart = cart.filter(prod => prod.id !== id)
        setCart(auxCart)

    }

    // const getProductQuantity = (id) => {
    //     const product = cart.find((prod) => prod.id === id);
    //     return product?.cantidad
    // }

    const clearCart = () => setCart([])

    const values = {
        cart,
        addToCart,
        isInCart,
        deleteItem,
        clearCart,
        totalCartPrice,
        totalProducts,
    }
  return (
    <CarContext.Provider value={values}>{children}</CarContext.Provider>
  )

}

export default CarContext
