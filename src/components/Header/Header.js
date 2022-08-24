import React from 'react'
import Navbar from '../Nav/Navbar';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
          <Navbar/>
        </header>
    );
};

export default Header;