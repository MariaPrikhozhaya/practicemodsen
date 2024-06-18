import React, {useState, useEffect } from "react";
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';


const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  
  };


const MapF = () => {
    const [userLocation, setUserLocation] = useState(null);
  
    useEffect(() => {
      geoFindMe();
    }, []);
  
    function geoFindMe() {
  
      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation([latitude, longitude]);
      }
  
      function error() {
        console.log("Невозможно получить ваше местоположение");
      }
  
      if (!navigator.geolocation) {
        console.log("Geolocation не поддерживается вашим браузером");
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }
  
    return (
        <YMaps>
          <Map
            // Центрировать карту по умолчанию на выбранной точке
            defaultState={{ center: userLocation, zoom: 16 }}
            style={containerStyle}
          >
            {userLocation && ( // Conditionally render Placemark
              <Placemark
              geometry={userLocation}
              options={{
                  iconLayout: 'default#image',
                  iconImageHref: 'https://i.ibb.co/r0QJ7QK/2.png',
                  iconImageSize: [32, 24]
              }}
          />
      )}
            <Circle
                geometry={[userLocation, 1000]}
                options={{
                    draggable: false,
                    fillColor: "#5E7BC7",
                    fillOpacity: 0.1,
                    strokeColor: "#5E7BC7",
                    strokeOpacity: 0.2,
                    strokeWidth: 2
                }}
            />
            <Circle
                geometry={[userLocation, 100]}
                options={{
                    draggable: false,
                    fillColor: "#5E7BC7",
                    fillOpacity: 0.2,
                    strokeWidth: 0
                }}
            />
          </Map>
        </YMaps>
    );
  };
  
  export default MapF;