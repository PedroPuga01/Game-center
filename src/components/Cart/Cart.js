import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
  const { cart, clearCart, deleteItem } = useContext(CartContext);

  console.log(cart);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      {cart.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <button onClick={() =>deleteItem(prod.id)}>Eliminar Producto</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart