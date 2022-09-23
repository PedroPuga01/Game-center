import React, { useContext } from 'react';
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';

const CartListProduct =  () => {
  const { totalCartPrice, totalProducts, cart, clearCart } = useContext(CartContext);
  return (
    <div>
      {cart.map((prod) =><Cart prod={prod}/>)}   
      <Link to="/">
        <div className="cart_buttons">
          {' '}
          <button type="button" className="button cart_button_clear">
            Seguir Comprando
          </button>
          <button  type="button" onClick={clearCart}>Clear Cart </button>
        </div>
      </Link>
      <p>Total: ${totalCartPrice(cart)} </p>
    </div>
  );
};

export default CartListProduct;



  /* const suma = (a, b) => {
    return a + b;
  };
  const acumulador = 0;
  for (let i = 0; i <= cart.length; i++) {
    return suma(cart[i].price, acumulador);
  }*/
