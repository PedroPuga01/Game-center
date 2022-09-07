import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

export const Item = (
  {
    id = "",
    title = ``,
    img = ``,
    price = 0,
  }) => {
  return (
    <div className='item-container'>
        <h4>{title}</h4>
        <div>
            <img className='img' src={img} alt={`Imagen del producto ${title}`} />
        </div>
        <p className='price'>{price} $</p>
        <Link to={`/product/${id}`}>Ver Detalle</Link>
    </div>
  )
}
