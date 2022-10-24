import { FC, memo } from 'react';
import { GoogleMap, Marker, Polyline, useJsApiLoader, } from '@react-google-maps/api';
import { IAirport } from '../types';
const containerStyle = {
  width: '100%',
  height: '100%'
};

interface IAirportMap {
  center: google.maps.LatLngLiteral
  departing: IAirport
  destination: IAirport
}

export const AirportMap: FC<IAirportMap> = ({ center, departing, destination }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAoKogalAIj85BSFAfikRwwLqLWhi_JXzU'
  });

  if (!isLoaded) return <div>Map Loading ...</div>

  return (
    <GoogleMap
      id='google-map'
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}

    >
      <Marker
        position={{
          lat: departing.latitude,
          lng: departing.longitude
        }}
        label='departing'
      />
      <Marker
        position={{
          lat: departing.latitude,
          lng: departing.longitude
        }}
        label='destination'
      />
      <Polyline
        path={[{
          lat: departing.latitude,
          lng: departing.longitude
        }, {
          lat: departing.latitude,
          lng: departing.longitude
        }]}
      />
    </GoogleMap>
  )
}

export default memo(AirportMap)