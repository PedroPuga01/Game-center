import React from 'react';
import products from '../mock/products';
import CategoriesListContainer from '../categoriesListContainer/CategoriesListContainer';

const Perifericos = () => {
  return (
  <div>
    <CategoriesListContainer categorie={'perifericos'} productos={products}/>
  </div>
  )
};

export default Perifericos;