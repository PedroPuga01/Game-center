import React, { useState } from 'react'

const ItemCount = (props) => {
    const [count, setCount] = useState(0)

    let stock = props.stock
    let initial = props.initial

    const sumar = () =>{
      count < stock && setCount(count + 1)
    }

    const restar = () =>{
      count > initial && setCount(count - 1)
    };

  return (
    <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <p>Count: {count}</p>
        <button disabled={count === 0}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount