import React, { FC } from 'react'
import styles from './Cards.module.css'

interface Props {
    children: any;
}

const Cards: FC<Props> = ({children}: Props) => {
  return (
    <div className={styles.cards}>
        {children}
    </div>
  )
}

export default Cards