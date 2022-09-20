import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CarContext';

const CartListProduct = ({ cart, quantity }) => {
  /* const suma = (a, b) => {
    return a + b;
  };
  const acumulador = 0;
  for (let i = 0; i <= cart.length; i++) {
    return suma(cart[i].price, acumulador);
  }*/

  const {totalCartPrice} = useContext(CartContext)
  const { clearCart } = useContext(CartContext);

  return (
    <div>
      {{ quantity } !== 0 ? (
        <p> hay un total de {quantity} productos diferentes en el carrito!</p>
      ) : (
        <p>Aun no hay productos en el carrito</p>
      )}
      {cart.map(({ title, price, img, description, stock, id, cantidad }) => {
        return (
          <Cart
            title={title}
            price={price}
            img={img}
            stock={stock}
            description={description}
            id={id}
            cantidad={cantidad}
          />
        );
      })}
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
