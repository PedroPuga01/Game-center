import React from 'react';
import products from '../mock/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const PlayStation = () => {
  return (
  <div>
    <CategoriesListContainer categorie={'playstation'} productos={products}/>
  </div>
  )
};

export default PlayStation;