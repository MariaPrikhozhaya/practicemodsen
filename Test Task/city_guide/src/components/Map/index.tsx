import React, {useState, useEffect, useContext } from "react";
import { YMaps, Map, Placemark, Circle} from '@pbe/react-yandex-maps';
import { AppContext } from "../Provider";
import { useLocation } from "../../hooks/useLocation";

import place from '@assets/vec.png';

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  };


  const MapF = () => {
    
    const [places, setPlaces] = useState([]);
    const {userLocation, error} = useLocation();
    // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
    const { radius } = useContext(AppContext);

    const fetchPlaces = async () => {
      try {
        const response = await fetch(
          `https://search-maps.yandex.ru/v1/?text=Аптека&lang=ru_RU&ll=27.446775,53.908177&apikey=860e4b4c-a113-40c5-b8d4-d9656e926e1d&rspn=20`
        );
        const data = await response.json();
        console.log(data);
        setPlaces(data.features);
      } catch (error) {
        console.error("Error fetching cafes:", error);
      }
    };
  
  
    useEffect(() => {
      fetchPlaces();
    }, []);


    return (
      <YMaps>
        <Map
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
              <Placemark
                geometry={userLocation}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: place,
                  iconImageSize: [32, 24],
                }}
              />
          )}
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

        {places.map((place) => (
          <Placemark
            key={place.id}
            geometry={[place.geometry.coordinates[1], place.geometry.coordinates[0]]} 
            options={{
              iconLayout: 'default#image',
              iconImageHref: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png.png', 
              iconImageSize: [32, 24],
            }}
          />
        ))}
        </Map>
      </YMaps>
    );
  };
  
  export default MapF;