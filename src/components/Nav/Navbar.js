import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainContainer}>
        <h1>GamerLife</h1>
        <div className="navItemContainer">
            <ul>
                <li>
                    <a className="navLink" href="https://google.com">PS3</a>
                </li>
                <li>
                    <a className="navLink" href="https://google.com">PS4</a>
                </li>
                <li>
                    <a className="navLink" href="https://google.com">PS5</a>
                </li>
                <li>
                    <a className="navLink" href="https://google.com">X ONE/360</a>
                </li>
                <li>
                    <a className="navLink" href="https://google.com">PC</a>
                </li>
                <li>
                    <a className="navLink" href="https://google.com">PERIFÉRICOS</a>
                </li>
            </ul>
        </div>
          
        </nav>
  )
}

export default Navbar