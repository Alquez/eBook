// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
function Location() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState('');

  const handleGeocode = () => {
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
  };

  const reverseGeocode = (lat, lng) => {
    const geocoder = L.Control.Geocoder.nominatim();
    const location = L.latLng(lat, lng);

    geocoder.reverse(location, (results) => {
      if (results && results.length > 0) {
        setAddress(results[0].properties.address);
      }
    });
  };

  return (
    <div>
      <button onClick={handleGeocode}>Получить геолокацию</button>
      {latitude && longitude && (
        <div>
          <p>Широта: {latitude}</p>
          <p>Долгота: {longitude}</p>
          <p>Адрес: {address}</p>
        </div>
      )}
    </div>
  )
}

export default Location