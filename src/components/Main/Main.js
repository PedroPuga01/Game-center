import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import styles from './main.module.css'

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos'/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer /> }/>
        <Route path='/cart' element={<Cart/> }/>
      </Routes>
    </main>
  );
};

export default Main;
