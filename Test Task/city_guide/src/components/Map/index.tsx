import React, {useState, useEffect, useContext } from "react";
import { YMaps, Map, Placemark, Circle} from '@pbe/react-yandex-maps';
import { useLocation } from "../../hooks/useLocation";

import place from '@assets/vec.png';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ObjectInfo from "../ObjectInfo";
import RouteInfo from "../RouteInfo";

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  };

const API_KEY = '860e4b4c-a113-40c5-b8d4-d9656e926e1d';
const API_KEY2 = 'b22bff34-3caa-4f6b-ae34-fd7ff86d594d';

  const MapF = () => {
    
    const {userLocation, error} = useLocation();
    const geoObjects = useAppSelector(state => state.geoObjectsReducer);
    const dispatch = useAppDispatch();
    const [obj, setObj] = useState([]);

    useEffect(() => {
      if (geoObjects.radius !== 0 && userLocation && geoObjects.selectedCategories)
          fetchPlaces().then(attractions => setObj(attractions));
          console.log(obj);
  }, [geoObjects.radius, userLocation, geoObjects.selectedCategories]);
    

    const fetchPlaces = async () => {
      let arr = [];
      for (let i = 0; i < geoObjects.selectedCategories.length; i++) {
          try {
              const radius = geoObjects.radius/111;
              const response = await fetch(`https://search-maps.yandex.ru/v1/?text=${geoObjects.selectedCategories[i].text}&type=biz&lang=ru_RU&apikey=${API_KEY2}&rspn=1&ll=${userLocation[1]},${userLocation[0]}&spn=${radius},${radius}&results=100`);
              const data = await response.json();
              arr.push({ attractions : data.features, category: geoObjects.selectedCategories[i] }); 
          } catch (error) {
              console.error("Error fetching attractions:", error);
          }
      }

      return arr;
  }

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    console.log(selectedPlace);
  };

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
                geometry={[userLocation, geoObjects.radius*1000]}
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
                geometry={[userLocation, geoObjects.radius*100]}
                options={{
                  draggable: false,
                  fillColor: '#5E7BC7',
                  fillOpacity: 0.2,
                  strokeWidth: 0,
                }}
              />

                {obj.length !== 0 && geoObjects.radius && obj.map((place) => (
                        place.attractions.map((attr) => (
                            <Placemark
                                key={attr.id}
                                geometry={[attr.geometry.coordinates[1], attr.geometry.coordinates[0]]} 
                                options={{
                                iconLayout: 'default#image',
                                iconImageHref: place.category.icon, 
                                iconImageSize: [32, 32],
                                }
                              }
                              onClick={() => handlePlaceClick(attr)}
                            />
                        ))
                    ))
                } 
                
        </Map>
        {selectedPlace && obj.length && (
          <ObjectInfo object={selectedPlace} />
        )}
        <RouteInfo />
      </YMaps>
    );
  };
  
  export default MapF;