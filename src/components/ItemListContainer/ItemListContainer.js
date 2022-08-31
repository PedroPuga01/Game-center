import React, { useEffect, useState } from 'react'
import { products } from '../mock/products'

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])

    const getProducts = () => new Promise((res,rej) => {
        setTimeout(()=> res(products), 2000)
    })

    useEffect(() =>{
        getProducts()
    }, [])

    console.log(productList)

  return (
    <div></div>
  )
}

export default ItemListContainer