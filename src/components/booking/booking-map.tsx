import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import activeMarkerIcon from '../../../public/img/svg/pin-active.svg';
import defaultMarkerIcon from '../../../public/img/svg/pin-default.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { setCurrentPlace } from '../../store/actions';
import { useLocation } from 'react-router-dom';
import { getBookingInfo } from '../../store/api-actions';
import { Place } from '../../types/types';

function BookingMap (): JSX.Element{

  const dispatch = useAppDispatch();
  const location = useLocation();
  const bookingInfo = useAppSelector((state) => state.DATA.bookingInfo);
  const currentPlace = useAppSelector((state) => state.STATES.currentPlace);

  const deleteData = {
    lat: bookingInfo[0].location.coords[0],
    lng: bookingInfo[0].location.coords[1],
    zoom: 10
  };
  const mapRef = useRef(null);
  const map = useMap(mapRef, deleteData);
  const markersLayer = map ? leaflet.featureGroup().addTo(map) : null;

  if (markersLayer) {
    markersLayer.on('click', (event) => {
      const newCurrentPlace = bookingInfo.find((place) =>
        place.location.coords[0] === event.latlng.lat && place.location.coords[1] === event.latlng.lng
      );
      if (newCurrentPlace) {
        dispatch(setCurrentPlace(newCurrentPlace));
      }
    });
  }
  useEffect(() => {
    const bookingData = dispatch(getBookingInfo({id: location.state as string}));
    bookingData.then((data) => { // first setting currentPlace
      const castedData = data.payload as Place[];
      dispatch(setCurrentPlace(castedData[0]));
    });

  }, [dispatch, location.state]);

  useEffect(()=>{
    const defaultMarker = new leaflet.Icon({
      iconUrl: defaultMarkerIcon,
      iconSize: [27, 39],
      iconAnchor: [13.5, 39]
    });
    const activeMarker = new leaflet.Icon({
      iconUrl: activeMarkerIcon,
      iconSize: [27, 39],
      iconAnchor: [13.5, 39]
    });

    if (markersLayer) {
      bookingInfo.forEach((place)=>{
        leaflet.marker({
          lat: place.location.coords[0],
          lng: place.location.coords[1],
        }).setIcon(place.id === currentPlace.id ? activeMarker : defaultMarker)
          .addTo(markersLayer);
      });
    }
    return () => {
      markersLayer?.clearLayers();
    };
  }, [bookingInfo, currentPlace.id, markersLayer]);

  return (
    <div className="page-content__item">
      <div className="booking-map">
        <div className="map">
          <div className="map__container" ref={mapRef}/>
        </div>
        <p className="booking-map__address">Вы&nbsp;выбрали: {currentPlace.location.address}</p>
      </div>
    </div>
  );
}

export default BookingMap;


