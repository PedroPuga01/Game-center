import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
// import products from '../mock/products';
import {db} from '../../firebaseConfig'
import {getDoc, doc, collection} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, 'ItemCollection')
    const ref = doc(itemCollection, id)
    getDoc(ref).then((res)=>{
      setProduct({id: res.id,...res.data()
      })
    })
  },[id]);

  return (
    <div>
      <ItemDetail data={product} />
    </div>
  );
};

export default ItemDetailContainer



// console.log('productFilter: ', productFilter) 
//       setProduct(productFilter);


// const productFilter = products.find((product) => {
//   return product.id === id;
// });