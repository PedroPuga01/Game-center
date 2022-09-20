import React from 'react'

const Counter = ({
  cantidad,
  setCantidad,
  onAdd,
  stock,
  price,
}) => {

  const total = []
  const addTotal = () => {
    total.push(price)
    console.log(total)
  }
  const addProduct = () => {
    if (cantidad >= stock) {
      Error('No hay mas stock disponible!');
    } else {
      setCantidad(cantidad + 1);
    }
  };
  const removeProduct = () => {
    if (cantidad <= 1) {
      Error('Digito Invalido');
    } else {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      >
        <button onClick={addProduct}>+</button>
        <p>{cantidad}</p>
        <button onClick={removeProduct}>-</button>
      </div>
      <button
        onClick={() => {
          onAdd(cantidad);
          addTotal();
        }}
      >
        {' '}
        AGREGAR PRODUCTO{' '}
      </button>
    </>
  );
};

export default Counter;
