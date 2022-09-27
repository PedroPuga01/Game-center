import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] =useState([])
    
  //   Este addToCart me rompe el cart
  //   const addToCart = (item, cantidad) => {
  //     if (isInCart(item.id)) {
  //         setCart(
  //           cart.map((prod) =>{
  //             return prod.id === item.id
  //             ? {...prod, cantidad: prod.cantidad + cantidad}
  //             : prod;
  //           })
  //         )
  //     } else {
  //         setCart([...cart, { ...item, cantidad: cantidad }]);
  //     }
  // };


    const addToCart = (item) => {
      setCart([...cart, item])
  }
  
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    
    const totalCartPrice = () => {
        return cart.reduce((acc, item) => ( acc + (item.cantidad * item.price) ), 0);
    }

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };

    const totalProducts = () =>{
        let total = 0
        cart.forEach((prod)=> {
            total += prod.cantidad
        })
        return total
    }

    const addCantidad = (item, cantidad) => {
        const updateCart = cart.map((prod)=>prod.id === item.id ? {...prod, cantidad} : prod);
        setCart(updateCart);
    };

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
        totalCartPrice,
        getProductQuantity,
        totalProducts,
        addCantidad,
    }
  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  )

}

export default CartContext
