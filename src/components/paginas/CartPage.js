import React, {useContext} from 'react'
import CartContext from '../CartContext/CartContext'
import CartListProduct from '../CartListProduct/CartListProduct'

const CartPage = () => {

    const {cart} = useContext(CartContext)
    return(
        <div>
            <CartListProduct cart={cart} quantity={cart.length}/>
        </div>
    )
}

export default CartPage