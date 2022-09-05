import React from 'react'
import Counter from '../Counter/Counter'
import './Item.css'

export const Item = (props) => {
  const stock = props.stock
  const title = props.title
  const price = props.price
  const img = props.img
  
  const onAdd = () =>{
    console.log("Agregaste x elementos al carrito")
  }
  return (
    <div className='item-container'>
        <h4>{title}</h4>
        <div>
            <img className='img' src={img} alt={`Imagen del producto ${title}`} />
        </div>
        <p className='price'>{price} $</p>
        <p>Stock: {stock}</p>
        <Counter stock={10} initial={0} onAdd={onAdd}/>
    </div>
  )
}