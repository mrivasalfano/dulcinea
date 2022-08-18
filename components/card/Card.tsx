import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react'
import styles from './Card.module.css'

interface Props {
    image: StaticImageData;
    title: string;
    description: string;
}

const Card: FC<Props> = ({image, title, description}: Props) => {
  return (
    <div className={styles.card}>
        <Image
          className={styles.card__image}
          src={image}
          alt="Torta chajá"
          layout='responsive'
        />
        <div className={styles.card__body}>
          <h3 className={styles.card__title}>{title}</h3>
          <span className={styles.card__description}>{description}</span>
        </div>
    </div>
  )
}

export default Card;