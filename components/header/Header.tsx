import Image from 'next/image';
import React, { FC, useState } from 'react';
import styles from './Header.module.css'

const Header: FC = () => {
  const [navbarOpened, setNavbarOpened] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image
          width={50}
          height={50}  
          src='/logo.png'
          alt="Dulcinea Logo"
          objectFit="cover"
        />
      </div>

      <nav className={`${styles.header__navbar} ${navbarOpened ? styles['header__navbar--opened'] : ''}`}>
        <ul>
          <li>Home</li>
          <li>Productos</li>
        </ul>
      </nav>  
  
      <button 
        className={`${styles.header__burger} ${styles['header__burger--elastic']} ${navbarOpened ? styles['is-active'] : ''}`} 
        type="button"
        onClick={() => setNavbarOpened(!navbarOpened)}
      >
        <span className={styles['header__burger-box']}>
          <span className={styles["header__burger-inner"]}></span>
        </span>
      </button>
    </header>
  )
}

export default Header;