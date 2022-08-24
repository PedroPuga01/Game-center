import React from 'react'
import Button from '../Button/Button';
import styles from './main.module.css'

const Main = (props) => {
  console.log(props.test);
  return (
    <main className={styles.mainContainer}>
        <section>
          <h2>Bienvenidos! {props.test}</h2>
          <p>Hoy es {props.fecha} de Agosto</p>
          <Button value="Log out" />
        </section>
      </main>
  );
};

export default Main;