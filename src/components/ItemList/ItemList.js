import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({productList}) => {

  return (
    <div className='mainContainer-ItemList'>
      {
        productList.map(item => <Item key={item.id} id={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} />)
      }
    </div>

  )
}