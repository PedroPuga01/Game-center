// Padre del Cart, usa las funciones creadas en cartContext
import React, { useContext, useState } from 'react';
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';
import Form from '../Form/Form';

const CartListProduct =  () => {
  const { totalCartPrice, cart, clearCart } = useContext(CartContext);
  const [idCompra, setIdCompra] = useState('')
  const total = totalCartPrice();

  const handleId = (id) => {
      setIdCompra(id);
  };

  if (idCompra) {
    return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
  }

  if(cart.length === 0){
    return <h1>Aún no tenés productos, podes ir al <Link to='/'>Home</Link> para buscar algún producto</h1>
  }
  
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
      <Form
                cart={cart}
                total={total}
                clearCart={clearCart}
                handleId={handleId}
            />
    </div>
  );
};

export default CartListProduct;


