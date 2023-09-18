import { useRef } from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import defaultMarkerIcon from '../../../public/img/svg/pin-active.svg';
import { defaultContactsMapData } from '../../const/consts';

function ContactsMap() {
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultContactsMapData);
  const activeMarker = new leaflet.Icon({
    iconUrl: defaultMarkerIcon,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  });
  if (map) {
    leaflet
      .marker({
        lat: defaultContactsMapData.lat,
        lng: defaultContactsMapData.lng,
      })
      .setIcon(activeMarker)
      .addTo(map);
  }

  return (
    <div className="map__container" ref={mapRef}/>
  );
}

export default ContactsMap;

