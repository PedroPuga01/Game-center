import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import styles from './main.module.css'
import Nintendo from '../paginas/Nintendo';
import Playstation from '../paginas/PlayStation'
import Xbox from '../paginas/Xbox'
import Perifericos from '../paginas/Perifericos'


const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer /> }/>
        <Route path='/cart' element={<Cart/> }/>
        <Route path='/Productos/Nintendo' element={<Nintendo/> }/>
        <Route path='/Productos/Playstation' element={<Playstation/> }/>
        <Route path='/Productos/Xbox' element={<Xbox/> }/>
        <Route path='/Productos/Perifericos' element={<Perifericos/> }/>
      </Routes>
    </main>
  );
};

export default Main;
