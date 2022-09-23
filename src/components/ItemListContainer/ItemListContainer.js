import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
// import products from '../mock/products'
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../../firebaseConfig'


const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams()
  useEffect(() => {
    const itemCollection = collection(db, "ItemCollection");
    if (categoryName) {
      const q = query(itemCollection, where("category", "==", categoryName)
      );
      getDocs(q).then((res)=>
        setProductList(res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(itemCollection).then((res) =>
        setProductList(res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }

  }, [categoryName]);
    
  return (
    <ItemList productList={productList} />
  )
}

export default ItemListContainer

