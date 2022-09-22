import React from 'react';
import products from '../mock/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const PlayStation = () => {
  return (
  <div>
    <CategoriesListContainer category={'playstation'} productos={products}/>
  </div>
  )
};

export default PlayStation;