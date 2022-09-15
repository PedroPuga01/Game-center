import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import CarContext from '../CartContext/CarContext';

const CartListProduct = ({ cart, quantity }) => {
  /* const suma = (a, b) => {
    return a + b;
  };
  const acumulador = 0;
  for (let i = 0; i <= cart.length; i++) {
    return suma(cart[i].price, acumulador);
  }*/

  const {totalCartPrice} = useContext(CarContext)


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
        </div>
      </Link>
    </div>
  );
};

export default CartListProduct;
