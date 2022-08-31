import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { products } from '../mock/products'

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])

    const getProducts = () => new Promise((res,rej) => {
        setTimeout(()=> res(products), 2000)
    })

    useEffect(() =>{
        getProducts()
        .then(products => setProductList(products))
        .catch(error => console.error(error))
    }, [])
    
  return (
    <ItemList productList={productList} />
  )
}

export default ItemListContainer