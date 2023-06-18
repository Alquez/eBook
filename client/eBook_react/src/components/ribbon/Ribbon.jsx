// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect } from 'react'
import styles from './ribbon.module.css'


import axios from 'axios'

const src = 'https://jsonplaceholder.typicode.com/posts'
function Ribbon() {

  // const [articles, setArticles] = useState([]);
  useEffect(()=>{
    axios
    .get(src)
    .then(data=>{
      console.log(data.title);
    })
  },[]);

  return (
    <div className={styles.ribbon}>
      <div className={styles.item}>
        <div className={styles.profile}>
          <img className={styles.profile_img} src="./public/image/icon/profile_img.svg" alt="" />
          <p>Бектурганов Амир</p>
        </div>
        <div className={styles.cont_img}>
          <img className={styles.image} src='./public/image/Rectangle 18.png' alt="" />
        </div>
        <div className={styles.foot_item}>
          <span>
            <img src="./public/image/icon/mode_comment.png" alt="" />
          </span>
          <span>
            <img className={styles.like} src="./public/image/icon/like.png" alt="" />
            <p>11</p>
            <img className={styles.dislike} src="./public/image/icon/like.png" alt="" />
            <p>2</p>
          </span>
        </div>
        <div className={styles.text}>
          <p>Возле озера ГЕС-5 постоянные скопления мусора месяцами</p>
        </div>
      </div>
    </div>
  )
}

export default Ribbon