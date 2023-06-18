// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './authorization.module.css'
import { useNavigate } from 'react-router'



function Authorization() {

 const redirect = useNavigate();

 const hendler  =  (e) => {
  e.preventDefault();
  redirect('/application')
 } 
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Авторизация</h1>
      </div>
      <form onSubmit={hendler} action="" className={styles.form}>
        <input type="text"
        id={styles.name}
        name='name'
        className={styles.input}
        placeholder='Имя' />

        <input type="text"
        id={styles.name}
        name='surname'
        className={styles.input}
        placeholder='Фамилия' />

        <input type="number"
        id={styles.name}
        name='number'
        className={styles.input}
        placeholder='Номер телефона' />

        <input type="email"
         name="email"
         id={styles.email}
         className={styles.input}
         placeholder='Email (не обязательно)' />

         <button  type="submit" className={styles.btn}>
          Зарегистрироваться
         </button>
      </form>
    </div>
  )
}

export default Authorization