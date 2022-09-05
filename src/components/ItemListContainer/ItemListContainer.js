import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import products from '../mock/products'


const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);

    const {categoryName} = useParams()

    const getProducts = () => new Promise((res,rej) => {
        setTimeout(()=> res(products), 2000)
    })

    useEffect(() =>{
      if (categoryName) {
        //filtramos
      } else {
        getProducts()
        .then(products => setProductList(products))
        .catch(error => console.error(error))
      }
        
    }, [])
    
  return (
    <ItemList productList={productList} />
  )
}

export default ItemListContainer