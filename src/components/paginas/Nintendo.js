import React from 'react';
import products from '../mock/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const Nintendo = () => {
  return (
  <div>
    <CategoriesListContainer categorie={'nintendo'} productos={products}/>
  </div>
  )
};

export default Nintendo;