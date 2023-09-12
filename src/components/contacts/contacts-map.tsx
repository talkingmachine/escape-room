import { useRef } from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';

const deleteData = { //TOREMOVE
  lat: 59.968325,
  lng: 30.317421,
  zoom: 16.4
};

function ContactsMap() {
  const mapRef = useRef(null);
  const map = useMap(mapRef, deleteData); //TOREMOVE

  if (map) {
    leaflet
      .marker({
        lat: deleteData.lat, //TOREMOVE
        lng: deleteData.lng, //TOREMOVE
      })
      .addTo(map);
  }

  return (
    <div className="map__container" ref={mapRef}/>
  );
}

export default ContactsMap;

