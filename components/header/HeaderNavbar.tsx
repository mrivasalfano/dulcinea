import React, { FC, useState } from 'react';
import styles from './HeaderNavbar.module.css'
import {GoHome} from 'react-icons/go'
import {BiCake} from 'react-icons/bi'

interface Props {
    opened: boolean;
}

const HeaderNavbar: FC<Props> = ({opened}: Props) => {
  const [navItems, setNavItems] = useState([{
    iconComponent: <GoHome/>,
    spanText: 'Inicio',
    isActive: true
  }, 
  {
    iconComponent: <BiCake/>,
    spanText: 'Productos',
    isActive: false
  }])

  const setNavItemToActive = (itemIndex: number) => {
    const newNavItems = [...navItems]

    newNavItems.forEach((item, index) => {
      if (index === itemIndex)
        item.isActive = true
      else
        item.isActive = false
    })

    setNavItems(newNavItems)
  }

  return (
    <nav className={`${styles.navbar} ${opened ? styles['navbar--opened'] : ''}`}>
    <ul className={styles.navbar__list}>
    {navItems.map((item, index) => (
        <li 
            className={`${styles['navbar__list-item']} ${item.isActive ? styles['navbar__list-item--active'] : ''}`}
            onClick={() => setNavItemToActive(index)}
            key={index}
        >
            {item.iconComponent}
            <span>{item.spanText}</span>
        </li>
    ))}
    </ul>
    </nav>  
  )
}

export default HeaderNavbar;