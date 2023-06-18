// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './application.module.css'
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import { useNavigate } from 'react-router';


function Application() {

  const redict = useNavigate();

  const hendler_1  =  (e) => {
   e.preventDefault();
   redict('/ribbon')
  } 


  // files
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };


  // camera
  const videoRef = useRef(null);
  const openCamera = async (e) => {
    e.preventDefault()
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { // Для Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Для Chrome, Safari и Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // Для Internet Explorer и Edge
        videoRef.current.msRequestFullscreen();
      }
    } catch (error) {
      console.error('Ошибка при открытии камеры:', error);
    }
  };



  // location
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          reverseGeocode(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const reverseGeocode = (lat, lng) => {
    const geocoder = L.Control.Geocoder.nominatim();
    const location = L.latLng(lat, lng);

    geocoder.reverse(location, 10, (results) => {
      if (results.length > 0) {
        setAddress(results[0].name);
      }
    });
  };
  return (
    <div>
      <div className={styles.application}>
        <div className={styles.container}>
          <form className={styles.form_app} action="">
            <input name='Img' id='file' className={styles.files} type="file" multiple onChange={handleFileChange} />
            <label className={styles.labelInp} htmlFor="file">
              <span>Выбрать фото</span>
                <a className={styles.loc_gps} href="">
                <img id='camera' onClick={openCamera} className={styles.img_camera} src="./public/image/icon/camera.svg" alt="" />
              </a>
            </label>
            <div className={styles.previewContainer}>
              {selectedFiles.map((file, index) => (
                <div key={index} className={styles.filePreview}>
                  <img className={styles.preview} src={URL.createObjectURL(file)} alt={file.name} />
                  <span>{file.name}</span>
                </div>
              ))}
              <input name='Description' type="textarea" placeholder='Описание проблемы' className={styles.inputs} />
            </div>
            <div className={styles.camera}>
              {/* <input className={styles.inputs} type="number" placeholder='Номер телефона' id="" /> */}

            </div>
              
            <div className={styles.location}>
            {latitude && longitude ? (
              <div>
                <input className={styles.inputs} name="Gps" value={address} readOnly type="text" placeholder='Укажите адрес' id="" />
              </div>
            ) : (
              <p>Получение геолокации...</p>
              )}


              <a className={styles.loc_gps} href="">
                <img src="./public/image/footer_icon/gps.svg" alt="" />
              </a>
            </div>
            <input placeholder='Укажите ваш город' className={styles.inputs} type="text" name="" id="" />
            <button onClick={hendler_1} className={styles.btn} type="submit">Отправить</button>
          </form>
          <video ref={videoRef} autoPlay></video>
          
        </div>
      </div>
    </div>
  )
}

export default Application