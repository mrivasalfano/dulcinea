import React, { FC, useState } from 'react';
import styles from './HeaderNavbar.module.css'
import {GoHome} from 'react-icons/go'
import {BiCake} from 'react-icons/bi'
import {AiOutlineCalculator} from 'react-icons/ai'
import Link from 'next/link';

interface Props {
    opened: boolean;
}

const HeaderNavbar: FC<Props> = ({opened}: Props) => {
  const [navItems, setNavItems] = useState([{
    iconComponent: <GoHome/>,
    spanText: 'Inicio',
    href: '#home', 
    isActive: true
  }, 
  {
    iconComponent: <BiCake/>,
    spanText: 'Productos',
    href: '#products', 
    isActive: false
  },
  {
    iconComponent: <AiOutlineCalculator/>,
    spanText: 'Calculá tu pedido',
    href: '#calc', 
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
        onClick={() => setNavItemToActive(index)}
        key={index}
      >
        <Link href={item.href}>
          <a className={`${styles['navbar__list-item']} ${item.isActive ? styles['navbar__list-item--active'] : ''}`}>
            {item.iconComponent}
            <span>{item.spanText}</span>
          </a>
        </Link>
      </li>
    ))}
    </ul>
    </nav>  
  )
}

export default HeaderNavbar;