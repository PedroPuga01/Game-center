import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
// import products from '../mock/products'
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../../firebaseConfig'


const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams()
  console.log(categoryName)
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




    // const getProducts = () => new Promise((res,rej) => {
    //     setTimeout(()=> res(products), 1000)
    // })

    // useEffect(() =>{
    //   if (categoryName) {
    //     //filtramos
    //   } else {
    //     getProducts()
    //     .then(products => setProductList(products))
    //     .catch(error => console.error(error))
    //   }
        
    // }, [])


    // .catch((error)=> {
    //   console.log(error)
    // })