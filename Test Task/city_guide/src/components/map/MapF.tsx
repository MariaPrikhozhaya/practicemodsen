import React, {useState, useEffect, useContext } from "react";
import { YMaps, Map, Placemark, Circle} from '@pbe/react-yandex-maps';
import { AppContext } from "../provider/AppProvider";

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  
  };


  const MapF = () => {
    const [userLocation, setUserLocation] = useState(null);
    // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
    const { searchAddress, radius } = useContext(AppContext);
  
    const getCoordinatesFromAddress = async () => {
      try {
        if (searchAddress) {
          const response = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=d40d7ec9-f5ab-4c2d-8515-179c8f0fadd5&format=json&geocode=${searchAddress}`
          );
          const data = await response.json();
          const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
            ' '
          );
          setUserLocation([parseFloat(coordinates[1]), parseFloat(coordinates[0])]);
        }
      } catch (error) {
        console.error('Error getting coordinates:', error);
      }
    };
  
    useEffect(() => {
      if (searchAddress) {
        getCoordinatesFromAddress();
      } else {
        geoFindMe();
      }
    }, [searchAddress]);
  


    function geoFindMe() {
      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation([latitude, longitude]);
      }
  
      function error() {
        console.log('Невозможно получить ваше местоположение');
      }
  
      if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером');
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }
  
    return (
      <YMaps>
        <Map
          // Центрировать карту по умолчанию на выбранной точке
          state={{
            center: userLocation,
            zoom: 16,
            // Опция "on" позволяет реагировать на изменение userLocation
            // @ts-expect-error TS(2322): Type '{ center: any; zoom: number; on: { userLocat... Remove this comment to see the full error message
            on: {
              userLocationChange: (event) => {
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                this.setState({ center: event.value });
              },
            },
          }}
          // @ts-expect-error TS(2322): Type '{ width: string; height: string; position: s... Remove this comment to see the full error message
          style={containerStyle}
        >
          {userLocation && (
            <>
              <Placemark
                geometry={userLocation}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: 'https://i.ibb.co/r0QJ7QK/2.png',
                  iconImageSize: [32, 24],
                }}
              />
              <Circle
                geometry={[userLocation, radius*1000]}
                options={{
                  draggable: false,
                  fillColor: '#5E7BC7',
                  fillOpacity: 0.1,
                  strokeColor: '#5E7BC7',
                  strokeOpacity: 0.2,
                  strokeWidth: 2,
                }}
              />
              <Circle
                geometry={[userLocation, radius*100]}
                options={{
                  draggable: false,
                  fillColor: '#5E7BC7',
                  fillOpacity: 0.2,
                  strokeWidth: 0,
                }}
              />
            </>
          )}
        </Map>
      </YMaps>
    );
  };
  
  export default MapF;