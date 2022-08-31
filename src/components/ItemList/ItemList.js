import React from 'react'
import { Card } from '../Card/Card'
import './ItemList.css'

export const ItemList = ({productList}) => {

  return (
    <div className='mainContainer-ItemList'>
      {
        productList.map(item => <Card key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} />)
      }
    </div>

  )
}