import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import styles from './main.module.css'
import Cart from '../Cart/Cart'
import CartPage from '../paginas/CartPage'


const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer /> }/>
        <Route path='/product/cart' element={<CartPage /> }/>
        <Route path='/cart' element={<Cart /> }/>
      </Routes>
    </main>
  );
};

export default Main;
