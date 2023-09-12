import { MutableRefObject, useEffect, useRef, useState } from 'react';
import leaflet, {Map} from 'leaflet';

type CenterType = {
  lat: number;
  lng: number;
  zoom: number;
}

function useMap(mapRef:MutableRefObject<HTMLElement | null>, center:CenterType): Map | null{
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: center.lat,
          lng: center.lng,
        },
        zoom: center.zoom,
      });
      leaflet
        .tileLayer( //http://tile2.maps.2gis.com/tiles?x={x}& y={y}& z={z}
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        )
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, center]);

  return map;
}

export default useMap;
