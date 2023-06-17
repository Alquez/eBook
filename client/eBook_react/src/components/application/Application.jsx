// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import styles from './application.module.css'


function Application() {

const onSelectFile = (event) =>{
  const selectedFiles = event.target.files
  console.log(selectedFiles);
}

  return (
    <div>
      <div className={styles.application}>
        <form action="">
        <label htmlFor="images">+Add Images</label>
        <span>up to 10 images</span>
        <input type="file" name='images' onChange={onSelectFile}/>
        </form>
      </div>
    </div>
  )
}

export default Application