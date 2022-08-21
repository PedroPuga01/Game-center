import React from 'react'
import Navbar from '../Nav/Navbar';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.mainContainer}>
          <Navbar/>
        </header>
    );
};

export default Header;