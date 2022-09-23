import React from 'react';
import CartContext from '../CartContext/CartContext';
import { useContext } from 'react';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link} from 'react-router-dom';


const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);
    return (
        <div style={{fontSize:"15px" }}>
            <Link to="/product/cart">
                <button type="button" className="btn btn-light">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
                <span>{totalProducts() || ""}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
