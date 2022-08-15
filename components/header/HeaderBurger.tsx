import { DispatchWithoutAction, FC, useState } from "react";
import styles from './HeaderBurger.module.css'

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderBurger: FC<Props> = ({opened, setOpened}: Props) => {
  return (
    <button 
    className={`${styles.header__burger} ${styles['header__burger--elastic']} ${opened ? styles['header__burger--active'] : ''}`} 
    type="button"
    onClick={() => setOpened(!opened)}
    >
    <span className={styles['header__burger-box']}>
        <span className={styles["header__burger-inner"]}></span>
    </span>
    </button>
  )
}

export default HeaderBurger;