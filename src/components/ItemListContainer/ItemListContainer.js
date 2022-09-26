import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../../firebaseConfig'
import ClipLoader from 'react-spinners/ClipLoader';


const ItemListContainer = () => {

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { categoryName } = useParams()

  useEffect(() => {

    setIsLoading(true)
    const itemCollection = collection(db, "ItemCollection");

    const referencia = categoryName
            ? query(itemCollection, where('category', '==', categoryName))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setProductList(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });

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
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}
    >
        {isLoading ? (
            <>
                <ClipLoader color="black" size={150} />
            </>
        ) : (
            <>
                <ItemList productList={productList} />
            </>
        )}
    </div>
);
}

export default ItemListContainer

