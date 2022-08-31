import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import styles from './main.module.css'

const Main = (props) => {
  console.log(props.test);
  return (
    <main className={styles.mainContainer}>
      <ItemListContainer saludo='Bienvenidos'/>
    </main>
  );
};

export default Main;