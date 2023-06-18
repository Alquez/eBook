// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './profile.module.css'
function Profile() {
  return (
    <div className={styles.con_tainer}>
       <div className={styles.blk12}>
        
         <button className={styles.blk_border}>
                <img className={styles.icon_ab} src="./public/image/icon/iPhone 13/i 13.png" alt="" />
                <h3 className={styles.ab}>О нас</h3>
         </button>
         <button className={styles.blk_border}>
                <img className={styles.icon_ab1} src="./public/image/icon/iPhone 13/i 14.png" alt="" />
                <h3 className={styles.ab}>Добавить заявку</h3>
         </button>
         <button className={styles.blk_border}>
                <img className={styles.icon_ab1} src="./public/image/icon/iPhone 13/i 5 1.png" alt="" />
                <h3 className={styles.ab}>Контакты</h3>
         </button>
         <button className={styles.blk_border1}>
                <img className={styles.icon_ab2} src="./public/image/icon/iPhone 13/i 7.png" alt="" />
                <h3 className={styles.ab}>Сообщить о проблеме</h3>
         </button>
         <button className={styles.blk_border}>
                <img className={styles.icon_ab1} src="./public/image/icon/iPhone 13/i 8.png" alt="" />
                <h3 className={styles.ab}>Авторизация</h3>
          </button>
         </div>
    </div>
  )
}

export default Profile