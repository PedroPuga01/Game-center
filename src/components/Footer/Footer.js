import React from 'react';
import styles from './footer.module.css';

const Footer = () =>{
    return (
        <footer className={styles.mainContainer}>
        <h5>
          Pedro Puga
        </h5>
        <p className='parrafo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           In maxime eaque est repudiandae, sapiente provident magnam 
           dolorum, nam obcaecati architecto quod velit?
           Labore ut reprehenderit hic dolorem molestias fugit rem.
        </p>
      </footer>
    )
}

export default Footer;