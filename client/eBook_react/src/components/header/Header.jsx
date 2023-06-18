// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './header.module.css'
function Header() {
  return (
  <header>
    <div>
      <img src='./public/image/icon/logo.png' alt="" />
    </div>
    <div className={styles.input}>
      <input type="search" placeholder='Поиск' className={styles.search} />
      <img className={styles.img_search} src="./public/image/icon/search.png" alt="" />
    </div>
    <div>
      <a href="" className={styles.language}>
        <img className={styles.flag} src="./public/image/icon/flag.png" alt="" />
      </a>
    </div>
  </header>
  )
}

export default Header