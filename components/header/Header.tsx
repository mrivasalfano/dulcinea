import Image from 'next/image';
import React, { FC, useState } from 'react';
import styles from './Header.module.css'
import HeaderBurger from './burger/HeaderBurger';
import HeaderNavbar from './navbar/HeaderNavbar';
import logo from '../../public/logo.png'

const Header: FC = () => {
  const [navbarOpened, setNavbarOpened] = useState(false)

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.header__logo}>
        <Image
          className={styles.header__logo}
          src={logo}
          alt="Logo Dulcinea"
        />
      </div>
      
      <HeaderNavbar opened={navbarOpened}/>
  
      <HeaderBurger opened={navbarOpened} setOpened={setNavbarOpened}/>
    </header>
  )
}

export default Header;