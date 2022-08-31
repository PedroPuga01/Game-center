import React, { useState } from 'react'

const Counter = (props) => {
    let stock = props.stock
    let initial = props.initial
    let onAdd = props.onAdd
    const [count, setCount] = useState(initial)

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
        <button onClick={onAdd} disabled={count === 0}>Agregar al carrito</button>
    </div>
  )
}

export default Counter