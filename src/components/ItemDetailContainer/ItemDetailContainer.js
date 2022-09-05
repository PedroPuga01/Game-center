import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import products from '../mock/products';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log('productFilter: ', productFilter) 
      setProduct(productFilter);
    },[id]);

  const productFilter = products.find((product) => {
    return product.id == id;
  });

  return (
    <div>
      <ItemDetail data={product} />
    </div>
  );
};

export default ItemDetailContainer