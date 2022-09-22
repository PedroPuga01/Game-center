import React from 'react';
import products from '../mock/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const Xbox = () => {
  return (
  <div>
    <CategoriesListContainer category={'xbox'} productos={products}/>
  </div>
  )
};

export default Xbox;