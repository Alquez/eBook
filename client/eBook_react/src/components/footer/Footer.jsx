// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'
function Footer() {



  return (
      <footer>
        <NavLink to="/">
          <img className={styles.icon} src="./public/image/footer_icon/home.svg" alt="" />
        </NavLink>
        <NavLink to="/application">
          <img className={styles.icon} src="./public/image/footer_icon/public.svg" alt="" />
        </NavLink>
        <NavLink to="/">
          <img className={styles.icon} src="./public/image/footer_icon/gps.svg" alt="" />
        </NavLink>
        <NavLink to="/profile">
          <img className={styles.icon} src="./public/image/footer_icon/profile.svg" alt="" />
        </NavLink>
      </footer>
  )
}

export default Footer