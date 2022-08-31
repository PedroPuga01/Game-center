import React from 'react'
import Counter from '../Counter/Counter'
import './Card.css'

export const Card = ({
    title = 'Producto de testeo',
    img = 'https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg',
    price = 600,
    stock = 10
}) => {
    const onAdd = () =>{
      
      console.log("Agregaste x elementos al carrito")
    }
  return (
    <div className='card-container'>
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