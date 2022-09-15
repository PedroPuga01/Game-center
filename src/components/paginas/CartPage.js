import React, {useContext} from 'react'
import CarContext from '../CartContext/CarContext'
import CartListProduct from '../CartListProduct/CartListProduct'

const CartPage = () => {

    const {cart} = useContext(CarContext)
    console.log(cart)
    return(
        <div>
            <CartListProduct cart={cart} quantity={cart.length}/>
        </div>
    )
}

export default CartPage